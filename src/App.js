import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState();
  const [data, setData] = useState([]);
  const [user, setUser] = useState({
    avatar_url: "",
    name: "",
    location: "",
    bio: "",
  });
  const [repos, setRepos] = useState([]);

  console.log("data---->", data);
  console.log("pokusaj----->", data.avatar_url);
  console.log("user---->", user);

  const copyData = () => {
    user.avatar_url = data.avatar_url;
    user.name = data.name;
    user.location = data.location;
    user.bio = data.bio;
  };

  const handleInput = () => {
    return;
  };

  const HandleUsernameSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.usernameInput.value);
    setUsername(event.target.usernameInput.value);
    const fetchInfo = () => {
      const url = `https://api.github.com/users/${username}`;
      return fetch(url)
        .then((res) => {
          if (res.status === 200) {
            return res.json();
          } else {
            return alert("Wrong input");
          }
        })
        .then((d) => setData(d));
    };
    fetchInfo();

    const fetchRepos = () => {
      const url = `https://api.github.com/users/${username}/repos`;
      return fetch(url)
        .then((res) => res.json())
        .then((d) => setRepos(d));
    };
    fetchRepos();
  };
  copyData();
  console.log("user.....", username);
  console.log("repos.....", repos);

  const handleReset = () => {
    setRepos("");
    setUsername("");
  };

  return (
    <div>
      <form
        className="form-container"
        onSubmit={HandleUsernameSubmit}
      >
        <label>GitHub username:</label>
        <input
          type="text"
          name="usernameInput"
          placeholder="e.g. facebook"
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">GO!</button>
      </form>
      {/* <Repos
        user={user}
        repos={repos}
      /> */}
      {repos.length > 0 ? (
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
          <button onClick={handleReset}>RESET!</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
