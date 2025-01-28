import axios from 'axios'
import { API_CRUD_URL } from '../../../config'

const url = axios.create({
    baseURL:`${API_CRUD_URL} + suplier`
})

export const getAllSuplier =()=>{
    return url.get("/")
 }
 export const getSuplier =(id)=>{
     return url.get(`/${id}/`)
  }
 export const createSuplier= (Suplier)=> {
     return url.post("/",Suplier)
 }
 export const deleteSuplier =(id)=>{
     return url.delete(`/${id}/`)
 }
 export const updateSuplier =(id, Suplier)=>{
     return url.put(`/${id}/`,Suplier )
 }