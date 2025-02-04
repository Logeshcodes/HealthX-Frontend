import { API } from "../../service/axios";

import UserRouters from "../../@types/endPoints/userEndPoints";




  export const getUserData = async (email: string | null): Promise<any> => {
    try {
      const response = await API.get(`${UserRouters.getUserData}${email}`,{
        withCredentials : true 
      });
    
      return response?.data;
    } catch (error) {
      console.log(error);
    }
  };
  export const updateProfile = async (formData: FormData): Promise<any> => {
    try {
      console.log("Inside updateProfile API call");
  
      const response = await API.patch(UserRouters.updateProfile, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      console.log(response.data.user, "updateProfile response");
      return response?.data;
    } catch (error) {
      console.error("Error in updateProfile API call:", error);
    }
  };
  
  export const updatePassword = async (data: any): Promise<any> => {
    try {
      const response = await API.patch(UserRouters.updatePassword, data, {
        withCredentials: true,
      });
      console.log(response,"response updatePassword")
      return response.data;
    } catch (error) {
      console.error("Error in updateProfile API call:", error);
    }
  };
 

  export const getDoctorData = async (): Promise<any> => {
    try {
      const response = await API.get(`${UserRouters.getAllDoctors}`,{
        withCredentials : true 
      });
      return response?.data; 
    } catch (error) {
      console.log("Error fetching doctor data:", error);
    }
  };
  
  export const getDoctorDataById = async (): Promise<any> => {
    try {
      const response = await API.get(`${UserRouters.getDoctorDataById}`,{
        withCredentials : true 
      });
      return response?.data; 
    } catch (error) {
      console.log("Error fetching doctor data:", error);
    }
  };
  