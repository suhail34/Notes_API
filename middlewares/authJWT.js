const jwt = require("jsonwebtoken");

const verifyToken = (request, response, next) => {
  const token = request.cookies.jwt;
  if(token){
    jwt.verify(token,process.env.API_SECRET,(err,decodedToken)=>{
      if(err){
        // throw Error('Not a valid Token')
        response.status(403).json({message:"Token Expired"});
      }else {
        // console.log("dec__",decodedToken);
        // response.status(200).json({message:"Token Verified"})
        next();
      }
    })
  }else{
    response.redirect('/api/auth/signin');
  }
};
module.exports = verifyToken;