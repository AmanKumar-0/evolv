import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import users from "../users.json";
import "./Workout.css";
function Workout() {
  const [userData, setUserData] = useState(users);
  const { userId } = useParams();

  const fetchData = () => {
    const newData = userData.filter((userData) => userId == userData.userId);
    setUserData(newData);
  };

  useEffect(() => {
    fetchData();
  }, [userId]);

  return (
    <div className="Workout">
      <h1>Workout</h1>
      {userData.map((user) => (
        <div className="Workout_details">
          <h5>Performed-Date: {user.performedDate}</h5>
          <h5>Scheduled-Date: {user.scheduledDate}</h5>
        </div>
      ))}
    </div>
  );
}

export default Workout;
