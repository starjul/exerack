import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Muiform from "../../Components/Form/MuiForm";
import { Container, Popup } from "../../Components/GlobalComponent";
import Navbar from "../../Components/Navbar/Navbar";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import Record from "../../Components/Reacord/Record";
import TodayCard from "../../Components/TodayCard/TodayCard";
import { getActivity } from "../../Services/Activity";

const HomeContain = styled(Container)`
  & .profile-shortcut {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 2rem;
    flex: 1;
  }

  & .record-content {
    flex: 1;
    display: flex;
    justify-content: flex-start;
  }

  @media only screen and (max-width: 820px) {
    flex-direction: column;
    align-self: center;
    margin: 40px 20px;
    text-align: -webkit-center;

    & .profile-shortcut {
      align-items: center;
      margin-right: 0;
    }
    & .record-content {
      justify-content: center;
    }
  }
`;

const Home = () => {
  const [activity, setActivity] = useState([]);
  const [reloadRecord, setReloadRecord] = useState(false);

  useEffect(async () => {
    const activityData = await getActivity(14);
    setActivity(activityData.data);
    console.log("act", activityData);
  }, [reloadRecord]);

  return (
    <>
      <Navbar />
      <HomeContain margin="30px 48px 0 48px">
        <div className="profile-shortcut">
          <ProfileCard name="Starjul" />
          <TodayCard />
        </div>
        <div className="record-content">
          <Record
            reloadRecord={() => setReloadRecord(!reloadRecord)}
            data={activity}
            
          />
        </div>
      </HomeContain>
      
    </>
  );
};

export default Home;
