const passport = require('passport');
const local = require('passport-local');
const jwt = require('passport-jwt');
const { compare } = require('bcrypt');
const db = require('../../database/index.js');
const loginSQLHelper = require('../../rest-server/components/login/loginSQLHelper.js');
const LocalStrategy = local.Strategy;
const JwtStrategy = jwt.Strategy;
const ExtractJwt = jwt.ExtractJwt;

const localOptions = {
  usernameField: 'email',
};

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: process.env.SECRET
};

passport.use(new LocalStrategy(localOptions, async (email, password, done) => {
  try {
    const query = {
      text: loginSQLHelper, 
      values: [email] 
    }
    const { rows } = await db.query(query);
    if (!rows.length) {
      return done(null, false, { message: 'Incorrect email.' });
    }
    const passwordsMatch = await compare(password, rows[0].password);
    if (!passwordsMatch) {
      return done(null, false, { message: 'Incorrect password '});
    }
    return done(null, rows);
  } catch(e) {
    return done(e);
  }
}));

// passport.use(new JwtStrategy(jwtOptions, async (jwt_payload, done) => {
//   try {
//     const user = await loginQuery(jwt_payload.sub);
//     if (user.length) {
//       return done(null, user);
//     } else {
//       return done(null, false);
//     }
//   } catch(e) {
//     return done(e);
//   }
// }));

module.exports = passport;