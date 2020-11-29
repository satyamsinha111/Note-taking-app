import auth from '@react-native-firebase/auth';
// import database from '@react-native-firebase/database';

export const signup = (data) => async (dispatch) => {
  console.log(data);
  const {email, password} = data;
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then((data) => {
      console.log('User saved successfully', data.user);
    })
    .catch((err) => {
      console.log('Error occured', err);
    });
};

export const signin = (data) => async (dispatch) => {
  console.log(data);
  const {email, password} = data;
  auth()
    .signInWithEmailAndPassword(email, password)
    .then((data) => {
      console.log('Signin successfull');
    })
    .catch((error) => {
      console.log('Signin failed');
    });
};

export const signout = () => (dispatch) => {
  auth()
    .signOut()
    .then((data) => {
      console.log('Signed out successfully');
    })
    .catch((error) => {
      console.log('Failed to signout user', error);
    });
};
