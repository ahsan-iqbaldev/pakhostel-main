const initialData = {
  disableAdult: false,
  adultcounter: 0,
  childcounter: 0,
  infantcounter: 0,
  petcounter: 0,

  showTab1: true,
  showTab2: false,
  filtercountries: [],
  crossbtn: false,

  closeSubMTab: true,

  datepicker: [{
    startDate: '',
    endDate: '',
    key: "selection",
  }]

};

const mainReducer = (state = initialData, action) => {
  switch (action.type) {

    case 'SHOW_MAPS':
      return{
        ...state,
        showTab1: action.payload,
      }

    case 'SHOW_Countries':
      return{
        ...state,
        showTab2: action.payload,
      }

    case 'FILTER_COUNTRIES':
      return{
        ...state,
        filtercountries: action.payload,
      }

    case 'CROSS_BTN':
      return{
        ...state,
        crossbtn: action.payload,
      }

    case 'DATE_PICKER':
      return {
        ...state, 
        datepicker: action.payload,
      }

      case 'MOBILE_SUB_TAB':
        return {
          ...state,
          closeSubMTab: action.payload,
        }


    // Counter --Start

    case "ADULT_INCREMENT":
      if (state.adultcounter < 16) {
        return { ...state, adultcounter: state.adultcounter + 1 };
      }
      return state;

    case "ADULT_DECREMENT":
      if (state.adultcounter > 0) {
        return { ...state, adultcounter: state.adultcounter - 1 };
      }
      return state;

    case "CHILD_INCREMENT":
      if (state.childcounter < 15) {
        if (state.adultcounter === 0) {
          return {
            ...state,
            childcounter: state.childcounter + 1,
            adultcounter: state.adultcounter + 1,
            disableAdult: false,
          };
        } else {
          return {
            ...state,
            childcounter: state.childcounter + 1,
          };
        }
      }
      return state;

    case "CHILD_DECREMENT":
      if (state.childcounter > 0) {
        return {
          ...state,
          childcounter: state.childcounter - 1,
          disableAdult: false,
        };
      }
      return state;

    case "INFANT_INCREMENT":
      if (state.infantcounter < 5) {
        if (state.adultcounter === 0 ){
          return { ...state, 
          infantcounter: state.infantcounter + 1,
          adultcounter: state.adultcounter + 1,
          disableAdult: false,
        }
      }
        else{
          return {
            ...state,
            infantcounter: state.infantcounter + 1,
          }
        }
      }
      return state;

    case "INFANT_DECREMENT":
      if (state.infantcounter > 0) {
        return {
          ...state,
          infantcounter: state.infantcounter - 1,
          disableAdult: false,
        };
      }
      return state;

    case "PET_INCREMENT":
      if (state.petcounter < 5) {
        if (state.adultcounter === 0 ){
          return { ...state, 
          petcounter: state.petcounter + 1,
          adultcounter: state.adultcounter + 1,
          disableAdult: false,
        }
      }
        else{
          return {
            ...state,
            petcounter: state.petcounter + 1,
          }
        }
      }
      return state;

    case "PET_DECREMENT":
      if (state.petcounter > 0) {
        return {
          ...state,
          petcounter: state.petcounter - 1,
          disableAdult: false,
        };
      }
      return state;

    // Counter --End


    default:
      return state;
  }
};
export default mainReducer;
