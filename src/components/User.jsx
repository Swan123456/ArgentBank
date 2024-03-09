import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFirstName } from "../redux/actions/user.actions.jsx";
import { isValidName } from "../utils/regex.jsx";
import "../sass/components/_userProfile.scss";

function User() {
  /* Updates user data on profile page from state redux */
  const token = useSelector((state) => state.auth.token);
  const userData = useSelector((state) => state.user.userData);
  /* Manages the appearance of the username modification form */
  const [display, setDisplay] = useState(true);
  /* Get username */
  const [firstName, setFirstName] = useState("");
  /* Handle error message */
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();

  /* Asynchronous username update function */
  const handleSubmitUsername = async (event) => {
    event.preventDefault();
    if (!isValidName(firstName)) {
      setErrorMessage("Invalid firstName");
      return;
    } else {
      setErrorMessage("");
    }
    try {
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ firstName }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        const updatedFirstName = data.body.firstName;
        dispatch(updateFirstName(updatedFirstName));
        setDisplay(!display);

      } else {
        console.log("Invalid Fields");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="header">
      {display ? (
        <div>
          <h2>
            Welcome back
            <br />
            {userData.firstName} !
          </h2>
          <button className="edit-button" onClick={() => setDisplay(!display)}>
            Edit Name
          </button>
        </div>
      ) : (
        <div>
          <h2>Edit user info</h2>
          <form>
            <div className="edit-input">
              <label htmlFor="firstName">First name:</label>
              <input
                type="text"
                id="firstName"
                defaultValue={userData.firstname}
                onChange={(event) => setFirstName(event.target.value)}
              />
            </div>
            <div className="buttons">
              <button
                className="edit-username-button"
                onClick={handleSubmitUsername}
              >
                Save
              </button>
              <button
                className="edit-username-button"
                onClick={() => setDisplay(!display)}
              >
                Cancel
              </button>
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </form>
        </div>
      )}
    </div>
  );
}

export default User;
