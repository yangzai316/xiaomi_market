import { get,post } from './api.js';

export const bannerListData = p => get('/v1/index', p);