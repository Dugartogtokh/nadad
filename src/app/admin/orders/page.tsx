'use client';

import React from 'react';

export default function AdminOrdersPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-800">Захиалгууд</h1>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-colors hover:shadow-lg hover:shadow-indigo-200">
                    Тайлан татах
                </button>
            </div>

            {/* Kanban / List Toggle & Filters */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="flex gap-2">
                    <button className="p-2 bg-gray-100 rounded text-gray-600 hover:bg-gray-200">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                        </svg>
                    </button>
                    <button className="p-2 text-gray-400 hover:bg-gray-100 rounded hover:text-gray-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                    </button>
                </div>
                <div className="flex gap-4">
                    <input
                        type="date"
                        className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <select className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white">
                        <option value="">Бүх төлөв</option>
                        <option value="paid">Төлөгдсөн</option>
                        <option value="pending">Хүлээгдэж буй</option>
                    </select>
                </div>
            </div>

            {/* Orders Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b border-gray-100 text-gray-500 text-sm">
                        <tr>
                            <th className="px-6 py-4 font-semibold">Захиалгын дугаар</th>
                            <th className="px-6 py-4 font-semibold">Захиалагч</th>
                            <th className="px-6 py-4 font-semibold">Огноо</th>
                            <th className="px-6 py-4 font-semibold">Төлбөр</th>
                            <th className="px-6 py-4 font-semibold">Төлөв</th>
                            <th className="px-6 py-4 font-semibold text-right">Үйлдэл</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {[
                            { id: 'ORD-2023-001', customer: 'Bat-Orgil', date: '2023-10-24', total: '150,000₮', status: 'Төлөгдсөн', color: 'bg-green-100 text-green-700' },
                            { id: 'ORD-2023-002', customer: 'Dulmaa', date: '2023-10-23', total: '89,900₮', status: 'Хүлээгдэж буй', color: 'bg-yellow-100 text-yellow-700' },
                            { id: 'ORD-2023-003', customer: 'Gantulga', date: '2023-10-23', total: '1,200,000₮', status: 'Хүргэгдсэн', color: 'bg-blue-100 text-blue-700' },
                            { id: 'ORD-2023-004', customer: 'Saran', date: '2023-10-22', total: '45,000₮', status: 'Цуцлагдсан', color: 'bg-red-100 text-red-700' },
                        ].map((order, i) => (
                            <tr key={i} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 font-medium text-indigo-600 hover:underline cursor-pointer">#{order.id}</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600">
                                            {order.customer[0]}
                                        </div>
                                        {order.customer}
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-gray-600">{order.date}</td>
                                <td className="px-6 py-4 font-medium">{order.total}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${order.color}`}>
                                        {order.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-gray-400 hover:text-indigo-600 transition-colors">
                                        Харах
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
