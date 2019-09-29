import request from '../utils/request';
import { func } from 'prop-types';

export function query() {
  return request('/api/users');
}


export function product(params) {
  return request('/api/product?id='+ params.id)
}




export function login(params) {
  return request('http://www.nxwow.cn:8000/auth/jwt/create',{
    method: 'POST',
    body: params,
  })
}



export function getusers(params) {
  return request('http://www.nxwow.cn:8000/auth/users/',{
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + params

    }
  })
}