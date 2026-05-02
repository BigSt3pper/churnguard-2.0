import { Home, Users, Activity, Settings } from "lucide-react";
import React from "react";
import { Card } from "@/components/ui/card";

const navItems = [
  { label: "Dashboard", icon: Home, href: "/" },
  { label: "Customers", icon: Users, href: "/customers" },
  { label: "Activity", icon: Activity, href: "/activity" },
  { label: "Settings", icon: Settings, href: "/settings" },
];

export default function Sidebar() {
  return (
    <aside
      className="hidden md:flex flex-col w-24 text-white border-r min-h-screen py-6 px-2 items-center"
      style={{ backgroundColor: 'var(--foreground)', borderColor: 'var(--border)', borderRightWidth: '1px', borderRightStyle: 'solid', borderRightColor: 'rgba(var(--border), 0.6)' }}
    >
      <Card className="flex flex-col gap-4 w-full bg-transparent border-none shadow-none">
        {navItems.map(({ label, icon: Icon, href }) => (
          <a
            key={label}
            href={href}
            className="group flex flex-col items-center gap-1 py-3 rounded-xl transition"
            style={{
              background: undefined,
            }}
            aria-label={label}
          >
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-br from-(--accent) to-(--accent-secondary)/80 group-hover:scale-110 transition-transform">
              <Icon className="w-6 h-6 stroke-2 text-white" />
            </span>
            <span className="text-[10px] font-mono uppercase tracking-[0.15em] opacity-70 group-hover:opacity-100 transition-all duration-200">
              {label}
            </span>
          </a>
        ))}
      </Card>
    </aside>
  );
}
