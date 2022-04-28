/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import { useState, useEffect } from "react";

// react-router-dom
import { Outlet, useParams } from "react-router-dom";

// codememe2share components
import MemeShare from "codememe2share";

// own components
import Loader from "components/Loader/Loader";
import Navbar from "components/Navbar/Navbar";

// layouts
import IndexSidebar from "layouts/IndexSidebar/IndexSidebar";

// contexts

const Home = () => {
  const { seen } = useParams();

  console.log(seen);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <>
      <Navbar />
      <MemeShare background="random">
        <Loader visible={loading} />
        <IndexSidebar />
        <Outlet />
      </MemeShare>
    </>
  );
};

export default Home;
