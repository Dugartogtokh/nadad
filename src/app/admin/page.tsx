'use client';

import React from 'react';

export default function AdminDashboard() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-800">Хянах самбар</h1>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: 'Нийт борлуулалт', value: '45,231,000₮', change: '+12.5%', type: 'up', color: 'bg-green-100 text-green-600' },
                    { label: 'Нийт захиалга', value: '1,234', change: '+8.2%', type: 'up', color: 'bg-blue-100 text-blue-600' },
                    { label: 'Шинэ хэрэглэгч', value: '342', change: '+2.4%', type: 'up', color: 'bg-purple-100 text-purple-600' },
                    { label: 'Буцаалт', value: '12', change: '-1.4%', type: 'down', color: 'bg-red-100 text-red-600' },
                ].map((stat, i) => (
                    <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                                <h3 className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</h3>
                            </div>
                            <div className={`p-2 rounded-lg ${stat.color}`}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            </div>
                        </div>
                        <div className={`text-sm font-medium flex items-center gap-1 ${stat.type === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                            {stat.type === 'up' ? '↑' : '↓'} {stat.change}
                            <span className="text-gray-400 font-normal">өнгөрсөн сараас</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Orders */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-bold text-gray-800">Сүүлийн захиалгууд</h2>
                        <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">Бүгдийг харах</button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm text-gray-600">
                            <thead className="bg-gray-50 border-b border-gray-100">
                                <tr>
                                    <th className="px-4 py-3 font-semibold">№</th>
                                    <th className="px-4 py-3 font-semibold">Захиалагч</th>
                                    <th className="px-4 py-3 font-semibold">Дүн</th>
                                    <th className="px-4 py-3 font-semibold">Төлөв</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {[
                                    { id: '#ORD-001', user: 'Bat-Erdene', amount: '150,000₮', status: 'Хүргэгдсэн', statusColor: 'bg-green-100 text-green-700' },
                                    { id: '#ORD-002', user: 'Saraa', amount: '85,000₮', status: 'Хүлээгдэж буй', statusColor: 'bg-yellow-100 text-yellow-700' },
                                    { id: '#ORD-003', user: 'Tuya', amount: '230,000₮', status: 'Явагдаж буй', statusColor: 'bg-blue-100 text-blue-700' },
                                    { id: '#ORD-004', user: 'Bold', amount: '45,000₮', status: 'Цуцлагдсан', statusColor: 'bg-red-100 text-red-700' },
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-gray-50">
                                        <td className="px-4 py-3 font-medium text-gray-900">{row.id}</td>
                                        <td className="px-4 py-3">{row.user}</td>
                                        <td className="px-4 py-3">{row.amount}</td>
                                        <td className="px-4 py-3">
                                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${row.statusColor}`}>
                                                {row.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Popular Products */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-bold text-gray-800">Эрэлттэй бүтээгдэхүүн</h2>
                        <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">Тайлан харах</button>
                    </div>
                    <div className="space-y-4">
                        {[
                            { name: 'iPhone 15 Pro Max', sales: '1,234', revenue: '4.5B', progress: 'w-[90%]' },
                            { name: 'MacBook Air M2', sales: '856', revenue: '3.2B', progress: 'w-[75%]' },
                            { name: 'Sony WH-1000XM5', sales: '645', revenue: '580M', progress: 'w-[60%]' },
                            { name: 'AirPods Pro 2', sales: '450', revenue: '320M', progress: 'w-[45%]' },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <div className="flex-1">
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm font-medium text-gray-700">{item.name}</span>
                                        <span className="text-sm text-gray-500">{item.sales} ширхэг</span>
                                    </div>
                                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                        <div className={`h-full bg-indigo-500 rounded-full ${item.progress}`}></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
