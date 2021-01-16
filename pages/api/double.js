export default (req, res) => {
  let value = req.query.value;
  value = parseInt(value, 10) * 2;
  res.json({ value });
};
