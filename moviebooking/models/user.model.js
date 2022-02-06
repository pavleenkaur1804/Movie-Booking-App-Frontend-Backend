module.exports = mongoose => {
    const User = mongoose.model(
      "user",
      mongoose.Schema(
        {
          userid: { type: Number, require: true },
          email: { type: String ,require:true},
          first_name: { type: String, require: true, unique: true, dropDups: true },
          last_name: { type: String, require: true },
          username: { type: String} ,
          contact:String,
          password:{type:String, require:true},
          role:String,
          isLoggedIn: Boolean,
          uuid:String,
          accesstoken:String,
          coupens:Array,
          bookingRequests:Array,
        },
      
      )
    );
  
    return User;
  };