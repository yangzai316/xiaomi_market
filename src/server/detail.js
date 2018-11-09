import { get } from './api.js';

export const detailData = p => get('/v1/details', p);

export const imgsData = p => get('/v1/details/phone', p);

export const commendsData = p => get('/v1/details/commends', p);