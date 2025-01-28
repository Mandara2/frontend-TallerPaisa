import axios from 'axios'
import { API_CRUD_URL } from '../config'

const url = axios.create({
    baseURL:`${API_CRUD_URL} + city`
})

export const getAllCity =()=>{
    return url.get("/")
 }
 export const getCity =(id)=>{
     return url.get(`/${id}/`)
  }
 export const createCity= (City)=> {
     return url.post("/",City)
 }
 export const deleteCity =(id)=>{
     return url.delete(`/${id}/`)
 }
 export const updateCity =(id, City)=>{
     return url.put(`/${id}/`,City )
 }