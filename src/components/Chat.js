import React, { useState, useEffect, useRef } from 'react';
import { SYSTEM_PROMPT, DATA } from '../data';

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
      // Local Mock Mode
      await new Promise(r => setTimeout(r, 600)); // Simulate delay
      let reply = '';
      const lowerMsg = msg.toLowerCase();
      
      if (lowerMsg.includes('skill') || lowerMsg.includes('tech') || lowerMsg.includes('stack')) {
        reply = `Kamesh is highly skilled in modern tech:\n• Frontend: ${DATA.skills.Frontend.join(', ')}\n• Backend: ${DATA.skills.Backend.join(', ')}\n• Databases: ${DATA.skills.Database.join(', ')}`;
      } else if (lowerMsg.includes('project') || lowerMsg.includes('community')) {
        reply = `He has built some impressive projects including:\n` + DATA.projects.map(p => `• ${p.name}: ${p.desc}`).join('\n');
      } else if (lowerMsg.includes('experience') || lowerMsg.includes('work') || lowerMsg.includes('intern')) {
        reply = `Kamesh has ${DATA.stats[0].value} year(s) of experience. Notably, he's worked as a:\n` + DATA.experience.map(e => `• ${e.role} at ${e.company} (${e.period})`).join('\n');
      } else if (lowerMsg.includes('hire') || lowerMsg.includes('available') || lowerMsg.includes('contact') || lowerMsg.includes('email') || lowerMsg.includes('phone')) {
        reply = `Yes, Kamesh is open to new opportunities! Feel free to reach out to him at ${DATA.email} or call ${DATA.phone}.`;
      } else if (lowerMsg.includes('education') || lowerMsg.includes('degree') || lowerMsg.includes('college')) {
        reply = `He holds a ${DATA.education.degree} from ${DATA.education.school} (Class of ${DATA.education.year}). Modules include: ${DATA.education.modules.join(', ')}.`;
      } else if (lowerMsg.includes('hello') || lowerMsg.includes('hi ')) {
        reply = `Hello! I'm Kamesh's virtual assistant. Try asking me about his skills, projects, or experience!`;
      } else {
        reply = `I don't quite have the answer to that! However, I'd love to tell you about Kamesh's **skills**, **projects**, **experience**, **education**, or **contact info**. What would you like to know?`;
      }
      setMsgs(prev => [...prev, { role: 'assistant', content: reply }]);
    }
    setLoading(false);
  };

  return (
    <section style={{ maxWidth: 1100, margin: '0 auto', padding: '3rem 1.5rem' }}>
      <h2 style={{ fontWeight: 800, fontSize: 'clamp(1.5rem,3vw,2.2rem)', marginBottom: '0.5rem' }}>
        Ask About Me<span style={{ color: '#79ff97' }}>.</span>
      </h2>
      <p style={{ color: '#8b949e', fontSize: 13, marginBottom: '1.5rem' }}>
        Powered by Claude AI — ask anything about Kamesh's background, skills, or availability.
      </p>

      {/* API Key config */}
      {showKeyInput && (
        <div style={{
          background: '#0d1117', border: '1px solid #e8c87a40',
          borderRadius: 10, padding: '1rem', marginBottom: 16,
        }}>
          <p style={{ color: '#e8c87a', fontSize: 12, marginBottom: 10 }}>
            ⚠ Enter your Anthropic API key to enable the chat assistant.
            <a href="https://console.anthropic.com" target="_blank" rel="noreferrer"
              style={{ color: '#58a6ff', marginLeft: 6 }}>Get one here ↗</a>
          </p>
          <div style={{ display: 'flex', gap: 8 }}>
            <input
              type="password"
              placeholder="sk-ant-..."
              value={apiKey}
              onChange={e => setApiKey(e.target.value)}
              style={{
                flex: 1, background: '#161b22', border: '1px solid #21262d',
                borderRadius: 8, padding: '8px 12px', color: '#e6edf3',
                fontSize: 13, outline: 'none',
              }}
            />
            <button onClick={saveKey} style={{
              background: '#79ff97', color: '#06090f', border: 'none',
              borderRadius: 8, padding: '8px 16px', cursor: 'pointer',
              fontSize: 13, fontWeight: 600,
            }}>Save</button>
          </div>
        </div>
      )}

      {/* Chat window */}
      <div style={{
        background: '#0d1117', border: '1px solid #21262d',
        borderRadius: 12, overflow: 'hidden',
      }}>
        {/* Messages */}
        <div style={{
          height: 400, overflowY: 'auto', padding: '1.5rem',
          display: 'flex', flexDirection: 'column', gap: 14,
        }}>
          {msgs.map((m, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start' }}>
                <div style={{
                  maxWidth: '82%',
                  background: m.role === 'user' ? 'var(--accent-green)' : 'var(--bg-glass)',
                  color: m.role === 'user' ? 'var(--bg)' : 'var(--text-main)',
                  borderRadius: m.role === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                  padding: '12px 18px', fontSize: 14, lineHeight: 1.6,
                  border: m.role === 'assistant' ? '1px solid var(--border-muted)' : 'none',
                  whiteSpace: 'pre-wrap',
                }}>
                  {m.role === 'assistant' && (
                    <p style={{ color: 'var(--accent-blue)', fontSize: 11, marginBottom: 8, letterSpacing: '0.5px', fontWeight: 600 }}>
                      ⬡ AI ASSISTANT
                    </p>
                  )}
                  {m.content}
                </div>
            </div>
          ))}

          {loading && (
            <div style={{ display: 'flex', gap: 6, padding: '8px 14px', background: '#161b22', borderRadius: 14, width: 'fit-content', border: '1px solid #21262d' }}>
              {[0, 1, 2].map(i => (
                <div key={i} style={{
                  width: 8, height: 8, borderRadius: '50%', background: '#79ff97',
                  animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite`,
                }} />
              ))}
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div style={{
          borderTop: '1px solid #21262d', padding: '1rem',
          display: 'flex', gap: 8, background: '#0d1117',
        }}>
          <input
            ref={inputRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && sendMessage()}
            placeholder="Ask about skills, projects, availability..."
            style={{
              flex: 1, background: '#161b22', border: '1px solid #21262d',
              borderRadius: 8, padding: '10px 14px', color: '#e6edf3',
              fontSize: 13, outline: 'none',
            }}
          />
          <button
            onClick={() => sendMessage()}
            disabled={loading || !input.trim()}
            className="glow-btn"
            style={{
              background: loading || !input.trim() ? '#161b22' : 'var(--accent-green)',
              color: loading || !input.trim() ? '#8b949e' : 'var(--bg)',
              border: 'none', borderRadius: 8,
              padding: '10px 24px', fontSize: 14,
              cursor: loading || !input.trim() ? 'not-allowed' : 'pointer',
              fontWeight: 700,
            }}
          >
            Send ↵
          </button>
        </div>
      </div>

      {/* Quick prompts */}
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 12 }}>
        {QUICK.map(q => (
          <button key={q} onClick={() => sendMessage(q)} style={{
            background: 'transparent', border: '1px solid #21262d',
            color: '#8b949e', fontSize: 12, padding: '5px 12px',
            borderRadius: 20, cursor: 'pointer', transition: 'all 0.2s',
          }}>
            {q}
          </button>
        ))}
        <button onClick={() => setShowKeyInput(!showKeyInput)} style={{
          background: 'transparent', border: '1px solid #e8c87a30',
          color: '#e8c87a', fontSize: 11, padding: '5px 12px',
          borderRadius: 20, cursor: 'pointer', }}>
          ⚙ API Key
        </button>
      </div>

      <style>{`
        @keyframes bounce {
          0%,100%{transform:translateY(0);opacity:0.4}
          50%{transform:translateY(-5px);opacity:1}
        }
      `}</style>
    </section>
  );
}
