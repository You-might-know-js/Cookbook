exports.isLogged = (req, res, next) => {
  req.locals.user = {
    isLogged: true
  }

  next();
}
