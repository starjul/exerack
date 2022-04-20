import React from "react";
import { Card } from "../GlobalComponent";
import styled from "styled-components";
import AvatarProfile from "../AvatarProfile/AvatarProfile";
import SmallCard from "../Card/SmallCard";
import { Link } from "react-router-dom";

const CardContain = styled(Card)`
  width: 100%;
  max-width: 600px;
  flex-direction: column;
  border-radius: 10px;

  & .avt-container {
    display: flex;
    flex: 1;
    justify-content: center;
    height: max-content;
    align-self: flex-end;
    margin: 0.4rem 0 0.5rem 0;
  }

  & .data-container {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 0.4rem 0 0 0;

    & .flex p {
      margin-right: 0.5rem;
    }

    & .flex h1 {
      margin: 2rem 0 0.5rem 0;
    }

    & .wh{
      display: flex;

      & h4{
        align-self: center;
        margin: 0.5rem;

      }
      
    }
  }

  & .smallCard-container {
    display: flex;
    justify-content: space-evenly;
  }

  & .myGoal {
    border-bottom: 1.6px solid #e8e8e8;
    margin: 0 1rem 1rem 0.8rem;
    & p{
      text-align: start;
      margin: 0 0 0.3rem 0.5rem;
    }
  }

  @media only screen and (max-width: 820px) {
    width: 100%;
  }
`;

const ProfileCard = () => {
  return (
    <CardContain>
      <div className="flex">
        <Link to="/profile" className="avt-container">
          <AvatarProfile />
        </Link>
        <div className="data-container">
          <div className="flex">
            <p>Hi,</p>
            <h1>Julaluk P.</h1>
          </div>
          <div className="wh">
            <h4>Weight:</h4>
            <p>52</p>
          </div>
          <div className="wh">
            <h4>Height:</h4>
            <p>166</p>
          </div>
        </div>
      </div>
      <div>
        <div className="myGoal">
          <p>My Goals</p>
        </div>
        <div className="smallCard-container">
          <SmallCard goalType={"Steps"}  goalSetting="2000"/>
          <SmallCard goalType={"Calories"}  goalSetting="1000"/>
          <SmallCard goalType={"Sleep"} goalSetting="8" />
        </div>
      </div>
    </CardContain>
  );
};

export default ProfileCard;
