import Editor from '@monaco-editor/react'
import type { WorkspaceFile } from '../../types/workspace'

type Props = { files: WorkspaceFile[]; activeFile: WorkspaceFile; onSelect: (id: string) => void; onChange: (content: string) => void }
export function CodeEditor({ files, activeFile, onSelect, onChange }: Props) {
  return <section className="editor-pane"><div className="tabs">{files.map((file) => <button key={file.id} className={`tab ${file.id === activeFile.id ? 'selected' : ''}`} onClick={() => onSelect(file.id)}><span className="file-dot" />{file.name}<span className="close-tab">×</span></button>)}</div>
    <Editor height="100%" path={activeFile.path} language={activeFile.language} value={activeFile.content} onChange={(value) => onChange(value ?? '')} theme="topvon-dark" beforeMount={(monaco) => monaco.editor.defineTheme('topvon-dark', { base: 'vs-dark', inherit: true, rules: [], colors: { 'editor.background': '#111827', 'editorGutter.background': '#111827', 'editorLineNumber.foreground': '#596579', 'editorCursor.foreground': '#a78bfa' } })} options={{ minimap: { enabled: false }, fontSize: 13, fontFamily: 'JetBrains Mono, Cascadia Code, Consolas, monospace', padding: { top: 16 }, scrollBeyondLastLine: false, automaticLayout: true }} />
  </section>
}
