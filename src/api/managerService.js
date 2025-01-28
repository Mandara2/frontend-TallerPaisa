import axios from 'axios'
import { API_CRUD_URL } from '../config'

const url = axios.create({
    baseURL:`${API_CRUD_URL} + manager`
})

export const getAllManager =()=>{
    return url.get("/")
 }
 export const getManager =(id)=>{
     return url.get(`/${id}/`)
  }
 export const createManager= (Manager)=> {
     return url.post("/",Manager)
 }
 export const deleteManager =(id)=>{
     return url.delete(`/${id}/`)
 }
 export const updateManager =(id, Manager)=>{
     return url.put(`/${id}/`,Manager )
 }