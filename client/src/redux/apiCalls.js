import { loginFailure, loginStart, loginSuccess } from "./userRedux.js";
import { userRequest } from "../requestMethods.js";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await userRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    console.error(err);
    dispatch(loginFailure());
  }
};
