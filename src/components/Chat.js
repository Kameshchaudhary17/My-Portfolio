import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SYSTEM_PROMPT, DATA } from '../data';
import { Send, Bot, User, Key, Info, Sparkles } from 'lucide-react';

const QUICK = [
  "What are his core skills?",
  "Tell me about Community Fix",
  "Is he available for hire?",
  "What's his tech stack?",
  "How can I contact Kamesh?",
];

export default function Chat() {
  const [msgs, setMsgs] = useState([
    {
      role: 'assistant',
      content: "Hi! 👋 I'm an AI assistant with full knowledge of Kamesh's portfolio. Ask me anything — his skills, projects, experience, or whether he'd be a great fit for your team!",
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [apiKey, setApiKey] = useState(localStorage.getItem('kc_api_key') || '');
  const [showKeyInput, setShowKeyInput] = useState(!localStorage.getItem('kc_api_key'));
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [msgs, loading]);

  const saveKey = () => {
    localStorage.setItem('kc_api_key', apiKey);
    setShowKeyInput(false);
  };

  const sendMessage = async (text) => {
    const msg = (text || input).trim();
    if (!msg || loading) return;
    setInput('');

    const newMsgs = [...msgs, { role: 'user', content: msg }];
    setMsgs(newMsgs);
    setLoading(true);

    if (apiKey) {
      try {
        const res = await fetch('https://api.anthropic.com/v1/messages', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey,
            'anthropic-version': '2023-06-01',
            'anthropic-dangerous-direct-browser-access': 'true',
          },
          body: JSON.stringify({
            model: 'claude-sonnet-4-20250514',
            max_tokens: 600,
            system: SYSTEM_PROMPT,
            messages: newMsgs.map(m => ({ role: m.role, content: m.content })),
          }),
        });

        const data = await res.json();
        if (data.error) throw new Error(data.error.message);
        const reply = data.content?.[0]?.text || 'Sorry, no response received.';
        setMsgs(prev => [...prev, { role: 'assistant', content: reply }]);
      } catch (err) {
        setMsgs(prev => [...prev, {
          role: 'assistant',
          content: `Error: ${err.message}. Switching to local mode...`,
        }]);
      }
    } else {
      await new Promise(r => setTimeout(r, 800));
      let reply = '';
      const lowerMsg = msg.toLowerCase();
      
      if (lowerMsg.includes('skill') || lowerMsg.includes('tech') || lowerMsg.includes('stack')) {
        reply = `Kamesh is highly skilled in modern tech:\n\n• Frontend: ${DATA.skills.Frontend.join(', ')}\n• Backend: ${DATA.skills.Backend.join(', ')}\n• Databases: ${DATA.skills.Database.join(', ')}`;
      } else if (lowerMsg.includes('project') || lowerMsg.includes('community')) {
        reply = `He has built some impressive projects including:\n\n` + DATA.projects.map(p => `• ${p.name}: ${p.desc}`).join('\n\n');
      } else if (lowerMsg.includes('experience') || lowerMsg.includes('work') || lowerMsg.includes('intern')) {
        reply = `Kamesh has ${DATA.stats[0].value} year(s) of experience. Notably, he's worked as a:\n\n` + DATA.experience.map(e => `• ${e.role} at ${e.company} (${e.period})`).join('\n\n');
      } else if (lowerMsg.includes('hire') || lowerMsg.includes('available') || lowerMsg.includes('contact') || lowerMsg.includes('email') || lowerMsg.includes('phone')) {
        reply = `Yes, Kamesh is open to new opportunities! Feel free to reach out to him at ${DATA.email} or call ${DATA.phone}.`;
      } else if (lowerMsg.includes('education') || lowerMsg.includes('degree') || lowerMsg.includes('college')) {
        reply = `He holds a ${DATA.education.degree} from ${DATA.education.school} (Class of ${DATA.education.year}). Modules include: ${DATA.education.modules.join(', ')}.`;
      } else {
        reply = `I'd love to tell you more about Kamesh's **skills**, **projects**, or **experience**. What specific area are you interested in?`;
      }
      setMsgs(prev => [...prev, { role: 'assistant', content: reply }]);
    }
    setLoading(false);
  };

  return (
    <section style={{ maxWidth: 1100, margin: '0 auto', padding: '3rem 1.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '0.5rem' }}>
        <h2 style={{ fontWeight: 800, fontSize: 'clamp(1.5rem,3vw,2.2rem)' }}>
          AI Assistant<span style={{ color: '#79ff97' }}>.</span>
        </h2>
        <Sparkles size={24} color="#79ff97" />
      </div>
      <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, marginBottom: '2rem' }}>
        Learn more about Kamesh through his virtual companion
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 280px', gap: 24, alignItems: 'start' }} className="chat-layout">
        <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 24, overflow: 'hidden', display: 'flex', flexDirection: 'column', height: 500 }}>
          {/* Messages */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: 16 }}>
            <AnimatePresence initial={false}>
              {msgs.map((m, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  style={{ display: 'flex', justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start', gap: 10 }}
                >
                  {m.role === 'assistant' && (
                    <div style={{ width: 32, height: 32, borderRadius: '35%', background: 'rgba(121,255,151,0.1)', border: '1px solid rgba(121,255,151,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Bot size={18} color="#79ff97" />
                    </div>
                  )}
                  <div style={{
                    maxWidth: '85%',
                    background: m.role === 'user' ? '#79ff97' : 'rgba(255,255,255,0.04)',
                    color: m.role === 'user' ? '#06090f' : '#e6edf3',
                    borderRadius: m.role === 'user' ? '20px 20px 4px 20px' : '20px 20px 20px 4px',
                    padding: '12px 18px', fontSize: 14, lineHeight: 1.6,
                    border: m.role === 'assistant' ? '1px solid rgba(255,255,255,0.08)' : 'none',
                    whiteSpace: 'pre-wrap',
                  }}>
                    {m.content}
                  </div>
                  {m.role === 'user' && (
                    <div style={{ width: 32, height: 32, borderRadius: '35%', background: '#79ff9720', border: '1px solid #79ff9740', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <User size={18} color="#79ff97" />
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
            {loading && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: 'flex', gap: 4, padding: '12px 20px', background: 'rgba(255,255,255,0.03)', borderRadius: 20, width: 'fit-content' }}>
                <div className="dot-pulse" />
              </motion.div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input Area */}
          <div style={{ padding: '1.2rem', background: 'rgba(0,0,0,0.2)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ display: 'flex', gap: 10, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 16, padding: '6px 6px 6px 14px' }}>
              <input
                ref={inputRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && sendMessage()}
                placeholder="Message assistant..."
                style={{ flex: 1, background: 'transparent', border: 'none', color: '#fff', fontSize: 14, outline: 'none' }}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => sendMessage()}
                disabled={loading || !input.trim()}
                style={{
                  background: '#79ff97', color: '#06090f', border: 'none', borderRadius: 12,
                  width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: (loading || !input.trim()) ? 'not-allowed' : 'pointer', opacity: (loading || !input.trim()) ? 0.5 : 1
                }}
              >
                <Send size={18} />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: 20, border: '1px solid rgba(232, 200, 122, 0.2)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#e8c87a', marginBottom: 12 }}>
              <Key size={18} />
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.5px' }}>CLAUDE AI KEY</span>
            </div>
            {showKeyInput ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <input
                  type="password"
                  value={apiKey}
                  onChange={e => setApiKey(e.target.value)}
                  placeholder="sk-ant-..."
                  style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, padding: '8px 12px', color: '#fff', fontSize: 12, outline: 'none' }}
                />
                <button onClick={saveKey} style={{ background: '#e8c87a', color: '#06090f', border: 'none', borderRadius: 8, padding: '8px', fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>Save Settings</button>
              </div>
            ) : (
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>Key configured</span>
                <button onClick={() => setShowKeyInput(true)} style={{ background: 'transparent', border: 'none', color: '#e8c87a', fontSize: 11, cursor: 'pointer', textDecoration: 'underline' }}>Edit</button>
              </div>
            )}
          </div>

          <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.5)', marginBottom: 16 }}>
              <Info size={16} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.5px' }}>QUICK QUESTIONS</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {QUICK.map(q => (
                <button key={q} onClick={() => sendMessage(q)} className="quick-chip" style={{ 
                  textAlign: 'left', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', 
                  color: 'rgba(255,255,255,0.7)', fontSize: 12, padding: '10px 14px', borderRadius: 12, cursor: 'pointer',
                  transition: 'all 0.2s'
                }}>
                  {q}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .dot-pulse {
          position: relative; left: -9999px; width: 6px; height: 6px; border-radius: 3px;
          background-color: #79ff97; color: #79ff97; box-shadow: 9999px 0 0 0 #79ff97;
          animation: dot-pulse 1.5s infinite linear;
        }
        @keyframes dot-pulse {
          0% { box-shadow: 9999px 0 0 -5px #79ff97; }
          30% { box-shadow: 9999px 0 0 2px #79ff97; }
          60%, 100% { box-shadow: 9999px 0 0 -5px #79ff97; }
        }
        .quick-chip:hover {
          background: rgba(121, 255, 151, 0.05) !important;
          border-color: rgba(121, 255, 151, 0.2) !important;
          color: #79ff97 !important;
        }
        @media (max-width: 850px) {
          .chat-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
