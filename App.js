import React from 'react';
import MainNav from './src/navigation/mainNav';
import {AuthProvider} from './src/navigation/AuthProvider';

const App = () => {
  return (
    <AuthProvider>
      <MainNav />
    </AuthProvider>
  );
};
export default App;
// import React, {useState, useEffect} from 'react';
// import {Button, TextInput} from 'react-native';
// import auth from '@react-native-firebase/auth';

// const App = () => {
//   // If null, no SMS has been sent
//   const [confirm, setConfirm] = useState(null);

//   const [code, setCode] = useState('');

//   // function onAuthStateChanged(user) {
//   //   setUser(user);
//   //   if (initializing) setInitializing(false);
//   // }

//   // useEffect(() => {
//   //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//   //   return subscriber; // unsubscribe on unmount
//   // }, []);

//   // Handle the button press
//   async function signInWithPhoneNumber(phoneNumber) {
//     const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
//     setConfirm(confirmation);
//   }

//   async function confirmCode() {
//     try {
//       await confirm.confirm(code);
//     } catch (error) {
//       console.log('Invalid code.');
//     }
//   }

//   if (!confirm) {
//     return (
//       <Button
//         title="Phone Number Sign In"
//         onPress={() => signInWithPhoneNumber('+923099270265')}
//       />
//     );
//   }

//   return (
//     <>
//       <TextInput value={code} onChangeText={text => setCode(text)} />
//       <Button title="Confirm Code" onPress={() => confirmCode()} />
//     </>
//   );
// };
// export default App;
