import { API } from "../service/axios";
import authentictaionRoutes from "../@types/endPoints/authEndPoints";



export const signup = async (DoctorRegister: FormData): Promise<any> => {

  console.log("doctor data..", DoctorRegister)
  console.log("doctor data..", FormData)

    try {
      const response = await API.post(
        authentictaionRoutes.signup_Doctor,
        DoctorRegister,{
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      console.log(response.data, "response????");
      return response.data;
    } catch (error: any) {
      if (error.response.status === 404) {
        throw error;
      }
      console.log(error.message);
    }
  };


  export const resendOtp = async (email: string): Promise<any> => {
    try {
      const response = await API.post(authentictaionRoutes.resendOtp_Doctor, {
        email,
      });
      console.log(response.data, "response resendOtp");
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const verifyOtp = async (otp: string): Promise<any> => {
    try {
      const response = await API.post(authentictaionRoutes.verifyOtp_Doctor, {
        otp,
      });
      console.log(response.data, "response verifyOtp");
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  export const login = async (email: string,password:string): Promise<any> => {
    try {
      const response = await API.post(authentictaionRoutes.login_Doctor, {
        email,password
      }, {
        withCredentials: true, // Ensure that cookies are sent with the request
      });
      console.log(response.data, "response login");
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  export const logout = async (): Promise<any> => {
    try {
      const response = await API.post(authentictaionRoutes.logout_Doctor,{},{withCredentials: true });// 2 parameter is the request part
      console.log(response.data, "response logout");
      return response.data;
    } catch (error) {
      throw error;
    }
  };


  // While forgot-password verify email 


  export const verifyEmail = async (email: string): Promise<any> => {
    try {
      const response = await API.post(
        authentictaionRoutes.verifyEmail_doctor,
        {
          email,
        }
      ); 
      console.log(response.data, "response sendRestLink");
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  
  
 
  export const verifyResetOtp = async (email:string,otp:string): Promise<any> => {
    try {
      const response = await API.post(authentictaionRoutes.verifyResetOtp_doctor,{
        email,otp
      },{
        withCredentials: true, // Ensure that cookies are sent with the request
      });
      console.log(response.data, "response verifyRestOtp");
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  export const forgotResendOtp = async (email: string): Promise<any> => {
    try {
      const response = await API.post(authentictaionRoutes.forgotResendOtp_doctor, {
        email,
      });
      console.log(response.data, "response resendOtp");
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const resetPassword = async (password:string): Promise<any> => {
    try {
      const response = await API.post(authentictaionRoutes.resetPassword_doctor,{
        password
      },{
        withCredentials:true
      });
      console.log(response.data, "response passwordReset");
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  


  


