import React from "react";

function Row({ userData }) {
  return (
    <div>
      {userData.map((userData) => {
        return (
          <div key={userData.userId}>
            {userData.name}
            <div>{userData.email}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Row;
