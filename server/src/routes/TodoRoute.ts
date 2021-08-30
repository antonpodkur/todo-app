import * as todoController from '../controllers/TodoController';
import express, { Router, Request, Response } from 'express';
import mongoose from 'mongoose';
import todo from '../models/Todo';
import user from '../models/User';
import { ObjectId } from 'bson';

const router: Router = express.Router();

const id = "612cac945c4f19990f285e81";

router.post('/create', async (req: Request, res: Response) => {
    try{
        const newtodo = todoController.create(req.body.task, id);
        res.status(200).send(newtodo)
    } catch(e) {
        res.status(500).send({error: e.message})
        throw e;
    }

    // try {
    //     const newtodo = await todo.create(req.body.task, req.body.user_id);
    //     console.log(newtodo);
    //     res.status(200).send(newtodo);
    // } catch (e) {
    //     res.status(500).send({error: e.message})
    // }
});

export default router;