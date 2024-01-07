import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Container from "../../../components/Shared/Container";
import RoomCard from "./RoomCard";
import { useSearchParams } from "react-router-dom";
import Heading from "./Heading";
import Loader from "../../../components/Shared/Loader";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [params] = useSearchParams();
  const category = params.get("category");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("rooms.json")
      .then((res) => res.json())
      .then((data) => {
        if (category) {
          const categoryRooms = data.filter(
            (room) => room.category === category
          );
          setRooms(categoryRooms);
        } else {
          setRooms(data);
        }
        setLoading(false);
      });
  }, [category]);

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <Container>
      {rooms && rooms.length > 0 ? (
        <div className="pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {rooms?.map((room) => (
            <RoomCard key={room._id} room={room}></RoomCard>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-[400px]">
          <Heading
            title="No Rooms Available In This Category!"
            subtitle="Please Select Others Categories"
            center={true}
          ></Heading>
        </div>
      )}
    </Container>
  );
};

export default Rooms;
