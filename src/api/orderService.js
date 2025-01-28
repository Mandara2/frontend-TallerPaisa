import axios from 'axios'
import { API_CRUD_URL } from '../config'

const url = axios.create({
    baseURL:`${API_CRUD_URL} + order`
})

export const getAllOrder =()=>{
    return url.get("/")
 }
 export const getOrder =(id)=>{
     return url.get(`/${id}/`)
  }
 export const createOrder= (Order)=> {
     return url.post("/",Order)
 }
 export const deleteOrder =(id)=>{
     return url.delete(`/${id}/`)
 }
 export const updateOrder =(id, Order)=>{
     return url.put(`/${id}/`,Order )
 }