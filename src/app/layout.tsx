import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from '../components/layout/Navbar';
import Sidebar from "../components/layout/Sidebar";
// import Login from "./login/page";

export const metadata: Metadata = {
  title: "Farmers Market",
  description: "A marketplace for fresh farm produce",
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sidebarSections = [
    {
      title: "Market Menu",
      items: [
        { icon: "🏠", label: "Home Feed", active: true, href: "/feed" },
        { icon: "🛒", label: "Locations", href: "/search" },
      ]
    },
    {
      title: "Account",
      items: [
        { icon: "👤", label: "Profile", href: "/profile" },
        { icon: "⚙️", label: "Settings", href: "/settings" },
        { icon: "🚪", label: "Logout", href: "/login" }
      ]
    }
  ];

  return (
    <html lang="en">
      <body>
        {/* Header */}
        <header>
          <Navbar />
        </header>

        {/* Main Content Area with Sidebar */}
        <div style={{ display: 'flex', minHeight: 'calc(100vh - 128px)' }}>
          {/* Left Sidebar */}
          <aside style={{ width: '250px', flexShrink: 0, borderRight: '1px solid #e2e8f0' }}>
            <Sidebar sections={sidebarSections} position="left" />
          </aside>
          
          {/* Main Content */}
          <main style={{ flex: 1, padding: '24px', backgroundColor: '#f7fafc' }}>
            {children}
          </main>
        </div>

        {/* Footer */}
        <footer style={{ padding: '16px', textAlign: 'center', borderTop: '1px solid #e2e8f0' }}>
          <p style={{ color: '#718096' }}>© 2025 Farmers Market. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}