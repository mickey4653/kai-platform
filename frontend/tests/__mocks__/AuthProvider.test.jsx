// import 'node-fetch';
// import React from 'react';

// import { Grid } from '@mui/material';
// import { render, waitFor } from '@testing-library/react';
// import { applyActionCode, connectAuthEmulator, getAuth } from 'firebase/auth';
// import { RouterContext } from 'next/router';
// import { Provider } from 'react-redux';

// import ErrorBoundary from '@/components/ErrorBoundary';

// import ROUTES from '@/constants/routes';

// import { createMockRouter } from './mockRouter';

// import GlobalProvider from '@/providers/GlobalProvider';
// import store from '@/redux/store';

// console.log('checking available methods', getAuth());
// console.log(<GlobalProvider />);
// console.log(React.isValidElement(<GlobalProvider />));
// // Mock Firebase modules directly in this file
// jest.mock('firebase/auth', () => {
//   const actualAuth = jest.requireActual('firebase/auth'); // Use actual module to ensure all functions exist

//   return {
//     ...actualAuth,
//     getAuth: jest.fn(() => ({
//       currentUser: { emailVerified: true, uid: 'mockUid' }, // For authenticated tests
//       onAuthStateChanged: jest.fn((callback) => {
//         callback({
//           getIdTokenResult: jest.fn().mockResolvedValue({ claims: {} }),
//         });
//         return jest.fn(); // Unsubscribe function
//       }),
//       applyActionCode: jest.fn(),
//     })),
//     connectAuthEmulator: jest.fn(),
//     connectFirestoreEmulator: jest.fn(),
//     connectFunctionsEmulator: jest.fn(),
//   };
// });

// jest.mock('firebase/app', () => ({
//   initializeApp: jest.fn(() => ({})),
// }));

// jest.mock('firebase/firestore', () => ({
//   getFirestore: jest.fn(() => ({})),
//   connectFirestoreEmulator: jest.fn(),
// }));

// jest.mock('firebase/functions', () => ({
//   getFunctions: jest.fn(() => ({})),
//   connectFunctionsEmulator: jest.fn(),
// }));

// // Mock Firebase authentication and functions
// // jest.mock('firebase/auth', () => ({
// //   getAuth: jest.fn(() => ({
// //     currentUser: { emailVerified: true, uid: 'mockUid' }, // For authenticated tests
// //     emailVerified: false, // Default for unauthenticated tests
// //   })),
// //   applyActionCode: jest.fn().mockResolvedValueOnce(),
// // }));

// jest.mock('react-redux', () => ({
//   useDispatch: () => jest.fn(),
//   useSelector: jest.fn((selector) =>
//     selector({
//       auth: { data: {}, loading: false },
//     })
//   ),
// }));

// describe('Firebase Auth Emulator', () => {
//   it('should connect to Firebase Auth Emulator', () => {
//     const auth = getAuth();
//     connectAuthEmulator(auth, 'http://localhost:9099');
//     expect(connectAuthEmulator).toHaveBeenCalledWith(
//       auth,
//       'http://localhost:9099'
//     );
//   });
// });

// describe('AuthProvider', () => {
//   // it("should handle user authentication and redirection correctly", async () => {
//   //   // Mock router
//   //   const mockRouter = createMockRouter();

//   //   // Mock Firebase onAuthStateChanged to simulate user state change
//   //   // const { getAuth } = require('firebase/auth');
//   //   // getAuth().onAuthStateChanged.mockImplementation((callback) => {
//   //   //   callback({ getIdTokenResult: jest.fn().mockResolvedValue({ claims: {} }) });
//   //   //   return () => {}; // Unsubscribe function
//   //   // });

//   //   // Render the component with the mock router
//   //   render(
//   //     // <ErrorBoundary>
//   //     <RouterContext.Provider value={mockRouter}>
//   //       <Provider store={store}>
//   //         <GlobalProvider>
//   //           {/* Any child component that depends on AuthProvider */}
//   //           <Grid> Test Completed!!! </Grid>
//   //         </GlobalProvider>
//   //       </Provider>
//   //     </RouterContext.Provider>
//   //     /* </ErrorBoundary> */
//   //   );
//   //   // Assertions for user authentication redirection
//   //   await waitFor(() => {
//   //     expect(mockRouter.push).toHaveBeenCalledWith(ROUTES.HOME);
//   //   }); // or expected route
//   //   // console.log('Mock Router push:', mockRouter.push.mock.calls);
//   // });

//   // it('should handle email verification process', async () => {
//   //   // Mock router with query parameters
//   //   const mockRouter = createMockRouter({ query: { oobCode: 'validCode', mode: 'verifyEmail' } });

//   //   // Mock `applyActionCode` to resolve successfully
//   //   jest.spyOn(getAuth(), 'applyActionCode').mockResolvedValueOnce();

//   //   // Render the component with the mock router
//   //   render(
//   //     // <ErrorBoundary>
//   //     <RouterContext.Provider value={mockRouter}>
//   //        <Provider store={store}>
//   //       <GlobalProvider>
//   //         {/* Any child component that depends on AuthProvider */}
//   //       </GlobalProvider>
//   //       </Provider>
//   //     </RouterContext.Provider>
//   //     /* </ErrorBoundary> */
//   //   );

//   //  // Assertions for email verification redirection
//   //  await waitFor(() => {
//   //   expect(mockRouter.push).toHaveBeenCalledWith(ROUTES.HOME);
//   // });
//   // });

//   it('renders the child component', () => {
//     const { getByText } = render(
//       <GlobalProvider>
//         <Grid>Test Content</Grid>
//       </GlobalProvider>
//     );
//     expect(getByText('Test Content')).toBeInTheDocument();
//   });

//   it('handles authentication state change', async () => {
//     const { getByText } = render(
//       <GlobalProvider>
//         <Grid>Test Content</Grid>
//       </GlobalProvider>
//     );
//     const auth = getAuth();
//     auth.onAuthStateChanged.mockImplementation((callback) => {
//       callback({
//         getIdTokenResult: jest.fn().mockResolvedValue({ claims: {} }),
//       });
//       return () => {}; // Unsubscribe function
//     });
//     await waitFor(() => {
//       expect(getByText('Test Content')).toBeInTheDocument();
//     });
//   });
// });
