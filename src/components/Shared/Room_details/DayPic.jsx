import React from 'react';
import { DateRange } from 'react-date-range';

const DayPic = ({value}) => {
    return (
        <div>
            <DateRange
            ranges={[value]}
                rangeColors={['#F43F5E']}
                direction='vertical'
                showDateDisplay={false}
            ></DateRange>
        </div>
    );
};

export default DayPic;