
export const ShowTab1 = (showMaps) => async (dispatch) => {
    dispatch({
        type: 'SHOW_MAPS',
        payload: showMaps,
    })
}

export const ShowTab2 = (CountriesByName) => async (dispatch) => {
    dispatch({
        type: 'SHOW_Countries',
        payload: CountriesByName,
    })
}

export const FilterCountries = (showAllFilterCountries) => (dispatch) => {
    dispatch({
        type: 'FILTER_COUNTRIES',
        payload: showAllFilterCountries,
    })
}

export const CrossBtn = (value) => (dispatch) => {
    dispatch({
        type: 'CROSS_BTN',
        payload: value,
    })
}

export const DatePicker = (SelectedDate) => async (dispatch) => {
    dispatch({
        type: 'DATE_PICKER',
        payload: SelectedDate,
    })
}

export const CloseSubMTab = (value) => async (dispatch) => {
  dispatch({
    type: 'MOBILE_SUB_TAB',
    payload: value,
  })
}


export const IncrementAdultCounter = (value) => async (dispatch) => {
  dispatch({
    type: "ADULT_INCREMENT",
    payload: value,
  });
};

export const DecrementAdultCounter = (value) => async (dispatch) => {
  dispatch({
    type: "ADULT_DECREMENT",
    payload: value,
  });
};

export const IncrementChildCounter = (value) => async (dispatch) => {
  dispatch({
    type: "CHILD_INCREMENT",
    payload: value,
  });
};

export const DecrementChildCounter = (value) => async (dispatch) => {
  dispatch({
    type: "CHILD_DECREMENT",
    payload: value,
  });
};

export const IncrementInfantCounter = (value) => async (dispatch) => {
  dispatch({
    type: "INFANT_INCREMENT",
    payload: value,
  });
};

export const DecrementInfantCounter = (value) => async (dispatch) => {
  dispatch({
    type: "INFANT_DECREMENT",
    payload: value,
  });
};

export const IncrementPetCounter = (value) => async (dispatch) => {
  dispatch({
    type: "PET_INCREMENT",
    payload: value,
  });
};


export const DecrementPetCounter = (value) => async (dispatch) => {
  dispatch({
    type: "PET_DECREMENT",
    payload: value,
  });
};

