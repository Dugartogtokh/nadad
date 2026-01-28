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
                                <div className="grid grid-cols-3 gap-4 mb-6">
                                    {[
                                        { id: 'qpay', icon: '📱', label: 'QPay' },
                                        { id: 'transfer', icon: '🏦', label: 'Дансаар' },
                                        { id: 'cod', icon: '📦', label: 'Хүргэлтээр' }
                                    ].map((method) => (
                                        <label key={method.id} className={`flex flex-col items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${formData.paymentMethod === method.id ? 'border-indigo-600 bg-indigo-50 scale-105' : 'border-gray-100 hover:border-gray-200'}`}>
                                            <input type="radio" name="paymentMethod" value={method.id} checked={formData.paymentMethod === method.id} onChange={handleInputChange} className="sr-only" />
                                            <span className="text-2xl mb-2">{method.icon}</span>
                                            <span className="font-medium text-sm">{method.label}</span>
                                        </label>
                                    ))}
                                </div>

                                <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                                    {formData.paymentMethod === 'qpay' && (
                                        <div className="text-center space-y-4">
                                            <div className="bg-white p-4 rounded-xl inline-block shadow-sm">
                                                {/* Placeholder for QR Code */}
                                                <div className="w-48 h-48 bg-gray-200 flex items-center justify-center rounded-lg mx-auto mb-2">
                                                    <span className="text-4xl">🏁</span>
                                                </div>
                                                <p className="text-sm text-gray-500">QR кодыг уншуулж төлнө үү</p>
                                            </div>
                                            <div>
                                                <p className="font-medium text-indigo-600">Төлөх дүн: {formatPrice(total)}</p>
                                                <p className="text-xs text-gray-500 mt-1">Төлбөр төлөгдсөний дараа автоматаар баталгаажна</p>
                                            </div>
                                        </div>
                                    )}

                                    {formData.paymentMethod === 'transfer' && (
                                        <div className="space-y-4">
                                            <div className="bg-white p-4 rounded-xl border border-gray-200">
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="font-medium">Хаан банк</span>
                                                    <Image src="/khan-bank.png" width={24} height={24} alt="Khan Bank" className="opacity-0" /> {/* Mock hidden image for spacing if needed or remove */}
                                                </div>
                                                <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                                                    <code className="text-lg font-bold text-gray-700">5000 0000 0000</code>
                                                    <button type="button" onClick={() => navigator.clipboard.writeText('500000000000')} className="text-xs bg-white border px-2 py-1 rounded shadow-sm hover:bg-gray-50">Хуулах</button>
                                                </div>
                                                <p className="text-sm text-gray-500 mt-2">Хүлээн авагч: <span className="font-medium text-gray-900">И-Коммерс ХХК</span></p>
                                            </div>

                                            <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
                                                <p className="text-sm text-orange-800">
                                                    <strong>Гүйлгээний утга:</strong> Таны утасны дугаар
                                                </p>
                                                <p className="text-xs text-orange-600 mt-1">
                                                    Төлбөр шилжүүлсний дараа бид шалгаж баталгаажуулах болно.
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    {formData.paymentMethod === 'cod' && (
                                        <div className="text-center py-4">
                                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <h3 className="font-bold text-gray-900 mb-2">Бэлнээр төлөх</h3>
                                            <p className="text-sm text-gray-600">
                                                Та бараагаа хүлээн авахдаа төлбөрөө бэлнээр эсвэл картаар төлөх боломжтой.
                                            </p>
                                        </div>
                                    )}
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
                                <button type="submit" disabled={isSubmitting} className="mt-6 w-full py-4 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-bold rounded-xl transition-colors">
                                    {isSubmitting ? 'Боловсруулж байна...' : 'Захиалга баталгаажуулах'}
                                </button>
                                <p className="text-xs text-center text-gray-400 mt-4">
                                    Захиалга хийснээр та манай үйлчилгээний нөхцөлийг зөвшөөрч байна.
                                </p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
