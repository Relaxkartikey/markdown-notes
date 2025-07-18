"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Edit3,
  Eye,
  Columns2,
  Save,
  Share,
  Clock,
  FileText,
  Star,
  MoreHorizontal,
} from "lucide-react";

// Dynamically import the markdown editor to avoid SSR issues
const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });
const MarkdownPreview = dynamic(() => import("@uiw/react-md-editor").then((mod) => mod.default.Markdown), { ssr: false });

const mockContent = `# React Hooks Cheatsheet

## useState Hook

The \`useState\` hook allows you to add state to functional components.

### Basic Usage

\`\`\`javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

### Key Points

- \`useState\` returns an array with two elements: current state and setter function
- The setter function can accept a new value or a function that receives the previous state
- State updates are asynchronous and may be batched

## useEffect Hook

The \`useEffect\` hook lets you perform side effects in functional components.

### Basic Usage

\`\`\`javascript
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    document.title = \`You clicked \${count} times\`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

### Cleanup

\`\`\`javascript
useEffect(() => {
  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }
  
  ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
  
  // Specify how to clean up after this effect:
  return function cleanup() {
    ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
  };
}, [props.friend.id]); // Only re-run the effect if props.friend.id changes
\`\`\`

## Learning Tasks

- [x] Understand useState basics
- [x] Learn useState with objects and arrays
- [ ] Master useEffect with dependencies
- [ ] Practice custom hooks
- [ ] Build a project using multiple hooks

## Resources

1. [React Hooks Documentation](https://reactjs.org/docs/hooks-intro.html)
2. [Hooks FAQ](https://reactjs.org/docs/hooks-faq.html)
3. [Building Your Own Hooks](https://reactjs.org/docs/hooks-custom.html)

---

*Last updated: January 15, 2025*`;

export function Dashboard() {
  const [content, setContent] = useState(mockContent);
  const [viewMode, setViewMode] = useState<"edit" | "preview" | "split">("split");
  const [isModified, setIsModified] = useState(false);

  const handleContentChange = (value: string | undefined) => {
    if (value !== undefined) {
      setContent(value);
      setIsModified(true);
    }
  };

  const handleSave = () => {
    // TODO: Implement save functionality
    console.log("Saving content...");
    setIsModified(false);
  };

  const currentFile = {
    name: "hooks.md",
    path: "React Notes/hooks.md",
    modified: new Date("2025-01-15"),
    starred: true,
  };

  return (
    <div className="h-full flex flex-col bg-background">
      {/* Editor Header */}
      <div className="border-b bg-muted/20 px-4 py-3">
        <div className="flex items-center justify-between">
          {/* File Info */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <FileText className="w-5 h-5 text-muted-foreground" />
              <div>
                <h1 className="font-semibold">{currentFile.name}</h1>
                <p className="text-sm text-muted-foreground">{currentFile.path}</p>
              </div>
              {currentFile.starred && (
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
              )}
              {isModified && (
                <div className="w-2 h-2 bg-blue-500 rounded-full" title="Unsaved changes" />
              )}
            </div>
          </div>

          {/* Editor Controls */}
          <div className="flex items-center space-x-2">
            {/* View Mode Tabs */}
            <Tabs value={viewMode} onValueChange={(value) => setViewMode(value as "edit" | "preview" | "split")}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="edit" className="flex items-center space-x-1">
                  <Edit3 className="w-3 h-3" />
                  <span className="hidden sm:inline">Edit</span>
                </TabsTrigger>
                <TabsTrigger value="split" className="flex items-center space-x-1">
                  <Columns2 className="w-3 h-3" />
                  <span className="hidden sm:inline">Split</span>
                </TabsTrigger>
                <TabsTrigger value="preview" className="flex items-center space-x-1">
                  <Eye className="w-3 h-3" />
                  <span className="hidden sm:inline">Preview</span>
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <Separator orientation="vertical" className="h-6" />

            {/* Action Buttons */}
            <Button
              variant={isModified ? "default" : "outline"}
              size="sm"
              onClick={handleSave}
              disabled={!isModified}
            >
              <Save className="w-4 h-4 mr-2" />
              Save
            </Button>

            <Button variant="outline" size="sm">
              <Share className="w-4 h-4 mr-2" />
              Share
            </Button>

            <Button variant="outline" size="icon">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* File Metadata */}
        <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Clock className="w-3 h-3" />
            <span>Modified {currentFile.modified.toLocaleDateString()}</span>
          </div>
          <div className="flex items-center space-x-1">
            <span>{content.length} characters</span>
          </div>
          <div className="flex items-center space-x-1">
            <span>{content.split('\n').length} lines</span>
          </div>
        </div>
      </div>

      {/* Editor Content */}
      <div className="flex-1 overflow-hidden">
        {viewMode === "edit" && (
          <div className="h-full">
            <MDEditor
              value={content}
              onChange={handleContentChange}
              preview="edit"
              hideToolbar
              height="100%"
              data-color-mode="light"
              className="custom-scrollbar"
            />
          </div>
        )}

        {viewMode === "preview" && (
          <ScrollArea className="h-full">
            <div className="p-6 max-w-4xl mx-auto">
              <MarkdownPreview
                source={content}
                className="wmde-markdown"
              />
            </div>
          </ScrollArea>
        )}

        {viewMode === "split" && (
          <div className="h-full grid grid-cols-2">
            <div className="border-r">
              <MDEditor
                value={content}
                onChange={handleContentChange}
                preview="edit"
                hideToolbar
                height="100%"
                data-color-mode="light"
                className="custom-scrollbar"
              />
            </div>
            <ScrollArea className="h-full">
              <div className="p-6">
                <MarkdownPreview
                  source={content}
                  className="wmde-markdown"
                />
              </div>
            </ScrollArea>
          </div>
        )}
      </div>

      {/* Status Bar */}
      <div className="border-t px-4 py-2 bg-muted/20">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-4">
            <span>Markdown</span>
            <span>•</span>
            <span>UTF-8</span>
            <span>•</span>
            <span>Line {content.split('\n').length}</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>Auto-save: On</span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Synced</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
