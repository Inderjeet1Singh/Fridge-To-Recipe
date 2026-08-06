const notFound = (req, res) => {
  res.json({
    success: false,
    message: `Route ${req.originalUrl} not found`,
  });
};

export default notFound;
