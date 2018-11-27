import { get } from './api.js';

export const bannerListData = p => get('/v1/index', p);
export const recommendListData = p => get('/v1/index/recommend', p);
export const listData = p => get('/v1/index/list', p);