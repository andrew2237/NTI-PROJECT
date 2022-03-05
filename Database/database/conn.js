const mongoose = require("mongoose");
try {
  mongoose.connect(
    //process.env.dbUrl
    "mongodb+srv://ntig15:YFNwYrbQoHHiyMaH@ntiproject.dudyw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
} catch (e) {
  throw new Error(e);
}
//process.env.dbUrl
//ntig15;
//YFNwYrbQoHHiyMaH
//https://ntiproject.herokuapp.com/api/users/register/user
//http://localhost:3000/api/users/login/user
//https://ntiproject.herokuapp.com/api/users/showUser/62161ac1385e01944b034ab7
//http://localhost:3000/api/users/profile/admin
//http://localhost:3000/api/book/delAttrbiute/621780422adcf572e0fdd741
//http://localhost:3000/api/book/addbook/romance
//http://localhost:3000/api/book/addAttrbiutes/621cb8a0b6375f4db17d1362
//http://localhost:3000/api/book/delAllbooks
//http://localhost:3000/api/book/editbook/621cb8a0b6375f4db17d1362
//http://localhost:3000/api/user/showBook/62161e4cf00f033c275601d3
//http://localhost:3000/api/user/buyBook/621cb8a0b6375f4db17d1362
