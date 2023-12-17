const { Router } = require("express");
const fs = require("fs-extra");

const { tokenValidator } = require("../middlewares/jsonWebToken");

const deleteUser = require("../controllers/User/delUser");
const getUserById = require("../controllers/User/getUserById");
const getUsers = require("../controllers/User/getUsers");
const userLogin = require("../controllers/User/login");
const putUser = require("../controllers/User/putUser");
const restoreUser = require("../controllers/User/restoreUser");
const signUp = require("../controllers/User/signUp");

const router = Router();

// traer
router.get("/", async (req, res) => {
  try {
    const users = await getUsers();

    res.status(200).json(users);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getUserById(id);

    res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
});

// Registrarse
router.post("/signUp", async (req, res) => {
  try {
    console.log(req.body);
    const { clientId, name, email, photo_secure_url } = req.body;
    const token = await signUp( clientId, name, email, photo_secure_url );

    res.status(200).json({ token });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
});

//borrado logico y restaurar
router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await deleteUser(id);

    res.status(200).json({ message: "The user has been deleted" });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
});

router.put("/restore/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await restoreUser(id);

    res.status(200).json({ message: "The user has been restored" });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
});

// login
router.post("/login", tokenValidator, async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    const { username, password, email, phone } = req.body;
    const userToLogin = await userLogin(
      username,
      password,
      email,
      phone,
      token
    );

    res.status(200).json(userToLogin);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
});

//modificar
router.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const fileUrl = data.photo_secure_url ?? "";

    const filePath = req.files ? req.files.image.tempFilePath : "";

    const user = await putUser(id, data, fileUrl, filePath);

    if (filePath) {
      await fs.unlink(filePath);
    }
    res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
});

router.post("/respond", async (req, res) => {
  try {
    const { questionId, response } = req.body;
    await respondToQuestions(questionId, response);
    res.status(200).json({ message: "Question successfully answered" });
  } catch (error) {
    console.error(error.message);
    res.status(404).json({ error: "Error answering the question" });
  }
});

module.exports = router;
