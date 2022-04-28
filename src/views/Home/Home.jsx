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
import Navbar from "components/Navbar/Navbar";

// layouts
import BigLoading from "layouts/BigLoading/BigLoading";
import IndexSidebar from "layouts/IndexSidebar/IndexSidebar";

// contexts
import { useIndex } from "context/IndexContext";

const Home = () => {
  const { seen } = useParams();

  const { setIndexState } = useIndex();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setIndexState({ type: "set", to: Number(seen) });
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <>
      <Navbar />
      <MemeShare background="random">
        <BigLoading visible={loading} />
        <IndexSidebar />
        <Outlet />
      </MemeShare>
    </>
  );
};

export default Home;
