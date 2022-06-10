const vars = {
  OTPExpirationDurationInSeconds: 200000,
  saltRounds: 10,
};

const routes = {
  SIGN_UP: "/auth/sign-up",
  SIGN_IN: "/auth/sign-in",
  FORGOT_PASSWORD: "/auth/forgot-password",
  VOTP: "/auth/votp",
  FOTP: "/auth/fotp",
};

const statusText = {
  SIGN_IN_SUCCESS: "You have been signed in successfully",
  SIGN_IN_FAIL: "We were to unable to sign you in. Please try again",
  SIGN_UP_SUCCESS: "You have been signed up successfully",
  SIGN_UP_FAIL: "We were to unable to sign you up. Please try again",
  USER_NOT_FOUND: "We were to unable to find any user with these credentials",
  USER_EMAIL_EXISTS: "A user with this Email Address already exists",
  OTP_VERIFICATION_FAIL: "We were unable to verify the OTP. Please try again",
  OTP_NOT_OURS: "The OTP that you have entered was not generated by us",
  OTP_EXPIRED: "OTP has been expired",
  OTP_WRONG: "You have entered a wrong OTP",
  SOMETHING_WENT_WRONG: "Something went wrong, Please try again",
};

module.exports = {
  routes,
  vars,
  statusText,
};
