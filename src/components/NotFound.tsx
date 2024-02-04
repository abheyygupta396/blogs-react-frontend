import React from "react";
import { useNavigate } from "react-router";

export default function DataNotFound() {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="card no-data-adjustment">
        <div className="card-body">
          <div className="card-btn">
            <span
              onClick={() => navigate("/new-post")}
              className="fs-6 btn text-dark btn-outline-light create-post"
            >
              Start Creating New ...
            </span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
