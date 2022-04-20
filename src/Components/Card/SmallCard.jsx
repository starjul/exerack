import React from "react";
import styled from "styled-components";
import { Card } from "../GlobalComponent";
import { goalIcon, goalUnit } from "./GoalsIcon";

const CardContainer = styled(Card)`
  max-width: 160px;
  width: 26%;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
  padding: 8px;

  & .gt-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
  }

  & .gt-content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex: 2;

    & h2 {
      margin: 0 ;
      margin-bottom: 0.2rem;
      font-weight: 500;
    }

    & p {
      font-size: 14px;
      margin: 0;
    }
  }

  @media only screen and (max-width: 820px) {
    /* max-width: 94px; */

    & h2 {
      font-size: 18px;
    }
    & p {
      font-size: 10px;
    }
  }
`;

const SmallCard = ({ goalType, goalSetting }) => {
  return (
    <CardContainer>
      <div className="gt-container">{goalIcon({ goalType })}</div>
      <div className="gt-content">
        <h2>{goalSetting}</h2>
        <div>{goalUnit({ goalType })}</div>
      </div>
    </CardContainer>
  );
};

export default SmallCard;
