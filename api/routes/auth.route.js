import express from 'express';
import { google, Signin, Signup } from '../controllers/auth.controller.js';

const router=express.Router();

router.post('/Signup', Signup);
router.post('/Signin', Signin);
router.post('/google', google);

export default router;

