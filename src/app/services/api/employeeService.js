import axios from 'axios'
import { API_CRUD_URL } from '../config'

const url = axios.create({
    baseURL:`${API_CRUD_URL} + employee`
})

export const getAllEmployee =()=>{
    return url.get("/")
 }
 export const getEmployee =(id)=>{
     return url.get(`/${id}/`)
  }
 export const createEmployee= (Employee)=> {
     return url.post("/",Employee)
 }
 export const deleteEmployee =(id)=>{
     return url.delete(`/${id}/`)
 }
 export const updateEmployee =(id, Employee)=>{
     return url.put(`/${id}/`,Employee )
 }