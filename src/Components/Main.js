import { useEffect, useState } from "react";
import users from "../users.json";
import "./Main.css";
import Row from "./Row";

function Main() {
  const [userData, setUserData] = useState(users);

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  const stateUpdate = (id, nutrition_target = false) => {
    if (nutrition_target) {
      const idx = userData.findIndex((curr) => curr.userId === id);
      const newData = [...userData];
      newData[idx].calorieTarget = newData[idx].calorieTarget + 100;
      setUserData(newData);
    } else {
      const idx = userData.findIndex((curr) => curr.userId === id);
      const newData = [...userData];
      newData[idx].stepsTarget = newData[idx].stepsTarget + 500;
      setUserData(newData);
    }
  };

  const stateUpdate2 = (id, nutrition_target = false) => {
    if (nutrition_target) {
      const idx = userData.findIndex((curr) => curr.userId === id);
      const newData = [...userData];
      newData[idx].calorieTarget = newData[idx].calorieTarget - 100;
      setUserData(newData);
    } else {
      const idx = userData.findIndex((curr) => curr.userId === id);
      const newData = [...userData];
      newData[idx].stepsTarget = newData[idx].stepsTarget - 500;
      setUserData(newData);
    }
  };

  return (
    <div className="app">
      <div className="app_page">
        <div className="row_header">
          <h1>Steps</h1>
          <h1>Workout</h1>
          <h1>Nurition</h1>
        </div>
        {userData.map((data) => (
          <Row
            calorieIntake={data.calorieIntake}
            calorieTarget={data.calorieTarget}
            carbConsumed={data.carbConsumed}
            carbTarget={data.carbTarget}
            email={data.email}
            fatConsumed={data.fatConsumed}
            fatTarget={data.fatTarget}
            name={data.name}
            performedDate={data.performedDate}
            picture={data.picture}
            proteinConsumed={data.proteinConsumed}
            proteinTarget={data.proteinTarget}
            scheduledDate={data.scheduledDate}
            stepsTarget={data.stepsTarget}
            stepsWalked={data.stepsWalked}
            userId={data.userId}
            key={data.userId}
            feedback={data.feedback}
            updateData={(id, nutrition_target = false) => {
              if (nutrition_target) {
                stateUpdate(id, true);
              } else {
                stateUpdate(id);
              }
            }}
            updateData2={(id, nutrition_target = false) => {
              if (nutrition_target) {
                stateUpdate2(id, true);
              } else {
                stateUpdate2(id);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Main;
