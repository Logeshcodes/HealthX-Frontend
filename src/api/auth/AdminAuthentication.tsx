
import { userData } from "../../@types/UserDataType";
import { API } from "../../service/axios";
import authentictaionRoutes from "../../@types/endPoints/authEndPoints";


export const adminLogin = async (userData: userData): Promise<any> => {
  try {
    const response = await API.post(authentictaionRoutes.adminLogin, userData, { withCredentials: true });
    console.log(response.data, "admin response");
    return response.data;
  } catch (error: any) {
    console.error("Error during admin logout:", error.response?.data || error);
    throw error;
  }
};

export const adminLogout = async (): Promise<any> => {
  try {
    const response = await API.post(authentictaionRoutes.adminLogout, {}, { withCredentials: true });
    console.log(response.data, "Logout response");
    return response.data;
  } catch (error: any) {
    console.error("Error during admin logout:", error.response?.data || error);
    throw error;
  }
};






