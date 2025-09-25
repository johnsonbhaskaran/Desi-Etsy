import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4Y2M1Zjc4ZjdiNDQ3MDVmYmZiZTk4ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTc1ODY4Mzk2MSwiZXhwIjoxNzU4OTQzMTYxfQ.oeAXbfKl0oxD7BiOdhcxycBCCHmdgbzN0eMDEwEkO_Y";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Bearer  ${TOKEN}` },
});
