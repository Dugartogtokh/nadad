'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product } from '@/types';

interface WishlistContextType {
    items: Product[];
    addToWishlist: (product: Product) => void;
    removeFromWishlist: (productId: string) => void;
    isInWishlist: (productId: string) => boolean;
    clearWishlist: () => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<Product[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Load wishlist from localStorage on mount
    useEffect(() => {
        const savedWishlist = localStorage.getItem('wishlist');
        if (savedWishlist) {
            try {
                setItems(JSON.parse(savedWishlist));
            } catch (error) {
                console.error('Error loading wishlist:', error);
            }
        }
        setIsLoaded(true);
    }, []);

    // Save wishlist to localStorage whenever it changes
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem('wishlist', JSON.stringify(items));
        }
    }, [items, isLoaded]);

    const addToWishlist = (product: Product) => {
        setItems((prevItems) => {
            if (prevItems.some((item) => item.id === product.id)) {
                return prevItems;
            }
            return [...prevItems, product];
        });
    };

    const removeFromWishlist = (productId: string) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== productId));
    };

    const isInWishlist = (productId: string) => {
        return items.some((item) => item.id === productId);
    };

    const clearWishlist = () => {
        setItems([]);
    };

    return (
        <WishlistContext.Provider
            value={{
                items,
                addToWishlist,
                removeFromWishlist,
                isInWishlist,
                clearWishlist,
            }}
        >
            {children}
        </WishlistContext.Provider>
    );
}

export function useWishlist() {
    const context = useContext(WishlistContext);
    if (context === undefined) {
        throw new Error('useWishlist must be used within a WishlistProvider');
    }
    return context;
}
