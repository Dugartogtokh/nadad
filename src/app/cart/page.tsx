'use client';

import React from 'react';
import Link from 'next/link';
import CartItem from '@/components/CartItem';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
    const { items, getCartTotal, clearCart } = useCart();

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('mn-MN').format(price) + '₮';
    };

    const subtotal = getCartTotal();
    const shipping = subtotal >= 100000 ? 0 : 5000;
    const total = subtotal + shipping;

    if (items.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50">
                <div className="container mx-auto px-4 py-16">
                    <div className="max-w-md mx-auto text-center">
                        <div className="w-32 h-32 mx-auto mb-8 bg-gray-100 rounded-full flex items-center justify-center">
                            <svg className="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900 mb-4">Таны сагс хоосон байна</h1>
                        <p className="text-gray-500 mb-8">Бүтээгдэхүүн нэмж сагсаа дүүргээрэй!</p>
                        <Link
                            href="/products"
                            className="inline-block px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors"
                        >
                            Дэлгүүр үзэх
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-12">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl md:text-4xl font-bold text-white">Миний сагс</h1>
                    <p className="text-white/80 mt-2">{items.length} бүтээгдэхүүн</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-4">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold text-gray-900">Сагсан дахь бүтээгдэхүүн</h2>
                            <button
                                onClick={clearCart}
                                className="text-red-600 hover:text-red-700 font-medium text-sm"
                            >
                                Бүгдийг устгах
                            </button>
                        </div>

                        {items.map((item) => (
                            <CartItem key={item.product.id} item={item} />
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-24">
                            <h2 className="text-xl font-bold text-gray-900 mb-6">Захиалгын дүн</h2>

                            <div className="space-y-4">
                                <div className="flex justify-between text-gray-600">
                                    <span>Барааны дүн</span>
                                    <span>{formatPrice(subtotal)}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Хүргэлт</span>
                                    <span className={shipping === 0 ? 'text-green-600 font-medium' : ''}>
                                        {shipping === 0 ? 'Үнэгүй' : formatPrice(shipping)}
                                    </span>
                                </div>
                                {shipping > 0 && (
                                    <p className="text-sm text-gray-500">
                                        💡 {formatPrice(100000 - subtotal)}-ийн бүтээгдэхүүн нэмбэл хүргэлт үнэгүй
                                    </p>
                                )}
                                <div className="border-t pt-4">
                                    <div className="flex justify-between text-lg font-bold text-gray-900">
                                        <span>Нийт дүн</span>
                                        <span>{formatPrice(total)}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Promo Code */}
                            <div className="mt-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Промо код
                                </label>
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        placeholder="Код оруулах"
                                        className="flex-1 px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                    <button className="px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-colors">
                                        Хэрэглэх
                                    </button>
                                </div>
                            </div>

                            {/* Checkout Button */}
                            <Link
                                href="/checkout"
                                className="mt-6 w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
                            >
                                Захиалга үргэлжлүүлэх
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>

                            {/* Trust Badges */}
                            <div className="mt-6 pt-6 border-t">
                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                    <span className="flex items-center gap-1">
                                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                        Аюулгүй төлбөр
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Чанарын баталгаа
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Continue Shopping */}
                <div className="mt-8 text-center">
                    <Link href="/products" className="text-indigo-600 hover:text-indigo-700 font-medium inline-flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                        </svg>
                        Дэлгүүр үргэлжлүүлэх
                    </Link>
                </div>
            </div>
        </div>
    );
}
