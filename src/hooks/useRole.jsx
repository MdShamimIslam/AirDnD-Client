import React, { useEffect, useState } from 'react';
import useAuth from './useAuth';
import { getRole } from '../api/rooms';

const useRole = () => {
   const {user} = useAuth();
   const [role,setRole] = useState(null);
   const [loading,setLoading] = useState(true)

   useEffect(()=>{
    getRole(user?.email)
    .then(data=>{
        setRole(data);
        setLoading(false)
    })
   },[user?.email])

   return [role,loading]
};

export default useRole;