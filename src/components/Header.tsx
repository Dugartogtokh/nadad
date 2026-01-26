'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const { getCartCount } = useCart();
    const { items: wishlistItems } = useWishlist();

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
            {/* Top Bar */}
            <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white text-sm py-2">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <span className="hidden sm:inline">🚚 Үнэгүй хүргэлт 100,000₮-с дээш захиалгад</span>
                    <span className="sm:hidden text-center w-full">🚚 Үнэгүй хүргэлт!</span>
                    <div className="hidden sm:flex items-center gap-4">
                        <span>📞 7777-8888</span>
                        <span>✉️ info@nadad.mn</span>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                            <span className="text-white font-bold text-xl">N</span>
                        </div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            Nadad
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        <Link href="/" className="relative text-gray-700 hover:text-indigo-600 transition-colors font-medium group">
                            Нүүр
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all"></span>
                        </Link>
                        <Link href="/products" className="relative text-gray-700 hover:text-indigo-600 transition-colors font-medium group">
                            Бүтээгдэхүүн
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all"></span>
                        </Link>
                        <Link href="/categories" className="relative text-gray-700 hover:text-indigo-600 transition-colors font-medium group">
                            Ангилал
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all"></span>
                        </Link>
                        <Link href="/deals" className="relative text-gray-700 hover:text-indigo-600 transition-colors font-medium group">
                            Хямдрал
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all"></span>
                        </Link>
                        <Link href="/about" className="relative text-gray-700 hover:text-indigo-600 transition-colors font-medium group">
                            Бидний тухай
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all"></span>
                        </Link>
                    </nav>

                    {/* Search Bar - Desktop */}
                    <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="Бүтээгдэхүүн хайх..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-4 py-2.5 pl-12 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
                            />
                            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 sm:gap-4">
                        {/* Mobile Search Toggle */}
                        <button
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                            className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
                        >
                            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>

                        {/* Wishlist */}
                        <Link href="/wishlist" className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
                            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            {wishlistItems.length > 0 && (
                                <span className="absolute -top-1 -right-1 w-5 h-5 bg-pink-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
                                    {wishlistItems.length}
                                </span>
                            )}
                        </Link>

                        {/* Cart */}
                        <Link href="/cart" className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
                            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            {getCartCount() > 0 && (
                                <span className="absolute -top-1 -right-1 w-5 h-5 bg-indigo-600 text-white text-xs rounded-full flex items-center justify-center font-medium">
                                    {getCartCount()}
                                </span>
                            )}
                        </Link>

                        {/* User */}
                        <Link href="/account" className="hidden sm:flex p-2 hover:bg-gray-100 rounded-full transition-colors">
                            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Mobile Search */}
                {isSearchOpen && (
                    <div className="md:hidden pb-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Бүтээгдэхүүн хайх..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-4 py-3 pl-12 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                )}
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="lg:hidden border-t bg-white">
                    <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
                        <Link href="/" className="px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                            Нүүр
                        </Link>
                        <Link href="/products" className="px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                            Бүтээгдэхүүн
                        </Link>
                        <Link href="/categories" className="px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                            Ангилал
                        </Link>
                        <Link href="/deals" className="px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                            Хямдрал
                        </Link>
                        <Link href="/about" className="px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                            Бидний тухай
                        </Link>
                        <Link href="/account" className="px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                            Миний бүртгэл
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
