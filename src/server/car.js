import { get } from './api.js';

export const carData = p => get('/v1/car', p);