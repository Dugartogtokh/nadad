'use client';

import React from 'react';

export default function AdminCustomersPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-800">Харилцагчид</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { name: 'Bat-Erdene', email: 'bat@example.com', orders: 12, spent: '4.5M₮' },
                    { name: 'Sarnai', email: 'sarnai@example.com', orders: 8, spent: '2.1M₮' },
                    { name: 'Bold', email: 'bold@example.com', orders: 5, spent: '890K₮' },
                    { name: 'Tuya', email: 'tuya@example.com', orders: 3, spent: '450K₮' },
                    { name: 'Ganzorig', email: 'ganzo@example.com', orders: 15, spent: '6.2M₮' },
                    { name: 'Munkh', email: 'munkh@example.com', orders: 2, spent: '120K₮' },
                ].map((user, i) => (
                    <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-xl">
                                    {user.name[0]}
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">{user.name}</h3>
                                    <p className="text-sm text-gray-500">{user.email}</p>
                                </div>
                            </div>
                            <button className="text-gray-400 hover:text-gray-600">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                </svg>
                            </button>
                        </div>
                        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-wide">Нийт захиалга</p>
                                <p className="font-semibold text-gray-900">{user.orders}</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-wide">Нийт дүн</p>
                                <p className="font-semibold text-gray-900">{user.spent}</p>
                            </div>
                        </div>
                        <div className="mt-4 flex gap-2">
                            <button className="flex-1 py-2 text-sm text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-lg font-medium transition-colors">
                                Мессеж
                            </button>
                            <button className="flex-1 py-2 text-sm text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-lg font-medium transition-colors">
                                Дэлгэрэнгүй
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
