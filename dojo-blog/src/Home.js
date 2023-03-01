import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    console.log("use effect ran");
  }, []);

  return <div className="home">
      <BlogList blogs={blogs} title="All blogs!" handleDelete={handleDelete}></BlogList>
  </div>;
};

export default Home;
