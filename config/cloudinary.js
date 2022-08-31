import cloudinary from "cloudinary";
const connectCloudinary = () => {
  cloudinary.config({
    cloud_name: "do7mb5ocb",
    api_key: "787872244143135",
    api_secret: "H4FqyW3nVOOaZua9p-5MraERLg4",
    secure: true,
  });
};
export default connectCloudinary;
