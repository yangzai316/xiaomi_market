import { get } from './api.js';

export const detailData = p => get('/v1/details', p);

export const imgsData = p => get('/v1/details/phone', p);

export const commendsData = p => get('/v1/details/commends', p);

export const commentData = p => get('/v1/details/comment', p);

export const commentDetailData = p => get('/v1/details/commentDetail', p);

export const paramsData = p => get('/v1/details/params', p);