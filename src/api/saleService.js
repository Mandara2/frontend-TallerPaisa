import axios from 'axios'
import { API_CRUD_URL } from '../config'

const url = axios.create({
    baseURL:`${API_CRUD_URL} + sale`
})

export const getAllSale =()=>{
    return url.get("/")
 }
 export const getSale =(id)=>{
     return url.get(`/${id}/`)
  }
 export const createSale= (Sale)=> {
     return url.post("/",Sale)
 }
 export const deleteSale =(id)=>{
     return url.delete(`/${id}/`)
 }
 export const updateSale =(id, Sale)=>{
     return url.put(`/${id}/`,Sale )
 }