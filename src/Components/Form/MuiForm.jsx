import * as React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import MenuItem from "@mui/material/MenuItem";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import InputAdornment from "@mui/material/InputAdornment";
import { Button, Container } from "../GlobalComponent";
import EditIcon from "@mui/icons-material/Edit";

// Styled Component
const FormContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  width: 94%;
  max-width: 560px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  padding-bottom: 2rem;

  &:hover {
    box-shadow: 0 8px 10px 0 rgba(0, 0, 0, 0.2);
  }

  & .form-header {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin: 0.5rem 2rem auto 2rem;
    align-items: center;

    & .closeIcon {
      border: none;
      background: none;
      margin-top: 10px;
      align-self: flex-end;
    }

    & .header {
      display: flex;
      width: 90%;
      justify-content: space-between;

      & .editICon {
        display: ${(props) =>
          props.title === "Create Activity" ? "none" : "flex"};
      }
    }
  }

  & .save {
    margin-top: 0rem;
    align-self: center;
  }
`;

const EditButton = styled(Button)`
  display: flex;
  align-self: center;
  height: fit-content;
  padding: 5px 4px 4px 0;
  margin-left: 10px;
  width: 70px;
  background: none;
  color: #505050;

  & p {
    margin: 0;
    font-size: 14px;
    font-weight: 500;
  }
`;

const DurationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 84%;
  margin: 0;
  align-self: center;

  & p {
    font-size: 14px;
    color: #7a7a7a;
    text-align: start;
    margin: 0.1rem 0.5rem 0.2rem 0.5rem;
  }

  & .flex {
    justify-content: space-between;
  }
`;

const activities = [
  { value: "running", label: "running" },
  { value: "walking", label: "walking" },
  { value: "bicycle riding", label: "bicycle riding" },
  { value: "swimming", label: "swimming" },
  { value: "hiking", label: "hiking" },
  { value: "aerobics", label: "aerobics" },
  { value: "treadmill", label: "treadmill" },
  { value: "yoga", label: "yoga" },
  { value: "rope skipping", label: "rope skipping" },
];

export default function Muiform({ title, path}) {
  const [activityType, setActivityType] = useState("");
  const [value, setValue] = React.useState(new Date());
  const [Hourduration, setHourDuration] = useState(0);
  const [minutesDuration, setMintuesDuration] = useState(0);
  const [caloriesData, setCaloriesData] = useState(0);
  const [activityDescription, setActivityDescription] = useState("");

  const handleActivityType = (event) => {
    setActivityType(event.target.value);
    console.log(event.target.value);
  };

  const handleTimeChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <FormContainer>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "80%" },
        }}
        noValidate
        autoComplete="off"
      >
        <div className="form-header">
        {path !== "activities" && ( 
          <button className="closeIcon"  >
            <CloseIcon fontSize="medium" />
          </button>
        )}
          <div className="header">
            <h2>{title}</h2>
            {title === "Record" && (
              <EditButton className="editIcon">
                <EditIcon fontSize="small" />
                <p>Edit</p>
              </EditButton>
            )}
          </div>
        </div>
        <Container flexDirextion="column" margin="1rem 2rem 1rem 2rem">
          <div>
            <TextField
              id="activity-type"
              select
              label="Activity Type"
              value={activityType}
              onChange={handleActivityType}
              required
            >
              {activities.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                id="date-time-picker"
                label="Date & Time"
                value={value}
                onChange={handleTimeChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
          <DurationContainer>
            <p>Duration</p>
            <div className="flex">
              <TextField
                label="Hour"
                id="duration-hour"
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">hr</InputAdornment>
                  ),
                }}
              />
              <TextField
                label="Minutes"
                id="duration-minutes"
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">m</InputAdornment>
                  ),
                }}
              />
            </div>
          </DurationContainer>
          <div>
            <TextField
              label="Calories"
              id="calories"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">cal</InputAdornment>
                ),
              }}
            />
          </div>
          <div>
            <TextField id="decription" label="Description" multiline rows={2} />
          </div>
        </Container>
      </Box>
      {title !== "Record" && <Button className="save">Save</Button>}
    </FormContainer>
  );
}
