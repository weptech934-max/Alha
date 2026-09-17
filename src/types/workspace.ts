export type WorkspaceFile = {
  id: string
  name: string
  path: string
  language: string
  content: string
}

export type FileNode = {
  id: string
  name: string
  kind: 'file' | 'folder'
  children?: FileNode[]
}
