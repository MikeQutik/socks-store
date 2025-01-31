const router = require("express").Router();
require("dotenv").config();
const { User } = require("../db/models");
const bcrypt = require("bcrypt");
const { generateTokens } = require("../utils/generateTokens");
const jwtConfig = require("../config/jwtConfig");
const formatResponse = require("../utils/formatResponse");
const verifyRefreshToken = require("../middleware/verifyRefreshToken");

// function formatResponse(statusCode, message, data = null, error = null) {
//     return {
//         statusCode,
//         message,
//         data,
//         error,
//     };
// }
router.get("/refreshTokens", verifyRefreshToken, (req, res) => {
  try {
    const { user } = res.locals;

    const { accessToken, refreshToken } = generateTokens(user);

    res.cookie(jwtConfig.refresh.type, refreshToken).json(
      formatResponse(200, "Refresh tokens success", {
        user,
        accessToken,
      })
    );
  } catch (error) {
    res.json(formatResponse(500, null, null, error.message));
  }
});

router.post("/registration", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // console.log(req.body);

    if (name && email && password) {
      const candidate = await User.create({
        name,
        email,
        password: await bcrypt.hash(password, 10),
      });
      // console.log(candidate);

      const user = candidate.get({ plain: true });

      delete user.password;
      console.log(user);
      const { accessToken, refreshToken } = generateTokens(user);
      // console.log(accessToken);
      // console.log(req.body);

      res
        .status(201)
        .cookie(jwtConfig.refresh.type, refreshToken, {
          maxAge: jwtConfig.refresh.expiresIn,
          httpOnly: true,
        })
        .json(formatResponse(201, "User created", { user, accessToken }));
    }
  } catch (error) {
    res.status(500).json(formatResponse(500, null, null, error.message));
  }
});

router.post("/authorization", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email && password) {
      const candidate = await User.findOne({ where: { email: email } });

      console.log(candidate, "<<<<<<");

      if (candidate) {
        const isCorrect = await bcrypt.compare(password, candidate.password);

        if (candidate && isCorrect) {
          const user = candidate.get({ plain: true });
          delete user.password;
          const { accessToken, refreshToken } = generateTokens(user);

          res
            .status(200)
            .cookie(jwtConfig.refresh.type, refreshToken, {
              maxAge: jwtConfig.refresh.expiresIn,
              httpOnly: true,
            })
            .json(formatResponse(201, "Login success", { user, accessToken }));
        }
      } else {
        res.status(400).json(formatResponse(400, "Data not correct"));
      }
    } else {
      res
        .status(400)
        .json(formatResponse(400, "Not correct email or password"));
    }
  } catch (error) {
    res.status(500).json(formatResponse(500, null, null, error.message));
  }
});

router.delete("/logout", (req, res) => {
  try {
    res
      .clearCookie(jwtConfig.refresh.type)
      .json(formatResponse(200, "Logout success"));
  } catch (error) {
    res.status(500).json(formatResponse(500, null, null, error.message));
  }
});

module.exports = router;
