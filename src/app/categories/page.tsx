'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const categories = [
    {
        id: 'electronics',
        name: 'Цахилгаан бараа',
        image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=500',
        itemCount: 156,
        color: 'bg-blue-50'
    },
    {
        id: 'fashion',
        name: 'Хувцас загвар',
        image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=500',
        itemCount: 243,
        color: 'bg-pink-50'
    },
    {
        id: 'home',
        name: 'Гэр ахуй',
        image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&q=80&w=500',
        itemCount: 182,
        color: 'bg-green-50'
    },
    {
        id: 'beauty',
        name: 'Гоо сайхан',
        image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=500',
        itemCount: 97,
        color: 'bg-purple-50'
    },
    {
        id: 'sports',
        name: 'Спорт, аялал',
        image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=500',
        itemCount: 124,
        color: 'bg-orange-50'
    },
    {
        id: 'kids',
        name: 'Хүүхдийн',
        image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=500',
        itemCount: 89,
        color: 'bg-yellow-50'
    }
];

export default function CategoriesPage() {
    return (
        <main className="min-h-screen pt-24 pb-16">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Бүх ангилал</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Манай бүх бараа бүтээгдэхүүний ангиллуудтай танилцана уу.
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((category) => (
                        <Link
                            key={category.id}
                            href={`/products?category=${category.id}`}
                            className="group relative overflow-hidden rounded-3xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                        >
                            <div className={`absolute inset-0 ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                            <div className="relative aspect-[4/3]">
                                <Image
                                    src={category.image}
                                    alt={category.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                                <div className="absolute bottom-0 left-0 p-8 w-full">
                                    <div className="transform transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
                                        <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                            <span className="text-white/90 text-sm">{category.itemCount} бүтээгдэхүүн</span>
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
