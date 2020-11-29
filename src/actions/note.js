import database from '@react-native-firebase/database';
import {SET_NOTES, NOTES_ERROR} from './action.type';

export const getNotes = (data) => async (dispatch) => {
  try {
    database()
      .ref('/notes/')
      .on('value', (snapshot) => {
        console.log(snapshot.val());
        if (snapshot.val()) {
          dispatch({
            type: SET_NOTES,
            payload: Object.values(snapshot.val()),
          });
        } else {
          dispatch({
            type: SET_NOTES,
            payload: [],
          });
        }
      });
  } catch (error) {
    console.log('Error occured while saving notes', error);
    dispatch({
      type: NOTES_ERROR,
    });
  }
};
