import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import users from "../users.json";
import "./Nutrition.css";
function Nutrition() {
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
    <div className="nutrition">
      <h1>Nutrition</h1>
      {userData.map((user, index) => (
        <div className="nutrition_details">
          <h5>Protein: {user.proteinConsumed}</h5>
          <h5>Fat: {user.fatConsumed}</h5>
          <h5>Carbs: {user.carbConsumed}</h5>
        </div>
      ))}
    </div>
  );
}

export default Nutrition;
