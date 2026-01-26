import React from 'react';
import Link from 'next/link';

export default function OrderSuccessPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="max-w-md mx-auto text-center px-4 py-16">
                <div className="w-24 h-24 mx-auto mb-8 bg-green-100 rounded-full flex items-center justify-center animate-bounce">
                    <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>

                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    Захиалга амжилттай!
                </h1>

                <p className="text-gray-600 mb-2">
                    Таны захиалга амжилттай хүлээн авлаа.
                </p>
                <p className="text-gray-600 mb-8">
                    Бид таны захиалгыг боловсруулж, эхний боломжоор хүргэх болно.
                </p>

                <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
                    <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                        <div className="text-center">
                            <p className="font-medium text-gray-900">Захиалгын дугаар</p>
                            <p className="text-indigo-600 font-mono">#ND{Date.now().toString().slice(-8)}</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <Link
                        href="/products"
                        className="block w-full py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors"
                    >
                        Дэлгүүр үргэлжлүүлэх
                    </Link>
                    <Link
                        href="/"
                        className="block w-full py-4 border-2 border-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition-colors"
                    >
                        Нүүр хуудас руу буцах
                    </Link>
                </div>

                <div className="mt-12 p-4 bg-indigo-50 rounded-xl">
                    <p className="text-sm text-indigo-700">
                        💡 Захиалгын талаар асуух зүйл байвал <strong>7777-8888</strong> дугаарт холбогдоорой.
                    </p>
                </div>
            </div>
        </div>
    );
}
