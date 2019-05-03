const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("login error");
      return {
        ...state,
        authError: "LOGIN FAILED",
      }

    case "LOGIN_SUCCESS":
      console.log("login success");
      return {
        ...state,
        authError: null
      }

    case "SIGN_OUT_SUCCESS":
      console.log("sign out success")
      return state

    case "SIGN_UP_SUCCESS":
      console.log("sign UP success")
      return {
        ...state,
        authError: null
      }

    case "SIGN_UP_ERROR":
      console.log("sign up error")
      return {
        ...state,
        authError: "LOGIN FAILED",
      }
    default:
      return state
  }

}

export default authReducer