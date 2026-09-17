import { useState } from 'react'

export function TerminalPanel() {
  const [lines, setLines] = useState(['$ npm run dev', '> topvon-desktop@0.1.0 dev', '  VITE v6 ready in 386 ms', '  ➜  Local:   http://127.0.0.1:1420/'])
  const [input, setInput] = useState('')
  function runCommand(event: React.FormEvent) { event.preventDefault(); if (!input.trim()) return; setLines((old) => [...old, `$ ${input}`, 'Terminal execution will use a secure native command bridge.']); setInput('') }
  return <section className="terminal-panel"><header className="panel-header"><div className="panel-tabs"><button className="selected">TERMINAL</button><button>OUTPUT</button><button>PROBLEMS</button></div><button className="plain-button" onClick={() => setLines([])}>Clear</button></header><div className="terminal-output">{lines.map((line, i) => <div key={`${line}-${i}`}>{line}</div>)}<form onSubmit={runCommand} className="terminal-input"><span>❯</span><input value={input} onChange={(event) => setInput(event.target.value)} aria-label="Terminal command" spellCheck="false" /></form></div></section>
}
