import axios from "axios";

const URL = "http://localhost:4000/activity";

export const getActivity = async (limit) => {
  try {
    let url = URL;
    if(limit){
        url = `${URL}?limit=${limit}`
    }
    const response = await axios.get(`${url}`);
    return response.data;
  } catch (err) {
    return err;
  }
};

export const getActivityById = async (id) => {
  try {
    const response = await axios.get(`${URL}/${id}`);
    return response.data;
  } catch (err) {
    return err;
  }
};

export const postActivity = async (payload) => {
  try {
    const response = await axios.post(`${URL}`, payload);
    return response;
  } catch (err) {
    return err;
  }
};

export const putActivityById = async (id, payload) => {
  try {
    const response = await axios.put(`${URL}/${id}`, payload);
    return response;
  } catch (err) {
    return err;
  }
};

export const deleteActivityById = async (id) => {
  try {
    const response = await axios.delete(`${URL}/${id}`);
    return response;
  } catch (err) {
    return err;
  }
};
