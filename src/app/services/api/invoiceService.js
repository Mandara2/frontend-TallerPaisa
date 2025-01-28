import axios from 'axios'
import { API_CRUD_URL } from '../config'

const url = axios.create({
    baseURL:`${API_CRUD_URL} + invoice`
})

export const getAllInvoice =()=>{
    return url.get("/")
 }
 export const getInvoice =(id)=>{
     return url.get(`/${id}/`)
  }
 export const createInvoice= (Invoice)=> {
     return url.post("/",Invoice)
 }
 export const deleteInvoice =(id)=>{
     return url.delete(`/${id}/`)
 }
 export const updateInvoice =(id, Invoice)=>{
     return url.put(`/${id}/`,Invoice )
 }