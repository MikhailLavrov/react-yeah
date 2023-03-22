// import { Route, Navigate } from 'react-router-dom';

// export const withAuthRedirect = ({ component: Component, isAuth, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         isAuth ? <Component {...props} /> : <Navigate to="/login" />
//       }
//     />
//   );
// };

// import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// export const withAuthRedirect = (Component) => {
//   const AuthRedirect = (props) => {
//     const isAuth = useSelector((state) => state.auth.isAuth);

//     if (!isAuth) {
//       return <Navigate to={'/login'} />;
//     }

//     return <Component {...props} />;
//   };

//   return AuthRedirect;
// };


// import { Navigate } from "react-router-dom"
// import { connect } from "react-redux";

// let mapStateToPropsWithRedirect = (state) => ({
//   isAuth: state.auth.isAuth,
// });

// export const WithAuthRedirect = (Component) => {
//   const RedirectComponent = (props) => {
//     if (!props.isAuth) return <Navigate to={'/login'} />
//     return <Component {...props} />
//   }

//   let ConnectedRedirectComponent = connect(mapStateToPropsWithRedirect)(RedirectComponent);

//   return ConnectedRedirectComponent;
// }
