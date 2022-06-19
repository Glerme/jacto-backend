import { Router } from 'express';
import { getProduct } from '../endpoint/getProduct';

const router = Router();

/**
 * GET /product
 * @tag product
 * @response 200
 * @response default
 * @responseContent {Error} default.application/json
 */
router.get('/product', getProduct);

export default router;
