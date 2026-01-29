import "./globals.css";
import type { Metadata } from "next";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Umay-Ana",
  description: "Платформа поддержки беременности (MVP)",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <div className="appShell">
          <Sidebar />
          <main className="appMain">{children}</main>
        </div>
      </body>
    </html>
  );
}
