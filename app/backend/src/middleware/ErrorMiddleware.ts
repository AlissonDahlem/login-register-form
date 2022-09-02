import { ErrorRequestHandler } from 'express';

const errorMiddleware: ErrorRequestHandler = (err, _req, res, _next) => {
  const { name, message } = err;
  switch (name) {
    case 'conflict':
      res.status(409).json({ message });
      break;
    case 'missingFields':
      res.status(400).json({ message });
      break;
    default:
      res.status(500).json({ message });
      break;
  }
};

export default errorMiddleware;