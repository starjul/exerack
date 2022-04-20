import React from "react";
import { Card } from "../GlobalComponent";
import styled from "styled-components";
import SmallCard from "../Card/SmallCard";

const CardContain = styled(Card)`
  width: 100%;
  max-width: 600px;
  flex-direction: column;
  border-radius: 10px;

  & h2 {
      text-align: left;
      margin: 0.75rem 1rem;
  }

  & h2:first-child{
      margin-top: 1.5rem;
  }

  & .tw{
      margin-top: 0;
  }

  & .smallCard-container {
    display: flex;
    justify-content: space-evenly;
  }

  @media only screen and (max-width: 820px) {
    width: 100%;
  }
`;

const TodayCard = () => {
  return (
    <CardContain>
      <h2>Today</h2>
      <div className="smallCard-container">
        <SmallCard goalType={"Steps"} />
        <SmallCard goalType={"Calories"} />
        <SmallCard goalType={"Sleep"} />
      </div>
      <h2 className="tw">This week</h2>
      <div className="smallCard-container">
        <SmallCard goalType={"Steps"} />
        <SmallCard goalType={"Calories"} />
        <SmallCard goalType={"Sleep"} />
      </div>
    </CardContain>
  );
};

export default TodayCard;
