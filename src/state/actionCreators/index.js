/*Consider breaking this down into separate actionCreator files if it becomes overly crowded!
Remember separation of concerns.
Import the action-types and export an action-creator function for each.
Each synchronous function should return an action object with a type and a payload -- these will be passed to the reducer.
Each asynchronous function should dispatch its action object (type/payload) to the reducer.
*/
import {
  SET_VISUALIZATION_DATA,
  SET_HEAT_MAP_YEARS,
  RESET_CASE_DATA,
  // RESET_VISUALIZATION_QUERY,
  SET_DATE_FILTER_FORMAT,
} from '../actionTypes';

export const setVisualizationData = (view, office, data) => {
  return {
    type: SET_VISUALIZATION_DATA, // Mock
    payload: {
      view,
      office,
      data,
    },
  };
};

export const resetVisualizationQuery = (view, office) => {
  return {
    // type: RESET_VISUALIZATION_QUERY <-- Mock
    type: RESET_CASE_DATA,
    payload: {
      view,
      office,
    },
  };
};

export const setYears = years => {
  return {
    type: SET_DATE_FILTER_FORMAT,
    payload: {
      years,
    },
  };
};

export const setHeatMapYears = (view, office, idx, year) => {
  return {
    type: SET_HEAT_MAP_YEARS, // Mock
    payload: {
      view,
      office,
      idx,
      year,
    },
  };
};
