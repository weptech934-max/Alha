import { useState } from 'react'

const messages = [{ role: 'assistant', content: 'I’m ready to help you build. Ask about this workspace, plan a change, or select code for context.' }]
export function ChatPanel() {
  const [input, setInput] = useState('')
  const [conversation, setConversation] = useState(messages)
  function send(event: React.FormEvent) { event.preventDefault(); const content = input.trim(); if (!content) return; setConversation((old) => [...old, { role: 'user', content }, { role: 'assistant', content: 'Chat streaming will connect securely once the Topvon API contract is configured.' }]); setInput('') }
  return <aside className="chat-panel"><header className="chat-header"><div><span className="eyebrow">TOPVON AI</span><h2>New conversation</h2></div><button className="square-button" aria-label="Start a new conversation">＋</button></header><div className="model-row"><button className="model-select">Topvon Pro <span>⌄</span></button><button className="reasoning-button">Thinking <span>On</span></button></div><div className="messages">{conversation.map((message, index) => <article className={`message ${message.role}`} key={index}><div className="avatar">{message.role === 'assistant' ? 'T' : 'You'}</div><p>{message.content}</p></article>)}</div><form className="chat-composer" onSubmit={send}><textarea value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask Topvon anything…" rows={3} /><div><span className="context-label">⌘ ↵ to send</span><button type="submit" aria-label="Send message">↑</button></div></form></aside>
}
