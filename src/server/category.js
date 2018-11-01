import { get } from './api.js';

export const categoryData = p => get('/v1/category', p);