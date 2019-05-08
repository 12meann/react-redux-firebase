const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("login error", action.err);
      return {
        ...state,
        authError: "LOGIN FAILED " + action.err,
      }

    case "LOGIN_SUCCESS":
      console.log("login success");
      return {
        ...state,
        authError: null
      }

    case "SIGN_OUT_SUCCESS":
      console.log("sign out success", action)
      return state

    case "SIGN_UP_SUCCESS":
      console.log("sign UP success", action)
      return {
        ...state,
        authError: null
      }

    case "SIGN_UP_ERROR":
      console.log("sign up error", action.err)
      return {
        ...state,
        authError: "LOGIN FAILED",
      }
    default:
      return state
  }

}

export default authReducer