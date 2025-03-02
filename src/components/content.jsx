import React from "react";
import "../styles/content.css";

const content = () => {
  return (
    <section>
      <div className="container-top-text">
        <h1>Create a Directory <br /> Website <span className="resaltxt">with No-Code</span></h1>
        <p>
          Add listings, custom pages, categories without any technical skills.
          Get up and running in minutes, with everything you need to create a
          directory website.
        </p>
        <div className="container-btn">
            <button>Create your Directory</button>
            <span className="dayTrial">*7 days free trial. Cancel anytime.</span>
        </div>
      </div>
    </section>
  );
};

export default content;
