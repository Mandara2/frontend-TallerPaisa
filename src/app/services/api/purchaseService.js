import axios from 'axios'
import { API_CRUD_URL } from '../config'

const url = axios.create({
    baseURL:`${API_CRUD_URL} + purchase`
})

export const getAllPurchase =()=>{
    return url.get("/")
 }
 export const getPurchase =(id)=>{
     return url.get(`/${id}/`)
  }
 export const createPurchase= (Purchase)=> {
     return url.post("/",Purchase)
 }
 export const deletePurchase =(id)=>{
     return url.delete(`/${id}/`)
 }
 export const updatePurchase =(id, Purchase)=>{
     return url.put(`/${id}/`,Purchase )
 }