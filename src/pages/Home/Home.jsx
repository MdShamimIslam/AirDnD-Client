import { Helmet } from "react-helmet-async";
import Category from "./Categories/Category";
import Rooms from "./Rooms/Rooms";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>AirDnD | Home</title>
      </Helmet>
      <Category></Category>
      <Rooms></Rooms>
    </div>
  );
};

export default Home;
