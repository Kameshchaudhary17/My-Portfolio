import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { SYSTEM_PROMPT, DATA } from '../data';
import { Send, Bot, User, Key, Info, Sparkles, Trash2 } from 'lucide-react';

const QUICK = [
  "What are his core skills?",
  "Tell me about Community Fix",
  "Is he available for hire?",
  "What's his tech stack?",
  "How can I contact Kamesh?",
  "What's his experience?",
  "Tell me about his education",
];

const LOCAL_RESPONSES = [
  {
    patterns: ['skill', 'tech', 'stack', 'know', 'language', 'framework', 'tools', 'expertise', 'good at', 'proficient'],
    reply: () => `**Kamesh's Tech Stack**\n\n**Frontend**\n${DATA.skills.Frontend.map(s => `- ${s}`).join('\n')}\n\n**Backend**\n${DATA.skills.Backend.map(s => `- ${s}`).join('\n')}\n\n**Databases**\n${DATA.skills.Database.map(s => `- ${s}`).join('\n')}\n\n**Tools & Practices**\n${DATA.skills['Tools & Practices'].map(s => `- ${s}`).join('\n')}`,
  },
  {
    patterns: ['community fix', 'civic', 'final year', 'fyp'],
    reply: () => {
      const p = DATA.projects[0];
      return `**${p.name}** — ${p.tag}\n\n${p.desc}\n\n**Tech used:** ${p.stack.join(', ')}`;
    },
  },
  {
    patterns: ['plant', 'disease', 'ml', 'machine learning', 'detection', 'agriculture'],
    reply: () => {
      const p = DATA.projects[1];
      return `**${p.name}** — ${p.tag}\n\n${p.desc}\n\n**Tech used:** ${p.stack.join(', ')}`;
    },
  },
  {
    patterns: ['library', 'management', '.net', 'asp', 'entity framework', 'sql server'],
    reply: () => {
      const p = DATA.projects[2];
      return `**${p.name}** — ${p.tag}\n\n${p.desc}\n\n**Tech used:** ${p.stack.join(', ')}`;
    },
  },
  {
    patterns: ['project', 'built', 'build', 'portfolio', 'work sample', 'what have you made'],
    reply: () => `**Kamesh's Projects**\n\n${DATA.projects.map(p => `**${p.name}** *(${p.tag})*\n${p.desc}\n> Stack: ${p.stack.join(', ')}`).join('\n\n')}`,
  },
  {
    patterns: ['portpro', 'intern', 'internship', 'full stack developer intern'],
    reply: () => {
      const e = DATA.experience[0];
      return `**${e.role}** at **${e.company}** *(${e.period})*\n\n${e.bullets.map(b => `- ${b}`).join('\n')}`;
    },
  },
  {
    patterns: ['teaching assistant', 'gta', 'itahari', 'lecturer', 'mentor', 'teach'],
    reply: () => {
      const e = DATA.experience[1];
      return `**${e.role}** at **${e.company}** *(${e.period})*\n\n${e.bullets.map(b => `- ${b}`).join('\n')}`;
    },
  },
  {
    patterns: ['experience', 'work history', 'worked', 'job', 'career', 'professional'],
    reply: () => `**Work Experience**\n\n${DATA.experience.map(e => `**${e.role}** — ${e.company} *(${e.period})*\n${e.bullets.map(b => `- ${b}`).join('\n')}`).join('\n\n')}`,
  },
  {
    patterns: ['education', 'degree', 'college', 'university', 'study', 'studied', 'bsc', 'computing', 'graduate'],
    reply: () => `**Education**\n\n**${DATA.education.degree}**\n${DATA.education.school} — Class of ${DATA.education.year}\n\n**Modules covered:**\n${DATA.education.modules.map(m => `- ${m}`).join('\n')}`,
  },
  {
    patterns: ['hire', 'available', 'open to work', 'looking for', 'opportunity', 'job offer', 'recruit', 'position'],
    reply: () => `Yes! **Kamesh is actively open to new opportunities.**\n\nHe's looking for roles in full-stack development where he can work with React, Node.js, and modern web technologies.\n\nBest way to reach him:\n- **Email:** ${DATA.email}\n- **LinkedIn:** [linkedin.com/in/kamesh-chaudhary](${DATA.linkedin})\n- **GitHub:** [github.com/kameshchaudhary17](${DATA.github})`,
  },
  {
    patterns: ['contact', 'email', 'phone', 'reach', 'message', 'call', 'linkedin', 'github'],
    reply: () => `**Contact Kamesh**\n\n- **Email:** ${DATA.email}\n- **Phone:** ${DATA.phone}\n- **LinkedIn:** [linkedin.com/in/kamesh-chaudhary](${DATA.linkedin})\n- **GitHub:** [github.com/kameshchaudhary17](${DATA.github})\n- **Location:** ${DATA.location}`,
  },
  {
    patterns: ['location', 'where', 'based', 'country', 'city', 'nepal', 'kathmandu'],
    reply: () => `Kamesh is based in **${DATA.location}**. He is open to remote work and relocation opportunities.`,
  },
  {
    patterns: ['react', 'reactjs', 'frontend', 'ui', 'interface'],
    reply: () => `Kamesh has strong **React.js** experience — he's used it in production at **Portpro** during his internship and built his **Community Fix** civic platform with it.\n\nFrontend skills: ${DATA.skills.Frontend.join(', ')}.`,
  },
  {
    patterns: ['node', 'nodejs', 'backend', 'server', 'api', 'express'],
    reply: () => `Kamesh builds backends with **Node.js** and **Express.js**, designing RESTful APIs and integrating them with frontend applications.\n\nBackend skills: ${DATA.skills.Backend.join(', ')}.`,
  },
  {
    patterns: ['database', 'mongo', 'mongodb', 'postgres', 'postgresql', 'sql', 'data'],
    reply: () => `Kamesh is comfortable with both SQL and NoSQL databases.\n\n**Database skills:**\n${DATA.skills.Database.map(s => `- ${s}`).join('\n')}`,
  },
  {
    patterns: ['typescript', 'ts'],
    reply: () => `Yes, Kamesh works with **TypeScript** — it's part of his frontend toolkit alongside JavaScript ES6+, React.js, HTML5, and CSS3.`,
  },
  {
    patterns: ['strength', 'soft skill', 'strength', 'trait', 'quality', 'personality'],
    reply: () => `**Kamesh's Key Strengths**\n\n${DATA.strengths.map(s => `- ${s}`).join('\n')}`,
  },
  {
    patterns: ['git', 'github', 'version control', 'agile', 'scrum', 'workflow'],
    reply: () => `Kamesh practices professional development workflows:\n\n- **Git & GitHub** for version control and collaboration\n- **Agile/Scrum** methodology from his internship at Portpro\n- **Code reviews** and sprint planning experience\n- **Postman** for API testing and documentation`,
  },
  {
    patterns: ['year', 'how long', 'how many', 'years of experience', 'junior', 'senior', 'level'],
    reply: () => `Kamesh has **${DATA.stats[0].value} year** of professional experience as a Full-Stack Developer, with hands-on internship work at **Portpro** and academic project experience building ${DATA.stats[1].value} major projects across ${DATA.stats[2].value} tech stacks.`,
  },
  {
    patterns: ['summary', 'about', 'who is', 'tell me about kamesh', 'introduce', 'overview', 'background'],
    reply: () => `**About Kamesh Chaudhary**\n\n${DATA.summary}\n\n- 📍 Based in ${DATA.location}\n- 💼 ${DATA.stats[0].value} year professional experience\n- 🚀 ${DATA.stats[1].value} major projects shipped\n- 🛠 ${DATA.stats[2].value} tech stacks · ${DATA.stats[3].value} tools & frameworks\n\nCurrently **open to new opportunities** — feel free to reach out at ${DATA.email}`,
  },
  {
    patterns: ['hello', 'hi', 'hey', 'howdy', 'greet', 'good morning', 'good afternoon'],
    reply: () => `Hi there! 👋 I'm Kamesh's AI assistant — I have full knowledge of his skills, projects, and experience.\n\nYou can ask me things like:\n- *"What's his tech stack?"*\n- *"Tell me about his projects"*\n- *"Is he available for hire?"*\n\nWhat would you like to know?`,
  },
  {
    patterns: ['salary', 'rate', 'compensation', 'pay', 'cost'],
    reply: () => `Salary expectations depend on the role and company. For specifics, reach out directly:\n\n- **Email:** ${DATA.email}\n- **LinkedIn:** [linkedin.com/in/kamesh-chaudhary](${DATA.linkedin})\n\nKamesh is open to discussing compensation based on the opportunity.`,
  },
  {
    patterns: ['remote', 'hybrid', 'onsite', 'on-site', 'work from home'],
    reply: () => `Kamesh is open to **remote, hybrid, and on-site** roles. He's currently based in ${DATA.location} and is flexible about work arrangements.`,
  },
  {
    patterns: ['why hire', 'why should', 'why kamesh', 'what makes', 'stand out', 'unique'],
    reply: () => `**Why hire Kamesh?**\n\n- ✅ Full-stack skills — React frontend to Node.js/ASP.NET backend\n- ✅ Real production experience from his internship at **Portpro**\n- ✅ Teaching background — communicates technical concepts clearly\n- ✅ ${DATA.stats[1].value} shipped projects across web, ML, and .NET ecosystems\n- ✅ Quick learner — picked up new stacks on the job\n- ✅ Open to work and actively looking for his next role`,
  },
];

const FALLBACK = `I'm not sure about that specific detail. Here's what I can help with:\n\n- **Skills & tech stack**\n- **Projects** (Community Fix, Plant Disease Detection, Library System)\n- **Work experience** (Portpro, GTA role)\n- **Education & background**\n- **Contact & availability**\n\nTry asking one of those!`;

function getLocalReply(msg) {
  const lower = msg.toLowerCase();
  for (const item of LOCAL_RESPONSES) {
    if (item.patterns.some(p => lower.includes(p))) {
      return item.reply();
    }
  }
  return FALLBACK;
}

const INITIAL_MSG = {
  role: 'assistant',
  content: "Hi! 👋 I'm Kamesh's AI assistant. Ask me anything about his skills, projects, experience, or availability — I'll give you the full picture.",
};

export default function Chat() {
  const [msgs, setMsgs] = useState([INITIAL_MSG]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [apiKey, setApiKey] = useState(localStorage.getItem('kc_api_key') || '');
  const [showKeyInput, setShowKeyInput] = useState(!localStorage.getItem('kc_api_key'));
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  const scrollDown = () => setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: 'smooth' }), 50);

  const clearChat = () => {
    setMsgs([INITIAL_MSG]);
    inputRef.current?.focus();
  };

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
    scrollDown();

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
            messages: newMsgs.slice(-10).map(m => ({ role: m.role, content: m.content })),
          }),
        });
        const data = await res.json();
        if (data.error) throw new Error(data.error.message);
        const reply = data.content?.[0]?.text || 'Sorry, no response received.';
        setMsgs(prev => [...prev, { role: 'assistant', content: reply }]);
      } catch (err) {
        setMsgs(prev => [...prev, { role: 'assistant', content: `⚠️ API error: ${err.message}` }]);
      }
    } else {
      await new Promise(r => setTimeout(r, 600));
      setMsgs(prev => [...prev, { role: 'assistant', content: getLocalReply(msg) }]);
    }

    setLoading(false);
    scrollDown();
  };

  return (
    <section style={{ maxWidth: 1100, margin: '0 auto', padding: '3rem 1.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '0.5rem' }}>
        <h2 style={{ fontWeight: 800, fontSize: 'clamp(1.5rem,3vw,2.2rem)' }}>
          AI Assistant<span style={{ color: 'var(--accent-green)' }}>.</span>
        </h2>
        <Sparkles size={24} color="var(--accent-green)" />
      </div>
      <p style={{ color: 'var(--alpha-50)', fontSize: 13, marginBottom: '2rem' }}>
        Ask me anything about Kamesh — no API key needed
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 280px', gap: 24, alignItems: 'start' }} className="chat-layout">

        {/* Chat window */}
        <div style={{ background: 'var(--alpha-02)', border: '1px solid var(--alpha-10)', borderRadius: 24, overflow: 'hidden', display: 'flex', flexDirection: 'column', height: 520 }}>
          {/* Header */}
          <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid var(--alpha-05)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 32, height: 32, borderRadius: '35%', background: 'rgba(121,255,151,0.1)', border: '1px solid rgba(121,255,151,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Bot size={18} color="var(--accent-green)" />
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-main)' }}>Kamesh's Assistant</div>
                <div style={{ fontSize: 11, color: 'var(--accent-green)', display: 'flex', alignItems: 'center', gap: 4 }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent-green)', display: 'inline-block' }} />
                  Online
                </div>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={clearChat}
              title="Clear chat"
              style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: 6, borderRadius: 8, color: 'var(--alpha-40)', display: 'flex', alignItems: 'center' }}
            >
              <Trash2 size={16} />
            </motion.button>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: 16 }}>
            <AnimatePresence initial={false}>
              {msgs.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.25 }}
                  style={{ display: 'flex', justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start', gap: 10, alignItems: 'flex-end' }}
                >
                  {m.role === 'assistant' && (
                    <div style={{ width: 28, height: 28, borderRadius: '35%', background: 'rgba(121,255,151,0.1)', border: '1px solid rgba(121,255,151,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginBottom: 2 }}>
                      <Bot size={15} color="var(--accent-green)" />
                    </div>
                  )}
                  <div style={{
                    maxWidth: '85%',
                    background: m.role === 'user' ? 'var(--accent-green)' : 'var(--alpha-04)',
                    color: m.role === 'user' ? 'var(--text-inverse)' : 'var(--text-main)',
                    borderRadius: m.role === 'user' ? '20px 20px 4px 20px' : '20px 20px 20px 4px',
                    padding: '10px 16px', fontSize: 13.5, lineHeight: 1.65,
                    border: m.role === 'assistant' ? '1px solid var(--alpha-08)' : 'none',
                  }}>
                    {m.role === 'assistant' ? (
                      <ReactMarkdown
                        components={{
                          p: ({ children }) => <p style={{ margin: '0 0 8px 0' }}>{children}</p>,
                          ul: ({ children }) => <ul style={{ paddingLeft: 18, margin: '4px 0 8px' }}>{children}</ul>,
                          li: ({ children }) => <li style={{ marginBottom: 3 }}>{children}</li>,
                          strong: ({ children }) => <strong style={{ color: m.role === 'user' ? 'inherit' : 'var(--text-main)', fontWeight: 700 }}>{children}</strong>,
                          a: ({ href, children }) => <a href={href} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-green)', textDecoration: 'underline' }}>{children}</a>,
                          blockquote: ({ children }) => <blockquote style={{ borderLeft: '3px solid var(--accent-green)', paddingLeft: 10, margin: '6px 0', color: 'var(--alpha-60)', fontSize: 12 }}>{children}</blockquote>,
                        }}
                      >
                        {m.content}
                      </ReactMarkdown>
                    ) : (
                      m.content
                    )}
                  </div>
                  {m.role === 'user' && (
                    <div style={{ width: 28, height: 28, borderRadius: '35%', background: '#79ff9720', border: '1px solid #79ff9740', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginBottom: 2 }}>
                      <User size={15} color="var(--accent-green)" />
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>

            {loading && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 28, height: 28, borderRadius: '35%', background: 'rgba(121,255,151,0.1)', border: '1px solid rgba(121,255,151,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Bot size={15} color="var(--accent-green)" />
                </div>
                <div style={{ display: 'flex', gap: 5, padding: '10px 16px', background: 'var(--alpha-04)', border: '1px solid var(--alpha-08)', borderRadius: '20px 20px 20px 4px' }}>
                  {[0, 1, 2].map(d => (
                    <motion.span key={d} style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent-green)', display: 'block' }}
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: d * 0.15 }}
                    />
                  ))}
                </div>
              </motion.div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div style={{ padding: '1rem 1.2rem', background: 'var(--alpha-reverse-20)', borderTop: '1px solid var(--alpha-05)' }}>
            <div style={{ display: 'flex', gap: 10, background: 'var(--alpha-03)', border: '1px solid var(--alpha-10)', borderRadius: 16, padding: '6px 6px 6px 14px' }}>
              <input
                ref={inputRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && !e.shiftKey && sendMessage()}
                placeholder="Ask anything about Kamesh..."
                style={{ flex: 1, background: 'transparent', border: 'none', color: 'var(--text-main)', fontSize: 14, outline: 'none' }}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => sendMessage()}
                disabled={loading || !input.trim()}
                style={{
                  background: 'var(--accent-green)', color: 'var(--text-inverse)', border: 'none', borderRadius: 12,
                  width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: (loading || !input.trim()) ? 'not-allowed' : 'pointer',
                  opacity: (loading || !input.trim()) ? 0.5 : 1,
                  flexShrink: 0,
                }}
              >
                <Send size={16} />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: 20, border: '1px solid rgba(232,200,122,0.2)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--accent-yellow)', marginBottom: 12 }}>
              <Key size={18} />
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.5px' }}>CLAUDE AI KEY</span>
            </div>
            <p style={{ fontSize: 11, color: 'var(--alpha-40)', marginBottom: 10, lineHeight: 1.5 }}>
              Optional — works without a key. Add one for full Claude AI responses.
            </p>
            {showKeyInput ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <input
                  type="password"
                  value={apiKey}
                  onChange={e => setApiKey(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && saveKey()}
                  placeholder="sk-ant-..."
                  style={{ width: '100%', background: 'var(--alpha-05)', border: '1px solid var(--alpha-10)', borderRadius: 8, padding: '8px 12px', color: 'var(--text-main)', fontSize: 12, outline: 'none' }}
                />
                <button onClick={saveKey} style={{ background: 'var(--accent-yellow)', color: '#000', border: 'none', borderRadius: 8, padding: '8px', fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>
                  Save Key
                </button>
              </div>
            ) : (
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--accent-green)', fontSize: 12 }}>✓ Key configured</span>
                <button onClick={() => setShowKeyInput(true)} style={{ background: 'transparent', border: 'none', color: 'var(--accent-yellow)', fontSize: 11, cursor: 'pointer', textDecoration: 'underline' }}>Edit</button>
              </div>
            )}
          </div>

          <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--alpha-50)', marginBottom: 14 }}>
              <Info size={16} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.5px' }}>QUICK QUESTIONS</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
              {QUICK.map(q => (
                <button key={q} onClick={() => sendMessage(q)} disabled={loading} className="quick-chip" style={{
                  textAlign: 'left', background: 'var(--alpha-03)', border: '1px solid var(--alpha-05)',
                  color: 'var(--alpha-70)', fontSize: 12, padding: '9px 13px', borderRadius: 10, cursor: loading ? 'not-allowed' : 'pointer',
                  transition: 'all 0.2s', opacity: loading ? 0.5 : 1,
                }}>
                  {q}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .quick-chip:hover {
          background: rgba(121,255,151,0.08) !important;
          border-color: rgba(121,255,151,0.25) !important;
          color: var(--accent-green) !important;
        }
        @media (max-width: 850px) {
          .chat-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
