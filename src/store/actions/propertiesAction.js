import firebase from "../../config/firebase";

export const getProperties = () => {
  return async (dispatch) => {
    firebase
      .firestore()
      .collection("properties")
      .onSnapshot((snapshot) => {
        const properties = [];
        snapshot.forEach((doc) =>
          properties.push({ ...doc.data(), id: doc.id })
        );
        dispatch({ type: "SET_PROPERTIES", payload: properties });
      });
  };
};
