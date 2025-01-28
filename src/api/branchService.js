import axios from 'axios'
import { API_CRUD_URL } from '../config'

const url = axios.create({
    baseURL:`${API_CRUD_URL} + branch`
})

export const getAllBranch =()=>{
    return url.get("/")
 }
 export const getBranch =(id)=>{
     return url.get(`/${id}/`)
  }
 export const createBranch= (Branch)=> {
     return url.post("/",Branch)
 }
 export const deleteBranch =(id)=>{
     return url.delete(`/${id}/`)
 }
 export const updateBranch =(id, Branch)=>{
     return url.put(`/${id}/`,Branch )
 }