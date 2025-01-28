import axios from 'axios'
import { API_CRUD_URL } from '../config'

const url = axios.create({
    baseURL:`${API_CRUD_URL} + category`
})

export const getAllCategory =()=>{
    return url.get("/")
 }
 export const getCategory =(id)=>{
     return url.get(`/${id}/`)
  }
 export const createCategory= (Category)=> {
     return url.post("/",Category)
 }
 export const deleteCategory =(id)=>{
     return url.delete(`/${id}/`)
 }
 export const updateCategory =(id, Category)=>{
     return url.put(`/${id}/`,Category )
 }