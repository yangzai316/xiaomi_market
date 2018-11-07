import { get } from './api.js';

export const detailData = p => get('/v1/details', p);