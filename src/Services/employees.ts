import axios from 'axios';
import { domain } from '../constants';

type employePayload = {
  name: String,
  last_name: String,
  birthday: String
}

export const getEmployees = () => {
  const config = {
    url: `${domain}/v1/examen/employees/:Victor_Roman`,
    method: 'get'
  }
  return axios(config)
}

export const postEmployee = (payload: employePayload) => {
  const config = {
    method: 'post',
    data: payload,
    url: `${domain}/v1/examen/employees/:Victor_Roman`
  }
  return axios(config)
}