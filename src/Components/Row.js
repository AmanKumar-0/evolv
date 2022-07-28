import React, { useState } from "react";
import "./Row.css";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { PieChart } from "react-minimal-pie-chart";
import { Link } from "react-router-dom";
import CalorieHover from "./CalorieHover";
import BellIcon from "react-bell-icon";

function Row({
  calorieIntake,
  feedback,
  calorieTarget,
  carbConsumed,
  carbTarget,
  email,
  fatConsumed,
  fatTarget,
  name,
  performedDate,
  picture,
  proteinConsumed,
  proteinTarget,
  scheduledDate,
  stepsTarget,
  stepsWalked,
  userId,
  updateData,
  updateData2,
}) {
  const needDominantBaseLineFix = true;
  const [date, setDate] = useState(new Date());
  const newDate = new Date(scheduledDate);

  const handleClick = (idx, nutrition_target = false) => {
    if (nutrition_target) {
      updateData(idx, true);
    } else {
      updateData(idx);
    }
  };

  const handleClick2 = (idx, nutrition_target = false) => {
    if (nutrition_target) {
      updateData2(idx, true);
    } else {
      updateData2(idx);
    }
  };

  return (
    <div className="row">
      <div className="row_data">
        <div className="row_details">
          <img src={picture} />
          <div className="row_name">
            <h5>{name}</h5>
            <h6>{email}</h6>
          </div>
          <div className="row_steps">
            <CircularProgressbarWithChildren
              value={(stepsWalked / stepsTarget) * 100}
              text={
                <tspan
                  dx={needDominantBaseLineFix ? -15 : 0}
                  dy={needDominantBaseLineFix ? -10 : 0}
                >
                  {stepsWalked}
                </tspan>
              }
              styles={buildStyles({
                strokeLinecap: "round",
                textSize: "16px",
                pathTransition: "none",
                pathColor: `rgba(127, 209, 140, 1), ${
                  (stepsWalked / stepsTarget) * 100
                })`,
                textColor: "#FFFFFF",
                trailColor: "#d6d6d6",
                backgroundColor: "#3e98c7",
              })}
            >
              <div className="row_stepsWalked">Walked</div>
            </CircularProgressbarWithChildren>
          </div>
          <div className="row_target">
            <button
              className="row__target__button"
              onClick={() => handleClick(userId)}
            >
              +
            </button>
            <h6>{stepsTarget}</h6>
            <h5>Target</h5>
            <button
              className="row__target__button"
              onClick={() => handleClick2(userId)}
            >
              -
            </button>
          </div>
          <div className="row_date">
            <div className="performedDate">
              <h3>{performedDate}</h3>
            </div>
            <div
              className={
                "scheduledDate" && feedback
                  ? newDate <= date
                    ? "red"
                    : "black butt"
                  : "black butt"
              }
            >
              <h3>{scheduledDate}</h3>
            </div>
          </div>
          <Link to={`${userId}/workout`} key={userId}>
            <div className="row_workout__button">
              <button
                className={
                  feedback
                    ? newDate <= date
                      ? "red"
                      : "black butt"
                    : "black butt"
                }
              >
                {feedback ? (
                  newDate <= date ? (
                    <h1>!</h1>
                  ) : (
                    <h1>{">"}</h1>
                  )
                ) : (
                  <h1>{">"}</h1>
                )}
              </button>
            </div>
          </Link>
          <div className="row_nutrition">
            <PieChart
              data={[
                {
                  title: `${proteinConsumed}`,
                  value: proteinConsumed,
                  color: "rgba(244, 92, 132, 1)",
                },
                {
                  title: `${carbConsumed}`,
                  value: carbConsumed,
                  color: "rgba(3, 198, 250, 1)",
                },
                {
                  title: `${fatConsumed}`,
                  value: fatConsumed,
                  color: "rgba(240, 197, 15, 1)",
                },
              ]}
              lineWidth={35}
              paddingAngle={5}
              labelPosition={50}
            />
          </div>
          <div className="row_piechart_text">
            <div class="piechart__data">
              {calorieIntake}
              <span class="piechart__box">
                <CalorieHover
                  proteinConsumed={proteinConsumed}
                  carbConsumed={carbConsumed}
                  fatConsumed={fatConsumed}
                  proteinTarget={proteinTarget}
                  carbTarget={carbTarget}
                  fatTarget={fatTarget}
                />
              </span>
            </div>
          </div>
          <div className="nutrition_target">
            <button
              className="nutrition_target_button"
              onClick={() => handleClick(userId, true)}
            >
              +
            </button>
            <h6>{calorieTarget}</h6>
            <h5>Target</h5>
            <button
              className="nutrition_target_button"
              onClick={() => handleClick2(userId, true)}
            >
              -
            </button>
          </div>
          <Link to={`${userId}/nutrition`}>
            <button className="nutrition_info">
              <h1>{">"}</h1>
            </button>
          </Link>

          <button
            style={{
              marginRight: 50,
              marginLeft: 50,
              marginTop: 20,
              marginBottom: 20,
              borderRadius: 10,
            }}
          >
            <BellIcon width="40" active={true} animate={true} />
          </button>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default Row;
