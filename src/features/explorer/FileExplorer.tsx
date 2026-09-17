import { useState } from 'react'
import type { FileNode } from '../../types/workspace'

type Props = { nodes: FileNode[]; activeId: string; onOpen: (id: string) => void }
export function FileExplorer({ nodes, activeId, onOpen }: Props) {
  return <div className="explorer"><div className="section-label">EXPLORER</div><div className="workspace-title"><span>⌄</span> TOPVON WORKSPACE</div><Tree nodes={nodes} activeId={activeId} onOpen={onOpen} /></div>
}
function Tree({ nodes, activeId, onOpen }: Props) {
  const [closed, setClosed] = useState<Set<string>>(new Set())
  return <ul className="file-tree">{nodes.map((node) => {
    const isFolder = node.kind === 'folder'; const isClosed = closed.has(node.id)
    return <li key={node.id}><button onClick={() => isFolder ? setClosed((old) => { const next = new Set(old); next.has(node.id) ? next.delete(node.id) : next.add(node.id); return next }) : onOpen(node.id)} className={`tree-item ${activeId === node.id ? 'active' : ''}`}>
      <span className="tree-icon">{isFolder ? (isClosed ? '›' : '⌄') : '·'}</span><span>{node.name}</span>
    </button>{isFolder && !isClosed && node.children && <Tree nodes={node.children} activeId={activeId} onOpen={onOpen} />}</li>
  })}</ul>
}
