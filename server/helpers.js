
exports.flashMessage = (req, res, next) => {

    if(!req.session.messages){
        req.session.messages = []
    }

    req.addFlashMessage = addFlashMessage

    res.locals.messages = req.session.messages
    res.locals.removeMessage = removeMessage


    function addFlashMessage(type, msg){
      const message = {
        type: type,
        message: msg
      }

      this.session.messages.push(message)
    }

    function removeMessage(){
      req.session.messages = [];
    }

    next()
}
