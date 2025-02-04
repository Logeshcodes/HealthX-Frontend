import { API } from "../../service/axios";

import AdminRoutes from "../../@types/endPoints/adminEndPoints";

import { deptData } from "../../@types/DeptDataType";


  
  export const getAllDoctors = async (): Promise<any> => {
    try {
      console.log("response getAllStudents11")
      const response = await API.get(AdminRoutes.adminGetDoctors);
      console.log(response.data.users,"response getAllStudents")
      return response?.data?.users;
    } catch (error) {
      console.error("Error in updateProfile API call:", error);
    }
  };

  export const getAllDepartment = async (): Promise<any> => {
    try {
      console.log("response getAlldept")
      const response = await API.get(AdminRoutes.adminGetAllDepartment,{
        headers:{
          "Content-Type":"application/json"
        },
        withCredentials:true
      });
      console.log(response,"response getAlldept")
      return response;
    } catch (error) {
      console.error("Error in updateProfile API call:", error);
    }
  };

  export const getAllUser = async (): Promise<any> => {
    try {
      console.log("response getAllUser")
      const response = await API.get(AdminRoutes.adminGetAllusers,{
        headers:{
          "Content-Type":"application/json"
        },
        withCredentials:true
      });
      console.log(response.data.users,"response getAllUser")
      return response?.data?.users;
    } catch (error) {
      console.error("Error in updateProfile API call:", error);
    }
  };
  
  
  export const blockUser = async (email: string | null): Promise<any> => {
    try {
      const response = await API.get(`${AdminRoutes.adminBlockUser}/${email}`,{
        headers:{
          "Content-Type":"application/json"
        },
        withCredentials:true
      });
      console.log(`Calling API with URL: ${AdminRoutes.adminBlockUser}/${email}`);
      return response?.data;
    } catch (error) {
      console.log('Error blocking/unblocking user:', error);
      throw error;
    }
  };
  
  
  

  export const blockDoctor = async (email: string | null): Promise<any> => {
    try {
      const response = await API.get(`${AdminRoutes.adminBlockDoctor}${email}`,{
        headers:{
          "Content-Type":"application/json"
        },
        withCredentials:true
      });
      // console.log(response.data,"setstudent respone")
      return response?.data;
    } catch (error) {
      console.log(error);
    }
  };






  //

  

export const addDepartment = async (deptData: deptData): Promise<any> => {
  try {
    console.log("users data..", deptData)

    const response = await API.post(
      AdminRoutes.adminAddDepartment,
      deptData
    );
    console.log(response.data, "response");
    return response.data;
  } catch (error: any) {
    if (error.response.status === 404) {
      throw error;
    }
    console.log(error.message);
  }
};


// Fetch department details by name
export const getDepartmentByName = async (departmentName: string): Promise<any> => {
  try {
    console.log("_________", departmentName)
    const response = await API.get(`${AdminRoutes.adminGetDepartmentByName}/${departmentName}`);
    console.log(".....",response)
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.status === 404) {
      throw new Error('Department not found');
    }
    throw error;
  }
};

// Update department by name
export const updateDepartment = async (departmentName: string, deptData: { departmentName: string }): Promise<any> => {
  try {
    const response = await API.put(
      `${AdminRoutes.adminUpdateDepartment}/${departmentName}`,
      deptData
    );
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.status === 404) {
      throw new Error('Department not found');
    }
    throw error;
  }
};