import React from "react";
import styled, { keyframes } from "styled-components";

const shimmerAnimation = keyframes`
  0% {
    background-position: -1200px 0;
  }
  100% {
    background-position: 1200px 0;
  }
`;

const Card = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px; /* Slightly lifted shadow */
  width: 430px;
  height: auto;
  cursor: pointer;
  transition: box-shadow 0.4s, transform 0.4s;
  margin: 40px auto;
  &:hover {
    transform: translateY(-2px);
  }

  .shimmerBG {
    animation-duration: 2.2s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: ${shimmerAnimation};
    animation-timing-function: linear;
    background: #ddd;
    background: linear-gradient(to right, #f6f6f6 8%, #f0f0f0 18%, #f6f6f6 33%);
    background-size: 1200px 100%;
  }

  .media {
    height: 200px;
  }

  .p-32 {
    padding: 32px;
  }

  .title-line {
    height: 24px;
    width: 100%;
    margin-bottom: 12px;
    border-radius: 20px;
  }

  .content-line {
    height: 8px;
    width: 100%;
    margin-bottom: 16px;
    border-radius: 8px;
  }

  .end {
    width: 40%;
  }

  .m-t-24 {
    margin-top: 24px;
  }
`;

const ShimmerLoaderCard = () => (
  <Card>
    {/* <div className="shimmerBG media"></div> */}
    <div className="p-32">
      <div className="shimmerBG title-line"></div>
      <div className="shimmerBG title-line end"></div>
      <div className="shimmerBG content-line m-t-24"></div>
      <div className="shimmerBG content-line"></div>
      <div className="shimmerBG content-line"></div>
      <div className="shimmerBG content-line"></div>
      <div className="shimmerBG content-line end"></div>
    </div>
  </Card>
);

export default ShimmerLoaderCard;
