const response = (status, data, message, res) => {
  res.status(status).json({
    status,
    message,
    data: data,
  });
};
const response2 = (status, message, res) => {
  res.status(status).json({
    message: message,
    status: status,
  });
};

module.exports = { response, response2 };
