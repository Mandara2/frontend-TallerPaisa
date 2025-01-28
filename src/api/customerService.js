import axios from 'axios'
import { API_CRUD_URL } from '../config'

const url = axios.create({
    baseURL:`${API_CRUD_URL} + customer`
})

export const getAllCustomer =()=>{
    return url.get("/")
 }
 export const getCustomer =(id)=>{
     return url.get(`/${id}/`)
  }
 export const createCustomer= (Customer)=> {
     return url.post("/",Customer)
 }
 export const deleteCustomer =(id)=>{
     return url.delete(`/${id}/`)
 }
 export const updateCustomer =(id, Customer)=>{
     return url.put(`/${id}/`,Customer )
 }