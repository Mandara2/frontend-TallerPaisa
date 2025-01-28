import axios from 'axios'
import { API_CRUD_URL } from '../config'

const url = axios.create({
    baseURL:`${API_CRUD_URL} + orderProduct`
})

export const getAllOrderProduct =()=>{
    return url.get("/")
 }
 export const getOrderProduct =(id)=>{
     return url.get(`/${id}/`)
  }
 export const createOrderProduct= (OrderProduct)=> {
     return url.post("/",OrderProduct)
 }
 export const deleteOrderProduct =(id)=>{
     return url.delete(`/${id}/`)
 }
 export const updateOrderProduct =(id, OrderProduct)=>{
     return url.put(`/${id}/`,OrderProduct )
 }