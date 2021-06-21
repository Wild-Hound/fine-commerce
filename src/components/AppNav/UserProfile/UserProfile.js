import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import "antd/dist/antd.css";
import { Avatar, Popover } from "antd";
import { UserOutlined } from "@ant-design/icons";

function UserProfile({ pushHistory, isAuth, userRes }) {
  const [popState, setPopState] = useState(false);

  const handleVisibleChange = (visible) => {
    isAuth && setPopState(visible);
  };

  const popupContent = (
    <div className="UpContainer">
      <h3 className="UpHeader">
        {userRes.userName ? userRes.userName : userRes.userEmail}
      </h3>
      <hr />
      <ul className="UpList">
        <li
          onClick={(e) => {
            pushHistory("profile/user");
          }}
        >
          Profile
        </li>
        <li
          onClick={(e) => {
            pushHistory("admin/accounts");
          }}
        >
          Admin
        </li>
        <li className="UpLogOut">Log Out</li>
      </ul>
    </div>
  );

  return (
    <Popover
      content={popupContent}
      trigger="click"
      visible={popState}
      onVisibleChange={handleVisibleChange}
      id="profilePopup"
    >
      {/* //determines weather to redirect the user to login page based on isAuth state */}
      <Button
        id="LoginBtn"
        onClick={
          isAuth
            ? null
            : (e) => {
                pushHistory("profile/user");
              }
        }
      >
        {
          //this is to change login img after user is authenticated
          // double nested ternary operator is used here
          isAuth ? (
            userRes.userImg ? (
              <Avatar src={userRes.userImg} />
            ) : (
              <Avatar icon={<UserOutlined />} />
            )
          ) : (
            <Avatar icon={<UserOutlined />} />
          )
        }
      </Button>
    </Popover>
  );
}

export default UserProfile;
