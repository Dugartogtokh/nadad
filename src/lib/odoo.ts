
import xmlrpc from 'xmlrpc';

const ODOO_URL = process.env.ODOO_URL || 'https://demo.odoo.com';
const ODOO_DB = process.env.ODOO_DB || 'demo';
const ODOO_USERNAME = process.env.ODOO_USERNAME || 'admin';
const ODOO_PASSWORD = process.env.ODOO_PASSWORD || 'admin';
const MOCK_ODOO = process.env.MOCK_ODOO === 'true';

export interface OdooProduct {
    id: number;
    name: string;
    list_price: number;
    description_sale?: string;
}

export class OdooClient {
    private common: xmlrpc.Client;
    private object: xmlrpc.Client;
    private uid: number | null = null;

    constructor() {
        const url = new URL(ODOO_URL);
        const clientOptions = {
            host: url.hostname,
            port: url.port ? parseInt(url.port) : (url.protocol === 'https:' ? 443 : 80),
            path: '/xmlrpc/2/',
            secure: url.protocol === 'https:',
        };

        this.common = xmlrpc.createClient({ ...clientOptions, path: '/xmlrpc/2/common' });
        this.object = xmlrpc.createClient({ ...clientOptions, path: '/xmlrpc/2/object' });
    }

    async connect(): Promise<number> {
        if (MOCK_ODOO) {
            console.log('Using MOCK_ODOO mode. Returning mock UID.');
            this.uid = 1;
            return 1;
        }

        return new Promise((resolve, reject) => {
            this.common.methodCall('login', [ODOO_DB, ODOO_USERNAME, ODOO_PASSWORD], (error, value) => {
                if (error) {
                    reject(error);
                } else {
                    if (value === false) {
                        reject(new Error('Authentication failed'));
                    } else {
                        this.uid = value as number;
                        resolve(this.uid);
                    }
                }
            });
        });
    }

    async getProducts(limit: number = 10): Promise<OdooProduct[]> {
        if (MOCK_ODOO) {
            return [
                { id: 1, name: 'Mock Product 1', list_price: 100.0, description_sale: 'This is a mock product.' },
                { id: 2, name: 'Mock Product 2', list_price: 250.50, description_sale: 'Another mock product.' },
                { id: 3, name: 'Odoo Laptop', list_price: 1200.00, description_sale: 'High performance laptop from Odoo.' },
            ];
        }

        if (!this.uid) {
            await this.connect();
        }

        return new Promise((resolve, reject) => {
            this.object.methodCall('execute_kw', [
                ODOO_DB,
                this.uid,
                ODOO_PASSWORD,
                'product.product',
                'search_read',
                [[['sale_ok', '=', true]]], // Domain
                {
                    fields: ['name', 'list_price', 'description_sale'],
                    limit: limit
                } // Options
            ], (error, value) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(value as OdooProduct[]);
                }
            });
        });
    }
}

export const odooClient = new OdooClient();
