import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

const Body = () => {
  const { user } = useAuth0();
  const [val, setValue] = useState("");
  // console.log(mail);

  // handleChange(event) {
  //   this.setState({value: event.target.value});
  // }

  const handleSubmit = (e) => {
    alert("An essay was submitted: " + val);
    e.preventDefault();
    // let num = parseInt(val)
    // user.phone_number = val
    // console.log(mail);
    // let val = e.target.value
    // setValue(e.target.mail);
    // setValue(event.target.value)
  };

  return (
    <div style={{ height: "100vh", backgroundColor: "f1f1f1" }}>
      <div className="container">
        <p className="userInfo" id="userInfo1">
          Name: {user ? user.name : "hello Stranger"}
        </p>
        <p className="userInfo" id="userInfo2">
          Given Name: {user ? user.given_name : "hello Stranger"}
        </p>
        <p className="userInfo" id="userInfo3">
          Family Name: {user ? user.family_name : "hello Stranger"}
        </p>
        <p className="userInfo" id="userInfo4">
          Email: {user ? user.email : "hello Stranger@strange.com"}
        </p>
        <p className="userInfo" id="userInfo5">
          Sub: {user ? user.sub : "Strange!"}
        </p>
        <p className="userInfo" id="userInfo5">
          Mobile:{" "}
          {user
            ? user.phone_number
              ? user.phone_number
              : "Not Registered, Strange!"
            : "Strange!"}
        </p>
        <p className="userInfo" id="userInfo5">
          <form onSubmit={handleSubmit}>
            <label>
              Enter your name:
              <input
                type="text"
                value={val}
                onChange={(e) => setValue(e.target.value)}
              />
            </label>
            <input type="submit" />
          </form>
        </p>
      </div>
    </div>
  );
};

export default Body;
