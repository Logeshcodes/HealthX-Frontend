import { API } from "../service/axios"
import authentictaionRoutes from "../@types/endPoints/authEndPoints"




export const StudentGoogleLogin = async (loginData:object)=>{
    try {
        const response = await API.post(authentictaionRoutes.googleLogin_user, loginData,{
          withCredentials:true
        })
        return response.data
    } catch (error:any) {
        return error
    }
  }