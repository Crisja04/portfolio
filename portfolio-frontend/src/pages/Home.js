import React from "react";
import Loading from "../components/Loading";
import Projects from "../components/Projects";
const Home = () => {
  const [loading, setLoading] = React.useState(true);

  // Placeholder and setup for future data request implementation
  function DataRequest() {
    // Implement data request
    return true;
  }
  React.useEffect(() => {
    if (DataRequest()) {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <Loading />;
  }

  return <Projects />;
};
export default Home;
