import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  // Navigation items
  const navigationItems = [
    {
      name: 'Dashboard',
      href: '/dashboard',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z" />
        </svg>
      ),
    },
        {
      name: 'Contacts',
      href: '/contacts',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      name: 'Affiliates',
      href: '/affiliates',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    }


  ];

  const isActiveRoute = (href) => {
    return location.pathname === href;
  };

  return (
    <div className={`bg-white shadow-sm border-r border-gray-200 transition-all duration-300 ${
      isCollapsed ? 'w-16' : 'w-64'
    }`}>
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        {!isCollapsed && (
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">K</span>
            </div>
            <span className="ml-2 text-lg font-semibold text-gray-900">Keap CRM</span>
          </div>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-md hover:bg-gray-100 transition-colors"
        >
          <svg 
            className={`w-4 h-4 text-gray-500 transition-transform ${
              isCollapsed ? 'rotate-180' : ''
            }`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      {/* Navigation */}
      <nav className="mt-4 px-2">
        {navigationItems.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={`flex items-center px-3 py-2 mt-1 text-sm rounded-md transition-colors ${
              isActiveRoute(item.href)
                ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
            title={isCollapsed ? item.name : ''}
          >
            <span className={`${isActiveRoute(item.href) ? 'text-blue-700' : 'text-gray-400'}`}>
              {item.icon}
            </span>
            {!isCollapsed && (
              <span className="ml-3 font-medium">{item.name}</span>
            )}
          </Link>
        ))}
      </nav>

      {/* Bottom Section */}

    </div>
  );
}