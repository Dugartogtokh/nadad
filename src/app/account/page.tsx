'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function AccountPage() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <main className="min-h-screen pt-24 pb-16 bg-gray-50 flex items-center justify-center px-4">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row">
                {/* Left Side - Image/Info */}
                <div className="md:w-1/2 bg-gradient-to-br from-indigo-600 to-purple-700 p-12 text-white flex flex-col justify-between relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-6">
                            {isLogin ? 'Тавтай морилно уу!' : 'Бидэнтэй нэгдээрэй!'}
                        </h2>
                        <p className="text-indigo-100 lines-relaxed">
                            {isLogin
                                ? 'Өөрийн бүртгэлээр нэвтэрч, захиалгаа хянах, хүслийн жагсаалтаа харах боломжтой.'
                                : 'Бүртгүүлснээр та онцгой хямдрал, урамшуулалд хамрагдах боломжтой.'}
                        </p>
                    </div>

                    {/* Decorative circles */}
                    <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-[-20%] left-[-10%] w-64 h-64 bg-indigo-500/30 rounded-full blur-3xl" />
                </div>

                {/* Right Side - Form */}
                <div className="md:w-1/2 p-8 md:p-12">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            {isLogin ? 'Нэвтрэх' : 'Бүртгүүлэх'}
                        </h3>
                        <p className="text-gray-500 text-sm">
                            {isLogin ? 'Имэйл хаяг болон нууц үгээ оруулна уу' : 'Шинэ хэрэглэгч болох'}
                        </p>
                    </div>

                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Имэйл хаяг</label>
                            <input
                                type="email"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                                placeholder="name@example.com"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Нууц үг</label>
                            <input
                                type="password"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                                placeholder="••••••••"
                            />
                        </div>

                        {!isLogin && (
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Нууц үг давтах</label>
                                <input
                                    type="password"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                                    placeholder="••••••••"
                                />
                            </div>
                        )}

                        {isLogin && (
                            <div className="flex justify-end">
                                <Link href="#" className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
                                    Нууц үгээ мартсан?
                                </Link>
                            </div>
                        )}

                        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl transition-colors shadow-lg shadow-indigo-200">
                            {isLogin ? 'Нэвтрэх' : 'Bүртгүүлэх'}
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-gray-600 text-sm">
                            {isLogin ? 'Бүртгэлгүй юу?' : 'Бүртгэлтэй юу?'}{' '}
                            <button
                                onClick={() => setIsLogin(!isLogin)}
                                className="text-indigo-600 hover:text-indigo-700 font-bold ml-1"
                            >
                                {isLogin ? 'Бүртгүүлэх' : 'Нэвтрэх'}
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
