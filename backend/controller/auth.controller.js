import User from "../model/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

//register
export const register = async (req, res) => {
  const { firstname, lastname, username, email, password } = req.body;

  const existingUsername = await User.findOne({ username });
  if (existingUsername) return res.status(400).send("Username already exists");

  const existingEmail = await User.findOne({ email });
  if (existingEmail) return res.status(400).send("Email already exists");

  try {
    const hashPassword = bcrypt.hashSync(password, 10);

    const user = new User({
      firstname,
      lastname,
      username,
      email,
      password: hashPassword,
    });
    await user.save();
    res.status(201).send("User created successfully!");

  } catch (err) {
    res.status(500).send(err);
  }
};


//login
export const login = async (req, res) => {
  const { username, password } = req.body

  const user = await User.findOne({ username })
  if (!user) return res.status(400).send("Username not found")

  const matchPassword = bcrypt.
    compareSync(password, user.password)
  if (!matchPassword) return res.status(400).send("Password didnt match")

  const token = jwt.sign(
    {
      id: user._id,
      isAdmin: user.isAdmin
    },
    process.env.JWT_KEY,
    // {expiresIn: "20s"}
  )

  res.cookie("accessToken", token, {
    secure: true,
    sameSite: "none"
  }).status(200).send(user)
}


//logout 
export const logout = async (req, res) => {
  res.clearCookie("accessToken", {
    // sameSite: "none",    //uncomment in prduction
    // secure: true   //uncomment in prduction
  }).status(200).send("User logout successfully!")
}