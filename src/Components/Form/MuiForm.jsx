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
import {
  postActivity,
  putActivityById,
  deleteActivityById,
} from "../../Services/Activity";

// Styled Component
const FormContainer = styled(Container)`
  display: flex;
  flex-direction: column !important;
  width: 94%;
  max-width: 540px;
  min-width: 500px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  padding-bottom: 2rem;
  z-index: 1000;

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
  { value: "sleep", label: "sleep" },
];

export default function Muiform({ title, path, type, onClose, data, id }) {
  const [activityType, setActivityType] = useState("");
  const [value, setValue] = React.useState(new Date());
  const [minutesDuration, setMintuesDuration] = useState(0);
  const [caloriesData, setCaloriesData] = useState(0);
  const [activityDescription, setActivityDescription] = useState("");

  useEffect(() => {
    setValue(new Date())
    if (type === "edit") {
      setActivityType(data.activity_type);
      setValue(data.date);
      setMintuesDuration(data.duration);
      setCaloriesData(data.calories);
      setActivityDescription(data.description);
    }
    return () => {
      setActivityType("");
      setValue(new Date());
      setMintuesDuration(0);
      setCaloriesData(0);
      setActivityDescription("");
    };
  }, [type, data]);

  const handleActivityType = (event) => {
    setActivityType(event.target.value);
    console.log(event.target.value);
  };

  const handleTimeChange = (newValue) => {
    setValue(newValue);
  };

  const handleCalChange = (e) => {
    setCaloriesData(e.target.value);
  };

  const handleDuration = (e) => {
    setMintuesDuration(e.target.value);
  };

  const handleDescription = (e) => {
    setActivityDescription(e.target.value);
  };

  const handleSave = async (e) => {
    if (type === "add") {
      await postActivity({
        activity_type: activityType,
        date: value,
        duration: minutesDuration,
        calories: caloriesData,
        description: activityDescription,
      });
    } else if (type === "edit") {
      await putActivityById(id, {
        activity_type: activityType,
        date: value,
        duration: minutesDuration,
        calories: caloriesData,
        description: activityDescription,
      });
    }
    onClose(true);
  };

  const handleDelete = async (e) => {
    await deleteActivityById(id);
    onClose(true);
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
            <button className="closeIcon">
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
        <Container flexDirection="column" margin="1rem 2rem 1rem 2rem">
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
          <div>
            <TextField
              label="Duration"
              id="duration-minutes"
              onChange={handleDuration}
              required
              value={minutesDuration}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">min</InputAdornment>
                ),
              }}
            />
          </div>
          <div>
            <TextField
              label="Calories"
              id="calories"
              onChange={handleCalChange}
              value={caloriesData}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">cal</InputAdornment>
                ),
              }}
            />
          </div>
          <div>
            <TextField
              id="decription"
              label="Description"
              multiline
              rows={2}
              onChange={handleDescription}
              value={activityDescription}
            />
          </div>
        </Container>
      </Box>
      <Container margin="0">
        <Button className="save" onClick={handleSave}>
          Save
        </Button>
        {type !== "add" && (
          <Button
            className="save"
            backgroundColor="lightgray"
            onClick={handleDelete}
          >
            Delete
          </Button>
        )}
      </Container>
    </FormContainer>
  );
}
