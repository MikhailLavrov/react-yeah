import { Navigate } from "react-router-dom"
import { connect } from "react-redux";

let mapStateToPropsWithRedirect = (state) => ({
  isAuth: state.auth.isAuth,
});

export const WithAuthRedirect = (Component) => {
  const RedirectComponent = (props) => {
    if (!props.isAuth) return <Navigate to={'/login'} />
    return <Component {...props} />
  }

  let ConnectedRedirectComponent = connect(mapStateToPropsWithRedirect)(RedirectComponent);

  return ConnectedRedirectComponent;
}
