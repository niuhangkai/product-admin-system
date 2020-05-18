import http from './fetch'

export const register = (params) => http.post('/users', { ...params })

export const login = (params) => http.post('/users/login', { ...params })

export const products = (params) => http.get('/product', { ...params })

export const deleteProduct = (params) => http.delete('/product', { ...params })

export const changeProduct = (params) => http.patch('/product', { ...params })

export const createProduct = (params) => http.post('/product', { ...params })

export const productDetail = (params) => http.get('/product/detail', { ...params })

export const users = (params) => http.get('/users', { ...params })
