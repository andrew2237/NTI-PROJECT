function otpGenration(o) {
  var num = "0123456789";
  let otp = "";
  for (let i = 0; i < o; i++) {
    otp += num[Math.floor(Math.random() * 10)];
  }
  return otp;
}
module.exports = otpGenration;
