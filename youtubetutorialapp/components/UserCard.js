import React from "react";

export const UserCard = ({ users }) => {
  return (
    <div>
      <h2>All users</h2>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h2>
              -{user.name}-{user.email}
            </h2>
          </div>
        );
      })}
    </div>
  );
};
