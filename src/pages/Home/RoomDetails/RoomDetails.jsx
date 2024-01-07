import React, { useEffect, useState } from "react";
import Container from "../../../components/Shared/Container";
import Loader from "../../../components/Shared/Loader";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "../../../components/Shared/Room_details/Header";
import RoomInfo from "../../../components/Shared/Room_details/RoomInfo";
import RoomReservation from "../../../components/Shared/Room_details/RoomReservation";

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("/rooms.json")
      .then((res) => res.json())
      .then((data) => {
        const singleRoom = data.find((room) => room._id === id);
        setRoom(singleRoom);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <Container>
      <Helmet>
        <title>AirDnD | Room Details</title>
      </Helmet>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
          <Header roomData={room}></Header>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-12">
          <div className="md:col-span-4">
            <RoomInfo roomData={room}></RoomInfo>
          </div>
          <div className="md:col-span-3 order-first md:order-last mb-10">
            <RoomReservation room={room}></RoomReservation>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RoomDetails;
