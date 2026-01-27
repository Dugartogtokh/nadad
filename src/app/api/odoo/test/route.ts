import { NextResponse } from 'next/server';
import { odooClient } from '@/lib/odoo';

export async function GET() {
    try {
        const products = await odooClient.getProducts();
        return NextResponse.json({ success: true, products });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
