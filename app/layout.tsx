import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IPC Portal | E-Cell MIT Manipal",
  description: "Innovation Policy Consortium Submission Portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-neutral-950 text-white`}>
        <div className="flex min-h-screen">
          
          {/* SIDEBAR - Fixed on the left */}
          <aside className="w-64 border-r border-neutral-800 bg-neutral-950 hidden md:flex flex-col p-6 fixed h-full">
            <div className="mb-10">
              <h1 className="text-2xl font-bold text-blue-500 tracking-tighter">IPC PORTAL</h1>
              <p className="text-xs text-neutral-500">E-Cell MIT Manipal</p>
            </div>
            
            <nav className="space-y-2 flex-1">
              <Link href="/" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition">
                <span>📊</span> Dashboard
              </Link>
              <Link href="/submissions" className="flex items-center gap-3 px-4 py-3 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900 transition">
                <span>📂</span> Submissions
              </Link>
              <Link href="/guidelines" className="flex items-center gap-3 px-4 py-3 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900 transition">
                <span>📄</span> Guidelines
              </Link>
            </nav>

            <div className="pt-6 border-t border-neutral-800">
              <button className="flex items-center gap-3 text-red-400 hover:text-red-300 transition text-sm font-medium">
                <span>🚪</span> Log Out
              </button>
            </div>
          </aside>

          {/* MAIN CONTENT AREA - Pushed right to avoid sidebar */}
          <main className="flex-1 md:ml-64 p-8">
            {children}
          </main>
          
        </div>
      </body>
    </html>
  );
}