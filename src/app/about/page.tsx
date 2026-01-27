'use client';

import React from 'react';
import Image from 'next/image';

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-24 pb-16">
            {/* Hero Section */}
            <section className="relative h-[400px] mb-16 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200"
                        alt="About Us Hero"
                        fill
                        className="object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-purple-900/90" />
                </div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Бидний тухай
                    </h1>
                    <p className="text-xl text-gray-200 leading-relaxed">
                        Бид хэрэглэгчдэдээ хамгийн чанартай бараа бүтээгдэхүүнийг хамгийн хурдан шуурхай, найдвартай хүргэхийг зорьдог.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4">
                {/* Mission & Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                        <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-3xl">
                            🎯
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Бидний зорилго</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Монголын цахим худалдааны зах зээлд шинэ жишиг тогтоож, хэрэглэгч бүрт хүртээмжтэй, хялбар, аюулгүй худалдааны орчныг бүрдүүлэх нь бидний эрхэм зорилго юм.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                        <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 text-3xl">
                            🔭
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Алсын хараа</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Дэлхийн жишигт нийцсэн технологийн шийдлүүдийг нэвтрүүлж, үндэсний тэргүүлэгч цахим худалдааны платформ болох.
                        </p>
                    </div>
                </div>

                {/* Why Choose Us */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Яагаад биднийг сонгох вэ?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: '⚡',
                                title: 'Хурдан хүргэлт',
                                desc: 'Захиалга баталгаажсанаас хойш 24 цагийн дотор таны гарт.'
                            },
                            {
                                icon: '🛡️',
                                title: 'Найдвартай байдал',
                                desc: 'Бүх бараа бүтээгдэхүүн албан ёсны эрхтэй, баталгаат хугацаатай.'
                            },
                            {
                                icon: '🤝',
                                title: 'Харилцагчийн үйлчилгээ',
                                desc: 'Мэргэжлийн баг хамт олон танд 24/7 туслахад бэлэн.'
                            }
                        ].map((item, index) => (
                            <div key={index} className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300">
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats */}
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-white text-center">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <div className="text-4xl font-bold mb-2">10k+</div>
                            <div className="text-indigo-100">Хэрэглэгч</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">5000+</div>
                            <div className="text-indigo-100">Бүтээгдэхүүн</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">99%</div>
                            <div className="text-indigo-100">Сэтгэл ханамж</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">24/7</div>
                            <div className="text-indigo-100">Дэмжлэг</div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
