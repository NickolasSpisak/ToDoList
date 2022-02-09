import React, { useEffect } from "react";
import Main from "./componants/mainComponant";
import "./App.css";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
