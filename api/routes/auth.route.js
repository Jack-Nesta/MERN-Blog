import express from 'express';
import { Signin, Signup } from '../controllers/auth.controller.js';

const router=express.Router();

router.post('/Signup', Signup);
router.post('/Signin', Signin);

export default router;

