import DoctorRoutes from "../../@types/endPoints/doctorEndPoints";
import { API } from "../../service/axios";

export const getInstructorData = async (email: string | null): Promise<any> => {
  try {
    console.log("getInsssss")
    const response = await API.get(
      // `/user/instructors/${email}`
      `${DoctorRoutes.getDoctorData}${email}`
    );
    console.log(response.data,"getInsssss")
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
export const updateProfile = async (formData: FormData): Promise<any> => {
  try {
    console.log("Inside updateProfile API call");

    const response = await API.patch(DoctorRoutes.updateProfile, formData, {
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
    const response = await API.patch(DoctorRoutes.updatePassword, data, {
      withCredentials: true,
    });
    console.log(response, "response updatePassword");
    return response.data;
  } catch (error) {
    console.error("Error in updateProfile API call:", error);
  }
};