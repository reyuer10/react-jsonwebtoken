const databaseQuery = require("../config/databaseQuery");

const OK = 200;
const InternalServerError = 500;
const notFound = 404;
const UnAuthorized = 401;
const foundError = 402;

exports.register = async (req, res) => {
  const queryRegisterUser =
    "INSERT INTO tb_user (`user_name`, `user_password`) VALUE(?, ?)";

  const {
    body: { user_name, user_password },
  } = req;
  try {
    const resultRegisterUser = await databaseQuery(queryRegisterUser, [
      user_name,
      user_password,
    ]);

    console.log(user_name, user_password);

    if (resultRegisterUser) {
      return res.status(OK).send({
        message: "Successfully registered!",
        data: resultRegisterUser,
      });
    }
  } catch (error) {
    return res.status(InternalServerError).send({
      message: "Internal server error.",
      error: error,
    });
  }
};

exports.login = async (req, res) => {
  const loginUser = "SELECT * FROM tb_user WHERE user_name = ?";
  const {
    body: { user_name, user_password },
  } = req;
  const error = [];
  if (!user_name) {
    error.push({
      error: "username",
      message: "username is required.",
    });
  }

  if (!user_password) {
    error.push({
      error: "password",
      message: "password is required.",
    });
  }

  try {
    const resultsLoginUser = await databaseQuery(loginUser, [user_name]);

    if (
      user_name.length > 0 &&
      user_password.length > 0 &&
      resultsLoginUser.length > 0
    ) {
      const user = resultsLoginUser[0];
      if (user.user_password == user_password) {
        return res.status(OK).send({
          login: true,
          data: resultsLoginUser,
        });
      } else {
        error.push({
          error: "error",
          message: "username and password is invalid, please try again.",
        });
      }
    }

    if (error.length) {
      return res.status(foundError).send(error);
    }
  } catch (error) {
    return res.status(InternalServerError).send({
      message: "Internal server error.",
      error: error,
    });
  }
};
