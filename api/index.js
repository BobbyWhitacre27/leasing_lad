const express = require('express');
const apiRouter = require('express').Router();
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;
require('dotenv').config();

apiRouter.get('/', (req, res, next) => {
  res.send({
    message: 'API is under construction!',
  });
});

// place your routers here
// ROUTER: /api/users
const usersRouter = require('./users');
apiRouter.use('/users', usersRouter);

// ROUTER: /api/resident_card
const resident_CardRouter = require('./resident_card');
apiRouter.use('/resident_card', resident_CardRouter);


// ROUTER:
apiRouter.use('*', async (req, res, next) => {
  res.status(404).json({ message: '404 not found' });
});

module.exports = apiRouter;