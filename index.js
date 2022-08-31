import app from "./app.js";
import connectCloudinary from "./config/cloudinary.js";

const Port = process.env.PORT || 3001;

connectCloudinary();

app.listen(Port, () => {
  console.log("This server is running on the " + Port);
});
