import React, { useState } from "react";
// import styled from "styled-components";
import { Card, Popup } from "../GlobalComponent";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import "./RecordCard.css";
import { iconSwitch } from "./CheckIcon";
import moment from "moment";
import Muiform from "../Form/MuiForm";

const RecordCard = ({
  activity_type,
  calories,
  date,
  duration,
  description,
  id,
  reloadRecord,
}) => {
  console.log("id",id)
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Card
        className="historyCard"
        flexDirection="column"
        onClick={() => {
          setShowForm(!showForm);
        }}
      >
        <div className="flex">
          <div className="activity-type">
            <div className="activityLogo">{iconSwitch({ activity_type })}</div>
            <p>{activity_type}</p>
          </div>
          <div className="duration">
            <p>{duration} min</p>
          </div>
          <div className="calories">
            <LocalFireDepartmentIcon fontSize="small" />
            <p>{calories} cal</p>
          </div>
        </div>
        <p className="dateRecord">
          {moment(date).format("DD-MM-YYYY HH:mm:ss")}
        </p>
      </Card>
      <Popup open={showForm}>
        <Muiform
          title={"Create Activity"}
          type="edit"
          id={id}
          data={{ activity_type, calories, date, duration, description }}
          onClose={(e) => {
            setShowForm(false);
            reloadRecord();
          }}
        />
      </Popup>
    </>
  );
};

export default RecordCard;
