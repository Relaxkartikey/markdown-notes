"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Code,
  FileText,
  FolderPlus,
  Search,
  Settings,
  Menu,
  X,
  Plus,
  CheckSquare,
  Folder,
  FolderOpen,
  Star,
  Clock,
  GitBranch,
  RotateCw,
  User,
  LogOut,
  ChevronRight,
  ChevronDown,
  MoreHorizontal,
} from "lucide-react";

interface FileTreeItem {
  id: string;
  name: string;
  type: "file" | "folder";
  children?: FileTreeItem[];
  isExpanded?: boolean;
  starred?: boolean;
  modified?: Date;
}

// Mock data for demo
const mockFiles: FileTreeItem[] = [
  {
    id: "1",
    name: "React Notes",
    type: "folder",
    isExpanded: true,
    children: [
      {
        id: "2",
        name: "hooks.md",
        type: "file",
        starred: true,
        modified: new Date("2025-01-15"),
      },
      {
        id: "3",
        name: "components.md",
        type: "file",
        modified: new Date("2025-01-14"),
      },
      {
        id: "4",
        name: "Advanced",
        type: "folder",
        children: [
          {
            id: "5",
            name: "context.md",
            type: "file",
            modified: new Date("2025-01-13"),
          },
          {
            id: "6",
            name: "performance.md",
            type: "file",
            modified: new Date("2025-01-12"),
          },
        ],
      },
    ],
  },
  {
    id: "7",
    name: "JavaScript",
    type: "folder",
    children: [
      {
        id: "8",
        name: "async-await.md",
        type: "file",
        starred: true,
        modified: new Date("2025-01-11"),
      },
      {
        id: "9",
        name: "promises.md",
        type: "file",
        modified: new Date("2025-01-10"),
      },
    ],
  },
  {
    id: "10",
    name: "Tasks",
    type: "folder",
    children: [
      {
        id: "11",
        name: "learning-goals.md",
        type: "file",
        modified: new Date("2025-01-09"),
      },
      {
        id: "12",
        name: "project-ideas.md",
        type: "file",
        modified: new Date("2025-01-08"),
      },
    ],
  },
];

const mockUser = {
  name: "John Doe",
  email: "john@example.com",
  avatar: "https://github.com/johndoe.png",
  login: "johndoe",
};

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [files, setFiles] = useState<FileTreeItem[]>(mockFiles);

  const toggleFolder = (folderId: string) => {
    const updateFiles = (items: FileTreeItem[]): FileTreeItem[] => {
      return items.map((item) => {
        if (item.id === folderId && item.type === "folder") {
          return { ...item, isExpanded: !item.isExpanded };
        }
        if (item.children) {
          return { ...item, children: updateFiles(item.children) };
        }
        return item;
      });
    };
    setFiles(updateFiles(files));
  };

  const renderFileTree = (items: FileTreeItem[], depth = 0) => {
    return items.map((item) => (
      <div key={item.id}>
        <div
          className={cn(
            "flex items-center space-x-2 py-1.5 px-2 rounded-md hover:bg-accent/50 cursor-pointer group transition-colors",
            "file-tree-item"
          )}
          style={{ paddingLeft: `${depth * 12 + 8}px` }}
          onClick={() => item.type === "folder" && toggleFolder(item.id)}
        >
          {item.type === "folder" ? (
            <>
              {item.isExpanded ? (
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              ) : (
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              )}
              {item.isExpanded ? (
                <FolderOpen className="w-4 h-4 text-blue-500" />
              ) : (
                <Folder className="w-4 h-4 text-blue-500" />
              )}
            </>
          ) : (
            <>
              <div className="w-4 h-4" />
              <FileText className="w-4 h-4 text-muted-foreground" />
            </>
          )}
          
          <span className="flex-1 text-sm truncate">{item.name}</span>
          
          {item.starred && (
            <Star className="w-3 h-3 text-yellow-500 fill-current" />
          )}
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <MoreHorizontal className="w-3 h-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {item.type === "file" && (
                <>
                  <DropdownMenuItem>Open</DropdownMenuItem>
                  <DropdownMenuItem>
                    {item.starred ? "Unstar" : "Star"}
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                </>
              )}
              <DropdownMenuItem>Rename</DropdownMenuItem>
              <DropdownMenuItem>Duplicate</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        {item.type === "folder" && item.isExpanded && item.children && (
          <div>{renderFileTree(item.children, depth + 1)}</div>
        )}
      </div>
    ));
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={cn(
          "border-r bg-muted/20 transition-all duration-300 flex flex-col",
          sidebarOpen ? "w-80" : "w-0 overflow-hidden"
        )}
      >
        {/* Sidebar Header */}
        <div className="p-4 border-b">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <Code className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg">GitNote</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(false)}
              className="md:hidden"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            <Button variant="outline" size="sm" className="flex-col h-auto py-2">
              <Plus className="w-4 h-4 mb-1" />
              <span className="text-xs">Note</span>
            </Button>
            <Button variant="outline" size="sm" className="flex-col h-auto py-2">
              <CheckSquare className="w-4 h-4 mb-1" />
              <span className="text-xs">Task</span>
            </Button>
            <Button variant="outline" size="sm" className="flex-col h-auto py-2">
              <FolderPlus className="w-4 h-4 mb-1" />
              <span className="text-xs">Folder</span>
            </Button>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search files..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>

        {/* File Tree */}
        <ScrollArea className="flex-1 px-2">
          <div className="py-2">
            <div className="mb-2">
              <h3 className="px-2 text-sm font-medium text-muted-foreground mb-2">
                FILES
              </h3>
              {renderFileTree(files)}
            </div>
          </div>
        </ScrollArea>

        {/* Sidebar Footer */}
        <div className="p-4 border-t space-y-3">
          {/* Starred Files */}
          <div>
            <h4 className="text-xs font-medium text-muted-foreground mb-2 flex items-center">
              <Star className="w-3 h-3 mr-1" />
              STARRED
            </h4>
            <div className="space-y-1">
              <div className="flex items-center space-x-2 py-1 px-2 rounded hover:bg-accent/50 cursor-pointer">
                <FileText className="w-3 h-3 text-muted-foreground" />
                <span className="text-xs truncate">hooks.md</span>
              </div>
              <div className="flex items-center space-x-2 py-1 px-2 rounded hover:bg-accent/50 cursor-pointer">
                <FileText className="w-3 h-3 text-muted-foreground" />
                <span className="text-xs truncate">async-await.md</span>
              </div>
            </div>
          </div>

          {/* Recent Files */}
          <div>
            <h4 className="text-xs font-medium text-muted-foreground mb-2 flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              RECENT
            </h4>
            <div className="space-y-1">
              <div className="flex items-center space-x-2 py-1 px-2 rounded hover:bg-accent/50 cursor-pointer">
                <FileText className="w-3 h-3 text-muted-foreground" />
                <span className="text-xs truncate">components.md</span>
              </div>
              <div className="flex items-center space-x-2 py-1 px-2 rounded hover:bg-accent/50 cursor-pointer">
                <FileText className="w-3 h-3 text-muted-foreground" />
                <span className="text-xs truncate">context.md</span>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex items-center justify-between px-4 py-3">
            {/* Left Section */}
            <div className="flex items-center space-x-4">
              {!sidebarOpen && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSidebarOpen(true)}
                >
                  <Menu className="w-4 h-4" />
                </Button>
              )}
              
              {/* Breadcrumb */}
              <nav className="flex items-center space-x-2 text-sm">
                <span className="text-muted-foreground">GitNote</span>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">React Notes</span>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
                <span className="font-medium">hooks.md</span>
              </nav>
            </div>

            {/* Center Section - Global Search */}
            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search everywhere... (⌘K)"
                  className="pl-9 pr-16"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                    ⌘K
                  </kbd>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              {/* Sync Status */}
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <RotateCw className="w-4 h-4 text-green-500" />
                <span>Synced</span>
              </div>

              <Separator orientation="vertical" className="h-6" />

              <ThemeToggle />

              {/* User Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={mockUser.avatar} alt={mockUser.name} />
                      <AvatarFallback>
                        {mockUser.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end">
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1 leading-none">
                      <p className="font-medium">{mockUser.name}</p>
                      <p className="w-[200px] truncate text-sm text-muted-foreground">
                        @{mockUser.login}
                      </p>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <GitBranch className="mr-2 h-4 w-4" />
                    <span>Repository</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
