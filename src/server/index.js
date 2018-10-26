import { get,post } from './api.js';

export const index_data = p => get('/v1/index', p);