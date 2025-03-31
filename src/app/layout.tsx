import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from '../components/layout/Navbar';
import Sidebar from "../components/layout/Sidebar";

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
      <body className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <Navbar />
        </header>

        {/* Main Content Area */}
        <div className="flex flex-1">
          {/* Left Sidebar */}
          <div className="w-64 bg-gray-800 text-white">
            <Sidebar sections={sidebarSections} position="left" />
             {/* Main Content */}
              <main className="flex-1 p-6 bg-gray-50 min-w-0">
                <div className="max-w-6xl mx-auto">
                  {children}
                </div>
              </main>
          </div>

        </div>

        {/* Footer */}
        <footer className="bg-white p-4 text-center border-t">
          <p className="text-gray-600">© 2025 Farmers Market. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
