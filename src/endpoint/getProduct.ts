import { RequestHandler } from 'express';
import { jacto } from '../utils/jacto';

export const getProduct: RequestHandler = (req, res) => {
  res.status(200).json(jacto);
};
