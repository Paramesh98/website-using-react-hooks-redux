import axios from "axios";

export const fetchUsers = () => {
  return dispatch => {
    axios.get("./data.json").then(response => {
      dispatch(fetchUsersSuccess(response.data));
    });
  };
};

export const fetchUsersSuccess = user => {
  return {
    type: "FETCH_USERS_REQUEST",
    payload: user
  };
};

export const search = e => {
  //console.log(e.target.value);
  if (e.target.value === "") {
    return {
      type: "DEFAULT"
    };
  } else {
    return {
      type: "SEARCH",
      payload: e.target.value
    };
  }
};

export const submit = item => {
  return {
    type: "SUBMIT",
    payload: item
  };
};

export const deleteItem = item => {
  return {
    type: "DELETE",
    payload: item
  };
};
export const quantity = e => {
  //console.log(e.target.value);
  if (e.target.value === "") {
    return {
      type: "DEFAULT"
    };
  } else {
    return {
      type: "QUANTITY",
      payload: e.target.value
    };
  }
};
