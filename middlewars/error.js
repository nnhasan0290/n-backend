export default (err, req, res, nex) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "invalid server error";
  res.status(statusCode).json({
    success: false,
    error: message,
  });
};
