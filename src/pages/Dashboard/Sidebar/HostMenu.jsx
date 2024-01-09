import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import { BsFillHouseAddFill } from 'react-icons/bs';
import { FaTableList } from 'react-icons/fa6';

const HostMenu = () => {
    return (
        <>
            <MenuItem
                icon={BsFillHouseAddFill}
                label='Add Room'
                address='add-room'
              />
              <MenuItem
                icon={FaTableList}
                label='My Listings'
                address='my-listings'
              />
        </>
    );
};

export default HostMenu;