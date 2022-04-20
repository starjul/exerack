import React, { useState } from "react";
import styled from "styled-components";
import { Container, Button, Popup } from "../GlobalComponent";
import { Link } from "react-router-dom";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RecordCard from "../RecordCard/RecordCard";
import { getActivity } from "../../Services/Activity";
import Muiform from "../Form/MuiForm";

const RecordContainer = styled(Container)`
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  margin: 0;
  border: 1px solid #fff;
  border-radius: 10px;
  justify-content: space-between;
  height: min-content;
  padding: 0 0 18px 0;

  & .marginRecord {
    margin: 30px 30px 10px 30px;
    width: -webkit-fill-available;

    & .view-more p {
      color: #888888;
      margin: 1rem 0 0 0;
      border-bottom: 1px solid #888888;
      width: fit-content;
      font-size: 14px;
    }
  }

  & header.flex {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    & div {
      display: flex;
      align-items: center;
    }

    & h2 {
      margin: 0;
    }

    & p {
      margin: 4px 0 0 6px;
      font-size: 12px;
    }
  }

  & .record-card-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 56vh;
    width: 100%;
    max-width: 600px;
    overflow-y: scroll;
    /* Hide scrollbar */
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    overflow-y: scroll;
    text-align: center;
  }
  /* Hide scrollbar for chrome */
  & .record-card-container::-webkit-scrollbar {
    display: none;
  }

  & .record-form {
    display: ${(props) => (props.open ? "flex" : "none")};
  }
`;

const RecordButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;

  & span {
    margin: 0 4px;
    font-weight: 500;
  }
`;

const TitleRecord = styled.div`
  display: flex;
  width: 100%;
  margin: 10px 0;
  border-bottom: 1px solid lightgray;

  & p {
    font-weight: 400;
  }

  & p:nth-of-type(1) {
    flex: 2;
    text-align: start;
    margin-left: 10px;
  }

  & p:nth-of-type(2) {
    flex: 1;
  }

  & p:nth-of-type(3) {
    flex: 1;
  }
`;

const Record = ({ onClick, path, data, reloadRecord }) => {
  const [recordData, setRecordData] = useState([]);
  const [editData, setEditData] = useState({});
  const [showEditData, setShowEditData] = useState(false);
  const [showForm, setShowForm] = useState(false);

  return (
    <RecordContainer>
      <div className="marginRecord">
        <header className="flex">
          <div>
            <h2>History</h2>
            {/* <p>(1W)</p> */}
          </div>
          <RecordButton height="40px" width="120px">
            <AddCircleIcon fontSize="small" />
            <span
              onClick={() => {
                setShowForm(!showForm);
              }}
            >
              Add
            </span>
          </RecordButton>
        </header>
        <TitleRecord>
          <p>Activity</p>
          <p>Duration</p>
          <p>Calories</p>
        </TitleRecord>
        <div className="record-card-container">
          {data.map((res, index) => (
            <RecordCard
              activity_type={res.activity_type}
              calories={res.calories}
              date={res.date}
              duration={res.duration}
              id={res._id}
              description={res.description}
              reloadRecord={reloadRecord}
            />
          ))}
        </div>
        <div className="record-form"></div>
        {path !== "history" && (
          <Link to="/history" className="view-more">
            <center>
              <p>View more</p>
            </center>
          </Link>
        )}
      </div>
      <Popup open={showForm}>
        <Muiform
          title={"Create Activity"}
          type="add"
          onClose={(e) => {
            setShowForm(false);
            reloadRecord();
          }}
        />
      </Popup>
    </RecordContainer>
  );
};

export default Record;
