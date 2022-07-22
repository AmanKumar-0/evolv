import { useEffect, useState } from "react";
import users from "./users.json";
import "./App.css";
import Row from "./Row";

function App() {
  const [userData, setUserData] = useState([]);

  const data = async () => {
    try {
      const searchData = users;
      console.log(searchData);
      setUserData(searchData);
      console.log(userData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    data();
  }, [userData]);

  return (
    <div className="app">
      <Row userData={userData} />
    </div>
  );
}

export default App;
