import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import UsersController from '../controllers/UsersController';

const usersRouter = Router();
const usersController = new UsersController();


usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      code: Joi.number().required(),
      name: Joi.string().required(),
      birth_date: Joi.string().required(),
      avatar: Joi.string().required(),
    },
  }),
  usersController.create,
);

usersRouter.put(
  '/',
  celebrate({
    [Segments.BODY]: {
        id: Joi.string().allow(null, ''),
        code: Joi.number().allow(null, ''),
        name: Joi.string().allow(null, ''),
        birth_date: Joi.string().allow(null, ''),
        avatar: Joi.string().allow(null, ''),
    }
  }),
  usersController.update,
);

usersRouter.get(
  '/',
  usersController.index,
);

export default usersRouter;
