'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    const menuItems = [
        { name: 'Хянах самбар', path: '/admin', icon: '📊' },
        { name: 'Бүтээгдэхүүн', path: '/admin/products', icon: '📦' },
        { name: 'Захиалга', path: '/admin/orders', icon: '🛍️' },
        { name: 'Харилцагчид', path: '/admin/customers', icon: '👥' },
        { name: 'Тохиргоо', path: '/admin/settings', icon: '⚙️' },
    ];

    return (
        <div className="min-h-screen bg-gray-100 flex">
            {/* Sidebar */}
            <aside
                className={`bg-[#2f3640] text-gray-300 transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-20'
                    } flex flex-col fixed h-full z-30`}
            >
                {/* Logo */}
                <div className="h-16 flex items-center justify-center border-b border-gray-700">
                    <span className="text-2xl font-bold text-white">
                        {isSidebarOpen ? 'Admin' : 'A'}
                    </span>
                </div>

                {/* Navigation */}
                <nav className="flex-1 py-6">
                    <ul className="space-y-1 px-3">
                        {menuItems.map((item) => {
                            const isActive = pathname === item.path;
                            return (
                                <li key={item.path}>
                                    <Link
                                        href={item.path}
                                        className={`flex items-center gap-4 px-3 py-2.5 rounded-lg transition-colors ${isActive
                                                ? 'bg-gray-700 text-white'
                                                : 'hover:bg-gray-800 hover:text-white'
                                            }`}
                                    >
                                        <span className="text-xl">{item.icon}</span>
                                        {isSidebarOpen && (
                                            <span className="font-medium whitespace-nowrap">{item.name}</span>
                                        )}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* User Info */}
                <div className="p-4 border-t border-gray-700">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold">
                            U
                        </div>
                        {isSidebarOpen && (
                            <div className="overflow-hidden">
                                <p className="text-sm font-medium text-white truncate">User Admin</p>
                                <p className="text-xs text-gray-500 truncate">admin@example.com</p>
                            </div>
                        )}
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
                {/* Top Header */}
                <header className="h-16 bg-white shadow-sm flex items-center justify-between px-6 sticky top-0 z-20">
                    <button
                        onClick={() => setSidebarOpen(!isSidebarOpen)}
                        className="p-2 hover:bg-gray-100 rounded-lg text-gray-600"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                    <div className="flex items-center gap-4">
                        <button className="p-2 hover:bg-gray-100 rounded-lg relative text-gray-600">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
                        </button>
                    </div>
                </header>

                {/* Page Content */}
                <main className="p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}
