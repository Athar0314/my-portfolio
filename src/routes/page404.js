import React from "react";
import "./page404.css";
function page404() {
  return (
    <div>
      <div className="oops">
        <div className="error-text">
          <img
            src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg"
            alt="404"
          />
          <span>Error 404</span>
          <p className="p-a">Page Not Found! ....</p>
          <p className="p-b">You will be redirected ....</p>
        </div>
      </div>
    </div>
  );
}

export default page404;
