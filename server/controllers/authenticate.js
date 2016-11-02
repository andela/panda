const Models = require('../models');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const cert = process.env.SECRET_KEY;


const authentication = {
  signup: (req, res) => {
    Models.user.findOne({where: {email: req.body.email}}).then((userT) => {
      if(userT === null) {
        Models.user.build({
          full_name: req.body.name,
          email: req.body.email,
          created_at: Date.now(),
          token: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8), null)
        })
        .save()
        .then((response) => {
          let token = generateToken(response.email, response.id);
          return res.status(202).json(token);
        })
        .catch((err) => {
          res.status(500).json(err);
        });
      }
      else {
        return res.status(401).json({message: 'email taken'});
      }

  });
  },
  login: (req, res, next) => {
    passport.authenticate('local', function(err, user, info) {
      if (err) {
        return next(err);
      }
      if (user) {
        const token = generateToken(user.email, user.id);
        res.status(201).json({token});
      }
      else {
        res.status(401).json(info);
      }
    })(req, res, next);
  }
};

function generateToken(email, id) {
  const claims = {
    user: id,
    sub: email,
    iss: 'panda'
  };
  let token = jwt.sign(claims, cert, { expiresIn: '90 days' });
    return token;
}
passport.use('local', new LocalStrategy({
      usernameField : 'email',
      passReqToCallback : true
    },
    function(req, email, password, done) {
        process.nextTick(function() {
          Models.user.findOne({
            where: {
              'email': email
            }
          }).then(function(user) {
            if (!user) {
              return done(null, false, { message: 'Incorrect credentials.'});
            }
            bcrypt.compare(password, user.token, function(err, res) {
              if(res) {
                return   done(null, user);
              }
            });
          }). catch(function(err) {
            throw err;
          });
        });
  })
);


module.exports = authentication;
