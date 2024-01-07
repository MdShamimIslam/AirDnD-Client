import React from 'react';
import { DateRange } from 'react-date-range';

const DayPic = () => {
    return (
        <div>
            <DateRange
                rangeColors={['#F43F5E']}
                direction='vertical'
                showDateDisplay={false}
            ></DateRange>
        </div>
    );
};

export default DayPic;