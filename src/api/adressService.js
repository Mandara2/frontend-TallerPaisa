import axios from 'axios'
import { API_CRUD_URL } from '../config'

const url = axios.create({
    baseURL:`${API_CRUD_URL} + adress`
})

export const getAllAdress =()=>{
    return url.get("/")
 }
 export const getAdress =(id)=>{
     return url.get(`/${id}/`)
  }
 export const createAdress= (Adress)=> {
     return url.post("/",Adress)
 }
 export const deleteAdress =(id)=>{
     return url.delete(`/${id}/`)
 }
 export const updateAdress =(id, Adress)=>{
     return url.put(`/${id}/`,Adress )
 }