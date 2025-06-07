import React from 'react';

interface SidebarProps {
  active: 'classes' | 'reports';
}

const Sidebar: React.FC<SidebarProps> = ({ active }) => {
  return (
    <aside className="w-64 bg-gray-800 text-white min-h-screen p-4">
      <h2 className="text-xl font-bold mb-6">Menu</h2>
      <nav className="space-y-2">
        <button className={`block w-full text-left px-2 py-1 rounded ${active === 'classes' ? 'bg-gray-700' : ''}`}>My Classes</button>
        <button className={`block w-full text-left px-2 py-1 rounded ${active === 'reports' ? 'bg-gray-700' : ''}`}>Reports</button>
      </nav>
    </aside>
  );
};

export default Sidebar;
