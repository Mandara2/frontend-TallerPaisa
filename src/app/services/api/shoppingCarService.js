import axios from 'axios'
import { API_CRUD_URL } from '../../../config'

const url = axios.create({
    baseURL:`${API_CRUD_URL} + shoppingCar`
})

export const getAllShoppingCar =()=>{
    return url.get("/")
 }
 export const getShoppingCar =(id)=>{
     return url.get(`/${id}/`)
  }
 export const createShoppingCar= (ShoppingCar)=> {
     return url.post("/",ShoppingCar)
 }
 export const deleteShoppingCar =(id)=>{
     return url.delete(`/${id}/`)
 }
 export const updateShoppingCar =(id, ShoppingCar)=>{
     return url.put(`/${id}/`,ShoppingCar )
 }