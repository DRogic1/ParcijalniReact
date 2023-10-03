import React from "react";

const Repos = ({ user, repos }) => {
  return (
    <div>
      <div>
        <img
          src={user.avatar_url}
          alt="User's profile image."
          width={"300px"}
          height={"300px"}
        />
        <h1>{user.name}</h1>
      </div>
      <div>
        <h3>
          <b>BIO:</b> {user.bio}
        </h3>
        <h3>
          <b>LOCATION:</b> {user.location}
        </h3>
        <h3>
          <b>REPOSITORIES:</b>
        </h3>
        <ul>
          {repos.map((repo) => {
            return <li>{repo.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Repos;
