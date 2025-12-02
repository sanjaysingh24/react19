import axiosInstance from "./axiosInstace";

export const createUSer = async(data)=>{
    try{
   const response = await axiosInstance.post('/api/create',data);
    return response.data;
    }catch(err){
        console.log("Error while calling createUser API", err);
    }
}