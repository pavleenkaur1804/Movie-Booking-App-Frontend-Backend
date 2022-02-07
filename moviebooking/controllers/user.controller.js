const db = require("../models");
const User = db.user;
const TokenGenerator = require('uuid-token-generator');
const { v4: uuidv4 } = require('uuid');
var jwt = require('jsonwebtoken');





exports.signUp = (req, res) => {
    //Validate Request
    if (!req.body.email || !req.body.password || !req.body.firstName) {
        res.status(400).send({
            message: "Please provide email, password and first name to continue.",
        });
        return;
    }

    const filter = { email: req.body.email };

    User.findOne(filter, (err, user) => {
        if (err || user !== null) {
            res.status(400).send({
                message: "User Already Exists.",
            });
        } else {
            const user = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName ? req.body.lastName : "",
                username: req.body.firstName + req.body.lastName,
                email: req.body.email,
                password: req.body.password,
                role: req.body.role ? req.body.role : "user",
                isLoggedIn: true,
            });

            user
                .save(user)
                .then((data) => {
                    res.status(200).send(data);
                })
                .catch((err) => {
                    res.status(500).send({
                        message: "Some error occurred, please try again later.",
                    });
                });
        }
    });
};

exports.login = (req, res) => {
    //Validate Request
    if (!req.body.username || !req.body.password) {
        res.status(400).send({
            message: "Please provide username and password to continue.",
        });
        return;
    }

    const filter = { username: req.body.username };

    User.findOne(filter, (err, user) => {
        if (err || user === null) {
            res.status(401).send({
                message: "Username or Password is Incorrect.",
            });
        } else {
            if (req.body.password === user.password) {
                user.isLoggedIn = true;
                User.findOneAndUpdate(filter, user)
                    .then((user) => {
                        const token = jwt.sign({ _id: user._id }, "myprivatekey")
                        user.accesstoken = token;
                        // console.log("my web token  is ->",user.accesstoken)
                        const uuid = uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
                        user.uuid = uuid;
                        console.log("my uuid===>>",user.uuid)


                        res.send(user);
                    })
                    .catch((err) => {
                        res.status(500).send({
                            message: "Error Updating.",
                        });
                    });
            } else {
                res.status(401).send({
                    message: "Password is Incorrect.",
                });
            }
        }
    });
};

exports.logout = (req, res) => {
    //Validate Request
    if (!req.body.uuid) {
        res.status(400).send({
            message: "Please provide user ID.",
        });
        return;
    }

    const update = { isLoggedIn: false };
    User.findOneAndUpdate(req.body.uuid, update)
        .then((user) => {
            res.json({
                userData: user,
                message: "Logged Out Successfully.",
            });
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error Updating.",
            });
        });
};
exports.getCouponCode=(req,res)=>{
      

User.findById(req.body.id)
    .then((data) => {
        res.status(200).send({
          coupens: data.coupens,
          message: "Coupen Code fetched Successfully.",
        });
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occured while fetching the coupen code",
        });
      });

}
exports.bookShow=(req,res)=>{
    User.findById(req.body.id)
    .then((data) => {
        res.status(200).send({
          bookshow: data.bookingRequests,
          message: "BookShow fetched Successfully.",
        });
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occured while fetching the bookshow",
        });
      });

}