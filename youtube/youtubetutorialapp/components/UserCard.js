import React from "react";
import Link from "next/link";

export const UserCard = ({ users }) => {
  return (
    <div className="container">
      <h2>All users</h2>
      {users.map((user) => {
        return (
          <div className="grid" key={user.id}>
            <Link href={`/user/${user.id}`}>
              <a>{user.name}</a>
            </Link>
          </div>
        );
      })}
      <style jsx>
        {`
          .grid {
            width: 300px;
            margin-top: 5px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-wrap: wrap;
            max-width: 800px;
            border-bottom: 2px solid grey;
          }
          .container {
            border: 2px solid grey;
            padding: 10px;
            width: 320px;
          }
        `}
      </style>
    </div>
  );
};
