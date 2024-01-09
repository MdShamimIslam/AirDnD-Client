import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import { BsFillHouseAddFill } from 'react-icons/bs';

const AdminMenu = () => {
    return (
        <>
           <MenuItem
                icon={BsFillHouseAddFill}
                label='Manage Users'
                address='manage-users'
              /> 
        </>
    );
};

export default AdminMenu;