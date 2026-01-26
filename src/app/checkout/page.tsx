'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
    const { items, getCartTotal, clearCart } = useCart();
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        fullName: '', phone: '', email: '', address: '',
        city: 'Улаанбаатар', district: '', note: '', paymentMethod: 'qpay',
    });

    const formatPrice = (price: number) => new Intl.NumberFormat('mn-MN').format(price) + '₮';
    const subtotal = getCartTotal();
    const shipping = subtotal >= 100000 ? 0 : 5000;
    const total = subtotal + shipping;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        clearCart();
        router.push('/order-success');
    };

    if (items.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Сагс хоосон</h1>
                    <Link href="/products" className="px-6 py-3 bg-indigo-600 text-white rounded-xl">Дэлгүүр үзэх</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-8">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl md:text-3xl font-bold text-white">Захиалга баталгаажуулах</h1>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <form onSubmit={handleSubmit}>
                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-white rounded-2xl p-6 shadow-sm">
                                <h2 className="text-xl font-bold mb-6">Хүргэлтийн мэдээлэл</h2>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Овог, Нэр *</label>
                                        <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} required className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Утас *</label>
                                        <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500" />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium mb-2">Хаяг *</label>
                                        <textarea name="address" value={formData.address} onChange={handleInputChange} required rows={2} className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500" />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl p-6 shadow-sm">
                                <h2 className="text-xl font-bold mb-6">Төлбөрийн хэлбэр</h2>
                                <div className="grid grid-cols-3 gap-4">
                                    {['qpay', 'card', 'cash'].map((method) => (
                                        <label key={method} className={`flex flex-col items-center p-4 border-2 rounded-xl cursor-pointer ${formData.paymentMethod === method ? 'border-indigo-600 bg-indigo-50' : 'border-gray-200'}`}>
                                            <input type="radio" name="paymentMethod" value={method} checked={formData.paymentMethod === method} onChange={handleInputChange} className="sr-only" />
                                            <span className="text-2xl mb-2">{method === 'qpay' ? '📱' : method === 'card' ? '💳' : '💵'}</span>
                                            <span className="font-medium">{method === 'qpay' ? 'QPay' : method === 'card' ? 'Карт' : 'Бэлэн'}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-24">
                                <h2 className="text-xl font-bold mb-6">Захиалгын дүн</h2>
                                <div className="space-y-4 mb-6">
                                    {items.map((item) => (
                                        <div key={item.product.id} className="flex gap-3">
                                            <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-gray-100">
                                                <Image src={item.product.image} alt={item.product.name} fill className="object-cover" sizes="56px" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="font-medium truncate">{item.product.name}</p>
                                                <p className="text-sm text-gray-500">{item.quantity} x {formatPrice(item.product.price)}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="space-y-2 pt-4 border-t">
                                    <div className="flex justify-between"><span>Барааны дүн</span><span>{formatPrice(subtotal)}</span></div>
                                    <div className="flex justify-between"><span>Хүргэлт</span><span>{shipping === 0 ? 'Үнэгүй' : formatPrice(shipping)}</span></div>
                                    <div className="flex justify-between text-xl font-bold pt-2 border-t"><span>Нийт</span><span>{formatPrice(total)}</span></div>
                                </div>
                                <button type="submit" disabled={isSubmitting} className="mt-6 w-full py-4 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-bold rounded-xl">
                                    {isSubmitting ? 'Боловсруулж байна...' : 'Захиалга баталгаажуулах'}
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
