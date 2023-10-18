import { GLOBALTYPES } from "./globalTypes";
import { postDataApi, getDataApi } from "../../utils/fetchData";

export const register = (data) => async (dispatch) => {
  console.log(data);
  try {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });

    const res = await postDataApi("register", data);

    console.log(res);

    // dispatch({
    //   type: GLOBALTYPES.AUTH,
    //   payload: { user: res.data.message },
    // });

    // localStorage.setItem("firstLogin", true);

    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { success: res.data.message },
    });
  } catch (err) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { error: err.message },
    });
  }
};

export const login = (data) => async (dispatch) => {
  console.log(data);
  try {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });

    const res = await postDataApi("login", data);

    dispatch({
      type: GLOBALTYPES.AUTH,
      payload: { token: res.data.data.token, user: res.data.data.user },
    });

    localStorage.setItem("firstLogin", true);

    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: false } });

    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { success: res.data.message },
    });

    console.log(res);
  } catch (err) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { error: err.message },
    });
  }
};
