import {TProduct} from '../types/product';

export const mockProducts: TProduct[] = [
  {
    createdAt: '2022-12-09T06:34:25.607Z',
    product: 'Producto 1',
    points: 10,
    image: 'https://loremflickr.com/640/480/transport',
    is_redemption: false,
    id: '1',
  },
  {
    createdAt: '2022-12-09T17:02:51.904Z',
    product: 'Producto 2',
    points: 20,
    image: 'https://loremflickr.com/640/480/technics',
    is_redemption: true,
    id: '2',
  },
  {
    createdAt: '2022-12-09T10:20:00.909Z',
    product: 'Producto 3',
    points: 30,
    image: 'https://loremflickr.com/640/480/technics',
    is_redemption: false,
    id: '3',
  },
];
