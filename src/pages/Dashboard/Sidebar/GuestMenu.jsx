import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import { BsFillHouseAddFill } from 'react-icons/bs';

const GuestMenu = () => {
    return (
        <div>
            <MenuItem
                icon={BsFillHouseAddFill}
                label=' My Bookings'
                address='my-bookings'
              />
        </div>
    );
};

export default GuestMenu;