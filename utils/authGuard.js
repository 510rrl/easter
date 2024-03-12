const withGuard = (req, res, next) => {
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  const apiGuard = (req, res, next) => {
    if (!req.session.logged_in) {
      res.status(403).json({ msg: 'you must login to perform this action' });
    } else {
      next();
    }
  };
  
  
  module.exports = { withGuard, apiGuard, withoutGuard };