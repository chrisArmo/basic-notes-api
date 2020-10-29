module.exports = handler => (req, res, next = null) =>
  Promise.resolve(handler(req, res, next))
    .then(res => res)
    .catch(({ message }) =>
      res.status(500).json({
        success: false,
        status: message,
        data: null
      }),
    );
