const logger = () => next => action => {
  console.log('THIS ACTION:', action);
  next(action);
};

export default logger;
