import React from "react";
import useAuth from "../../../hooks/useAuth";
import "./TopHeader.css";

const TopHeader = () => {
  const { user } = useAuth();

  return (
    <div className="top">
      <div>
        <h2>First Choice || Fast Delivery</h2>
      </div>
      <div className="user-info">
        <img
          className="border border-danger rounded-circle"
          src={user.photoURL}
          alt=""
        />
        <h2>{user.displayName}</h2>
      </div>
    </div>
  );
};

export default TopHeader;
