import axios from 'axios'
import { API_CRUD_URL } from '../config'

const url = axios.create({
    baseURL:`${API_CRUD_URL} + product`
})

export const getAllProduct =()=>{
    return url.get("/")
 }
 export const getProduct =(id)=>{
     return url.get(`/${id}/`)
  }
 export const createProduct= (Product)=> {
     return url.post("/",Product)
 }
 export const deleteProduct =(id)=>{
     return url.delete(`/${id}/`)
 }
 export const updateProduct =(id, Product)=>{
     return url.put(`/${id}/`,Product )
 }