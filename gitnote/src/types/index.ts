export interface User {
  id: string
  login: string
  name: string
  email: string
  avatar_url: string
}

export interface Repository {
  id: number
  name: string
  full_name: string
  private: boolean
  clone_url: string
  default_branch: string
}

export interface FileItem {
  id: string
  name: string
  path: string
  type: 'file' | 'folder'
  content?: string
  size?: number
  modified: Date
  created: Date
  children?: FileItem[]
  isExpanded?: boolean
  starred?: boolean
}

export interface Task {
  id: string
  text: string
  completed: boolean
  createdAt: Date
  completedAt?: Date
  dueDate?: Date
  priority?: 'low' | 'medium' | 'high'
  tags?: string[]
  filePath: string
  lineNumber: number
}

export interface GitHubFile {
  name: string
  path: string
  sha: string
  size: number
  url: string
  html_url: string
  git_url: string
  download_url: string
  type: 'file' | 'dir'
}

export interface SyncStatus {
  status: 'synced' | 'syncing' | 'error' | 'offline'
  lastSync?: Date
  pendingChanges: number
  message?: string
}

export interface AppSettings {
  theme: 'light' | 'dark' | 'system'
  autoSave: boolean
  autoSync: boolean
  syncInterval: number
  editorFontSize: number
  editorTabSize: number
  showLineNumbers: boolean
  wordWrap: boolean
  defaultFileLocation: string
  conflictResolution: 'manual' | 'local' | 'remote'
}

export interface SearchResult {
  id: string
  fileName: string
  filePath: string
  content: string
  lineNumber: number
  context: string
  matchType: 'filename' | 'content'
}

export interface Breadcrumb {
  name: string
  path: string
  isActive: boolean
}

export type ViewMode = 'editor' | 'preview' | 'split'

export interface EditorState {
  currentFile: FileItem | null
  viewMode: ViewMode
  sidebarCollapsed: boolean
  searchQuery: string
  searchResults: SearchResult[]
}

export interface AppContext {
  user: User | null
  repository: Repository | null
  files: FileItem[]
  tasks: Task[]
  syncStatus: SyncStatus
  settings: AppSettings
  editorState: EditorState
}
