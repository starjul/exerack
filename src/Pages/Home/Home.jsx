import React, { useState } from "react";
import styled from "styled-components";
import Muiform from "../../Components/Form/MuiForm";
import { Container, Popup } from "../../Components/GlobalComponent";
import Navbar from "../../Components/Navbar/Navbar";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import Record from "../../Components/Reacord/Record";
import TodayCard from "../../Components/TodayCard/TodayCard";

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
  const [showForm, setShowForm] = useState(false);

  console.log(showForm);

  const handleShow = (event) => {
    setShowForm(!showForm);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <>
      <Navbar />
      <HomeContain margin="30px 48px 0 48px">
        <div className="profile-shortcut">
          <ProfileCard name="Starjul" />
          <TodayCard />
        </div>
        <div className="record-content">
          <Record onClick={handleShow} />
        </div>
      </HomeContain>
      <Popup open={showForm}>
        <Muiform />
      </Popup>
    </>
  );
};

export default Home;
