import { post } from './api.js';

export const loginData = p => post('/v1/login', p);