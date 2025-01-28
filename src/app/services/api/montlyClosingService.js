import axios from 'axios'
import { API_CRUD_URL } from '../config'

const url = axios.create({
    baseURL:`${API_CRUD_URL} + montlyClosing`
})

export const getAllMontlyClosing =()=>{
    return url.get("/")
 }
 export const getMontlyClosing =(id)=>{
     return url.get(`/${id}/`)
  }
 export const createMontlyClosing= (MontlyClosing)=> {
     return url.post("/",MontlyClosing)
 }
 export const deleteMontlyClosing =(id)=>{
     return url.delete(`/${id}/`)
 }
 export const updateMontlyClosing =(id, MontlyClosing)=>{
     return url.put(`/${id}/`,MontlyClosing )
 }