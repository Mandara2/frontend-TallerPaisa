import axios from 'axios'
import { API_CRUD_URL } from '../config'

const url = axios.create({
    baseURL:`${API_CRUD_URL} + department`
})

export const getAllDepartment =()=>{
    return url.get("/")
 }
 export const getDepartment =(id)=>{
     return url.get(`/${id}/`)
  }
 export const createDepartment= (Department)=> {
     return url.post("/",Department)
 }
 export const deleteDepartment =(id)=>{
     return url.delete(`/${id}/`)
 }
 export const updateDepartment =(id, Department)=>{
     return url.put(`/${id}/`,Department )
 }