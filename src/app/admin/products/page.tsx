'use client';

import React from 'react';

export default function AdminProductsPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-800">Бүтээгдэхүүн</h1>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Шинээр нэмэх
                </button>
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <input
                    type="text"
                    placeholder="Хайх..."
                    className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <select className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white">
                    <option value="">Бүх ангилал</option>
                    <option value="electronics">Цахилгаан бараа</option>
                    <option value="fashion">Хувцас</option>
                </select>
                <select className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white">
                    <option value="">Төлөв</option>
                    <option value="active">Идэвхтэй</option>
                    <option value="draft">Ноорог</option>
                </select>
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 border-b border-gray-100 text-gray-500 text-sm">
                            <tr>
                                <th className="px-6 py-4 font-semibold"><input type="checkbox" className="rounded" /></th>
                                <th className="px-6 py-4 font-semibold">Бүтээгдэхүүн</th>
                                <th className="px-6 py-4 font-semibold">Ангилал</th>
                                <th className="px-6 py-4 font-semibold">Үнэ</th>
                                <th className="px-6 py-4 font-semibold">Үлдэгдэл</th>
                                <th className="px-6 py-4 font-semibold">Төлөв</th>
                                <th className="px-6 py-4 font-semibold text-right">Үйлдэл</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <tr key={i} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4"><input type="checkbox" className="rounded" /></td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-gray-100 flex-shrink-0"></div>
                                            <div>
                                                <p className="font-medium text-gray-900">iPhone 15 Pro Max</p>
                                                <p className="text-xs text-gray-500">ID: #PROD-00{i}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-gray-600">Цахилгаан бараа</td>
                                    <td className="px-6 py-4 font-medium text-gray-900">4,599,000₮</td>
                                    <td className="px-6 py-4 text-gray-600">
                                        <span className={`inline-block w-2 h-2 rounded-full mr-2 ${i % 2 === 0 ? 'bg-green-500' : 'bg-orange-500'}`}></span>
                                        {i * 15} ш
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${i % 2 === 0 ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                                            }`}>
                                            {i % 2 === 0 ? 'Идэвхтэй' : 'Ноорог'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-gray-400 hover:text-indigo-600 transition-colors">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* Pagination */}
                <div className="border-t border-gray-100 px-6 py-4 flex items-center justify-between">
                    <p className="text-sm text-gray-500">
                        Нийт <span className="font-medium">128</span> үр дүнгийн <span className="font-medium">1-10</span> харуулж байна
                    </p>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50 disabled:opacity-50" disabled>Өмнөх</button>
                        <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50">Дараах</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
