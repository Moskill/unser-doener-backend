const range = (req, res, next) => {
  res.header('Access-Control-Expose-Headers: Content-Encoding');
  res.header('Access-Control-Expose-Headers: *');
  res.header('Content-Range: menu 1-24/*');
  next();
}

export default range;