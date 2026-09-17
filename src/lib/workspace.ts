import type { FileNode, WorkspaceFile } from '../types/workspace'

export const starterFiles: WorkspaceFile[] = [
  {
    id: 'app', name: 'App.tsx', path: 'src/App.tsx', language: 'typescript',
    content: `export function App() {\n  return (\n    <main>\n      <h1>Welcome to Topvon AI</h1>\n    </main>\n  )\n}\n`,
  },
  {
    id: 'api', name: 'topvon.ts', path: 'src/services/topvon.ts', language: 'typescript',
    content: `// Backend integration is configured after its API contract is provided.\nexport const topvonClient = {\n  status: 'not-configured' as const,\n}\n`,
  },
  { id: 'readme', name: 'README.md', path: 'README.md', language: 'markdown', content: '# Topvon workspace\n\nYour AI-native development workspace.\n' },
]

export const starterTree: FileNode[] = [
  { id: 'src', name: 'src', kind: 'folder', children: [
    { id: 'app', name: 'App.tsx', kind: 'file' },
    { id: 'services', name: 'services', kind: 'folder', children: [{ id: 'api', name: 'topvon.ts', kind: 'file' }] },
  ] },
  { id: 'readme', name: 'README.md', kind: 'file' },
]
