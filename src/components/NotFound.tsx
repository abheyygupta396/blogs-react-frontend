import React from "react";

export default function DataNotFound() {
  return (
    <React.Fragment>
      <div className="card no-data-adjustment">
        <div className="card-body">
          <div className="card-btn">
            <a href="/new-post" className="btn text-dark btn-outline-light create-post">
              Start Creating New ...
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
