import axios from 'axios'
import { API_CRUD_URL } from '../config'

const url = axios.create({
    baseURL:`${API_CRUD_URL} + dailyClosing`
})

export const getAllDailyClosing =()=>{
    return url.get("/")
 }
 export const getDailyClosing =(id)=>{
     return url.get(`/${id}/`)
  }
 export const createDailyClosing= (DailyClosing)=> {
     return url.post("/",DailyClosing)
 }
 export const deleteDailyClosing =(id)=>{
     return url.delete(`/${id}/`)
 }
 export const updateDailyClosing =(id, DailyClosing)=>{
     return url.put(`/${id}/`,DailyClosing )
 }