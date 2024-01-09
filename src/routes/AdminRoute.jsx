import React from 'react';
import useRole from '../hooks/useRole';
import Loader from '../components/Shared/Loader';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({children}) => {
    const [role,loading] = useRole();

    if(loading){
        return <Loader></Loader>
       }
    
       if(role === 'admin'){
        return children;
       }
       
       return <Navigate to='/dashboard'></Navigate>
};

export default AdminRoute;