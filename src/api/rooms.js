import axiosSecure from "./axiosSecure";


export const getAllRoom = async ()=>{
    const {data}= await axiosSecure('/room');
    return data; 
}


export const getRoom = async (id)=>{
    const {data}= await axiosSecure(`/room/${id}`);
    return data; 
}