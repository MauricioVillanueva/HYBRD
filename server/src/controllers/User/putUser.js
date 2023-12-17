const bcryptjs = require("bcryptjs");
const db = require("../../db");
const { uploadImgUser } = require("../../utils/cloudinary");

const updateUser = async (clientId, data, fileUrl, filePath) => {
  const user = await db.User.findOne({
    where: { clientId }, // Buscar por ClientId en lugar de PK
  });

  if (!user) throw new Error("User not found");

  if (data.password && data.password !== user.password)
    data.password = await bcryptjs.hash(data.password, 10); // Corregir la variable "password" a "data.password"

  let updateProduct = { ...data };

  if (filePath || fileUrl) {
    const result = filePath
      ? await uploadImgUser(filePath)
      : await uploadImgUser(fileUrl);
    updateProduct = {
      ...updateProduct,
      photo_public_id: result.public_id,
      photo_secure_url: result.secure_url,
    };
  }

  await user.update({ ...user, ...updateProduct });

  return user;
};

module.exports = updateUser;
