import { get } from './api.js';

export const detailData = p => get('/v1/details', p);

export const imgsData = p => get('/v1/details/phone', p);