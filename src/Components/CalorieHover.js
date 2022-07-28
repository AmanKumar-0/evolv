import React from "react";

function CalorieHover({
  proteinConsumed,
  carbConsumed,
  fatConsumed,
  proteinTarget,
  carbTarget,
  fatTarget,
}) {
  return (
    <div>
      <div className="flex">
        <div className="piechart_row">
          <h5>Protien </h5>

          <div
            style={{
              maxWidth: 208,
              width: proteinTarget,
              backgroundColor: "rgba(16, 19, 23, 1)",
              borderRadius: 8,
              height: 16,
              display: "flex",
              flexDirection: "row-reverse",
              justifyContent: "left",
              lineHeight: 0.7,
            }}
          >
            {proteinTarget}
            <div
              style={{
                width: proteinConsumed,
                backgroundColor: "rgba(244, 92, 132, 1)",
                borderRadius: 8,
              }}
            >
              {proteinConsumed}
            </div>
          </div>
        </div>
        <div className="piechart_row">
          <h5>Carbs</h5>
          <div
            style={{
              maxWidth: 208,
              width: carbTarget,
              backgroundColor: "rgba(16, 19, 23, 1)",
              borderRadius: 8,
              height: 16,
              display: "flex",
              flexDirection: "row-reverse",
              justifyContent: "left",
              lineHeight: 0.7,
            }}
          >
            {carbTarget}
            <div
              style={{
                width: carbConsumed,
                backgroundColor: "rgba(3, 198, 250, 1)",
                borderRadius: 8,
              }}
            >
              {carbConsumed}
            </div>
          </div>
        </div>
        <div className="piechart_row">
          <h5>Fats</h5>
          <div
            style={{
              maxWidth: 208,
              width: fatTarget,
              backgroundColor: "rgba(16, 19, 23, 1)",
              borderRadius: 8,
              height: 16,

              display: "flex",
              flexDirection: "row-reverse",
              justifyContent: "left",
              lineHeight: 0.7,
            }}
          >
            {fatTarget}
            <div
              style={{
                width: fatConsumed,
                backgroundColor: "rgba(240, 197, 15, 1)",
                borderRadius: 8,
              }}
            >
              {fatConsumed}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalorieHover;
