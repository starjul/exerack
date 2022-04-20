import React, { useState, useEffect } from "react";
import { Container } from "../../Components/GlobalComponent";
import Navbar from "../../Components/Navbar/Navbar";
import Record from "../../Components/Reacord/Record";
import { getActivity } from "../../Services/Activity";

const Histories = () => {
  const [activity, setActivity] = useState([]);
  const [reloadRecord, setReloadRecord] = useState(false);

  useEffect(async () => {
    const activityData = await getActivity(14);
    setActivity(activityData.data);
    console.log("act", activityData);
  }, [reloadRecord]);
  return (
    <div>
      <Navbar />
      <Container justifyContent="center" margin="3rem 24px">
        <Record
          path="history"
          data={activity}
          reloadRecord={() => setReloadRecord(!reloadRecord)}
        />
      </Container>
    </div>
  );
};

export default Histories;
