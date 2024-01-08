import React, { useState } from "react";
import DayPic from "./DayPic";
import Button from "../../Button/Button";
import { formatDistance } from "date-fns";

const RoomReservation = ({ room }) => {

const totalDays = parseInt(formatDistance(new Date(room.to), new Date(room.from)).split(' ')[0]);
const totalPrice = totalDays * room?.price ;

// TODO:
const [value,setValue] = useState({
    startDate : new Date(room?.from),
    endDate : new Date(room?.to),
    key : 'selection'
})

  return (
    <div className="rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white">
      <div className="flex items-center gap-2 p-4">
        <h3 className="text-2xl font-semibold">$ {room?.price}</h3>
        <p className="font-light text-neutral-600">night</p>
      </div>
      <hr />
      <div className="flex justify-center">
        <DayPic value={value}></DayPic>
      </div>
      <hr />
      <div className="p-4">
        <Button label={"Reserve"}></Button>
      </div>
      <hr />
      <div className="p-4 flex items-center justify-between font-semibold text-lg">
        <p>Total</p>
        <p>$ {totalPrice}</p>
      </div>
    </div>
  );
};

export default RoomReservation;
