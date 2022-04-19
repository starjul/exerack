import React from "react";
// import styled from "styled-components";
import { Card } from "../GlobalComponent";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import "./RecordCard.css";
import { iconSwitch } from "./CheckIcon";

const activityType = "treadmill";

const RecordCard = ({onClick}) => {
  return (
    <Card className="historyCard" flexDirection="column" onClick={onClick}>
      <div className="flex">
        <div className="activity-type">
          <div className="activityLogo">{iconSwitch({activityType})}</div>
          <p>Run</p>
        </div>
        <div className="duration">
          <p>50 min</p>
        </div>
        <div className="calories">
          <LocalFireDepartmentIcon fontSize="small" />
          <p>300 cal</p>
        </div>
      </div>
      <p className="dateRecord">17-04-22 17:00-17:50</p>
    </Card>
  );
};

export default RecordCard;
