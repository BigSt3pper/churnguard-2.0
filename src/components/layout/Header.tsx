import { Search, User } from "lucide-react";
import React from "react";
import { Input } from "@/components/ui/input";

export default function Header() {
  return (
    <header
      className="sticky top-0 z-40 w-full flex items-center justify-between px-8 py-4 backdrop-blur glass shadow-sm border-b"
      style={{
        background: 'rgba(var(--background), 0.8)',
        borderColor: 'rgba(var(--border), 0.6)'
      }}
    >
      <div className="flex items-center gap-2">
        <span
          className="font-display text-2xl font-normal tracking-tight text-transparent bg-clip-text select-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, var(--accent), var(--accent-secondary))',
          }}
        >
          ChurnGuard
        </span>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="relative w-full max-w-md">
          <Input
            type="text"
            placeholder="Search (Cmd+K)"
            className="pl-10 border-none focus:ring-accent"
            style={{ background: 'var(--muted)' }}
            aria-label="Search"
          />
          <Search className="absolute left-3 top-3 w-4 h-4" style={{ color: 'var(--muted-foreground)' }} />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button
          className="rounded-full p-2 hover:bg-opacity-10 transition"
          style={{ background: 'var(--muted)', color: 'var(--accent)' }}
          aria-label="User menu"
        >
          <User className="w-6 h-6" style={{ color: 'var(--foreground)' }} />
        </button>
      </div>
    </header>
  );
}
