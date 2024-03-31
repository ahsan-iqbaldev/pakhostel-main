import firebase from "../../config/firebase";

export const getProperties = () => {
  return async (dispatch) => {
    try {
      dispatch(setIsLoading(true));
      firebase
        .firestore()
        .collection("properties")
        .onSnapshot((snapshot) => {
          const properties = [];
          snapshot.forEach((doc) =>
            properties.push({ ...doc.data(), id: doc.id })
          );
          dispatch({ type: "SET_PROPERTIES", payload: properties });
          dispatch(setIsLoading(false));
        });
    } catch (error) {
      console.log(error);
      dispatch(setIsLoading(false));
    }
  };
};

export const getSingleProperties = (id) => {
  return async (dispatch) => {
    try {
      dispatch(setIsLoading(true));
      const propertyDoc = await firebase
        .firestore()
        .collection("properties")
        .doc(id)
        .get();

      if (propertyDoc.exists) {
        const data = propertyDoc.data();

        console.log(data, "databyahsan");

        const userDoc = await firebase
          .firestore()
          .collection("users")
          .doc(data.createdBy)
          .get();

        if (userDoc.exists) {
          const user = userDoc.data();

          console.log(data, user, "ahsaniqbal");

          dispatch({
            type: "SET_SINGLE_PROPERTIES",
            payload: { ...data, user },
          });
          dispatch(setIsLoading(false));
        } else {
          console.log("User document does not exist!");
        }
      } else {
        console.log("Property document does not exist!");
      }
    } catch (error) {
      console.log("Error getting document:", error);
      dispatch(setIsLoading(false));
    }
  };
};

export const setIsLoading = (val) => async (dispatch) => {
  dispatch({
    type: "SET_IS_LOADING",
    payload: val,
  });
};
