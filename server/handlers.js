// TODO: figure out why this function does not run when there is an error in the async function
exports.notFound = (req, res, next) => {
    const err = new Error('Not found 404');
    next(err);
  }

exports.renderErrorPage = (err, req, res, next) =>{

  const stack = err.stack;
  const errorMessage = err.message;

  if(process.env.NODE != 'production'){
    res.render('error', {
      stack: stack,
      message: errorMessage,
      user: {
        isLogged: true
      }
    })
  }else{
    res.render('error', {
      message: errorMessage,
      stack: '',
      user: {
        isLogged: true
      }
    })
  }
}
