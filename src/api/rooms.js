import axiosSecure from "./axiosSecure";

// get all room from db
export const getAllRoom = async ()=>{
    const {data}= await axiosSecure('/room');
    return data; 
}

// get single room from db
export const getRoom = async (id)=>{
    const {data}= await axiosSecure(`/room/${id}`);
    return data; 
}

// get host rooms
export const getHostRoom = async (email)=>{
    const {data}= await axiosSecure(`/rooms/${email}`);
    return data; 
}

// get role
export const getRole = async (email)=>{
    const {data}= await axiosSecure(`/user/${email}`);
    return data.role; 
}

// save room info in db
export const addRoom = async (roomData)=>{
    const {data}= await axiosSecure.post('/room',roomData);
    return data; 
}
