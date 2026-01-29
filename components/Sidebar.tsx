"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/", label: "Главная" },
  { href: "/forum", label: "Форум" },
  { href: "/articles", label: "Статьи" },
  { href: "/ai", label: "AI-помощник" },
  { href: "/doctors", label: "Врачи" },
  { href: "/profile", label: "Профиль" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      style={{
        width: 260,
        padding: 18,
        background: "white",
        borderRight: "1px solid rgba(255,95,162,0.18)",
      }}
    >
      <div style={{ fontWeight: 900, color: "#FF5FA2", fontSize: 20, marginBottom: 18 }}>
        Umay-Ana
      </div>

      <nav style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {items.map((it) => {
          const active = pathname === it.href;
          return (
            <Link
              key={it.href}
              href={it.href}
              style={{
                padding: "10px 12px",
                borderRadius: 12,
                background: active ? "#FFE6F0" : "transparent",
                border: "1px solid rgba(255,95,162,0.14)",
                fontWeight: 600,
              }}
            >
              {it.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
