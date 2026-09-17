import { useMemo, useState } from 'react'
import { ChatPanel } from './features/chat/ChatPanel'
import { CodeEditor } from './features/editor/CodeEditor'
import { FileExplorer } from './features/explorer/FileExplorer'
import { TerminalPanel } from './features/terminal/TerminalPanel'
import { starterFiles, starterTree } from './lib/workspace'

const navItems = [['⌘', 'Workspace'], ['◈', 'Search'], ['⑂', 'Source Control'], ['▹', 'Run'], ['◌', 'Extensions']]
export default function App() {
  const [files, setFiles] = useState(starterFiles)
  const [activeId, setActiveId] = useState('app')
  const activeFile = useMemo(() => files.find((file) => file.id === activeId) ?? files[0], [files, activeId])
  function updateFile(content: string) { setFiles((current) => current.map((file) => file.id === activeFile.id ? { ...file, content } : file)) }
  return <main className="app-shell"><aside className="activity-bar"><div className="brand">T</div>{navItems.map(([icon, label], index) => <button className={`activity-item ${index === 0 ? 'active' : ''}`} key={label} aria-label={label} title={label}>{icon}</button>)}<div className="activity-spacer" /><button className="activity-item" aria-label="Settings">⚙</button><button className="profile" aria-label="Profile">JD</button></aside><aside className="sidebar"><div className="project-head"><div><span className="eyebrow">PROJECT</span><strong>topvon-workspace</strong></div><button aria-label="Project menu">•••</button></div><FileExplorer nodes={starterTree} activeId={activeId} onOpen={setActiveId} /><div className="sidebar-footer"><span className="status-dot" />Connected workspace</div></aside><div className="workbench"><header className="title-bar"><div className="breadcrumbs">topvon-workspace <span>/</span> {activeFile.path}</div><div className="title-actions"><button>◧</button><button>⤢</button><button>•••</button></div></header><CodeEditor files={files} activeFile={activeFile} onSelect={setActiveId} onChange={updateFile} /><TerminalPanel /></div><ChatPanel /></main>
}
