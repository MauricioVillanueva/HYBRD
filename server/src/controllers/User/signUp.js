const bcryptjs = require("bcryptjs");
const { Op } = require("sequelize");
const db = require("../../db");
const { tokenGenerator } = require("../../middlewares/jsonWebToken");
const { JWT_SIGN } = process.env;
const { sendRegistrationEmail } = require("../../utils/email");

const signUp = async (clientId, name, email, photo_secure_url) => {
  // const emailExist = await db.User.findAll({
  //   where: {
  //     [Op.or]: [{ username }, { email }, { phone }],
  //   },
  // });
  // if (emailExist.length) throw new Error("Email already exists");
  // console.log(emailExist.length);

  // const hashPassword = password ? await bcryptjs.hash(password, 10) : null;

  const newUser = await db.User.create({
    clientId,
    name,
    email,
    photo_secure_url,
  });

  const token = await tokenGenerator(
    {
      clientId: newUser.clientId,
      name: newUser.name,
      email: newUser.email,
      photo_secure_url: newUser.photo_secure_url,
    },
    `${JWT_SIGN}`
  );

  sendRegistrationEmail(newUser.id);

  return token;
};

module.exports = signUp;
