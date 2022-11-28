import Router from '@koa/router'

import  * as users from './app/users/index.js'
import * as hunches from './app/hunches/hunches.js'
import * as games from './app/games/games.js'


export const router = new Router();

//router.get('/users', users.list)
router.post('/users',users.create)


//router.get('/hunches', hunches.list)
router.post('/hunches',hunches.create)

router.get('/games', games.list)




