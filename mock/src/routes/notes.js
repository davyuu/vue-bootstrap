const express = require('express');
const { v1: uuid } = require('uuid');
const { notes } = require('../state');

const router = express.Router()

router.get('/', (_, res) => {
  return res.status(200).send(notes);
})

router.post('/', (req, res) => {
  const { note } = req.body;
  const newNote = {
    ...note,
    id: uuid()
  }

  if (Math.random() > 0.2) {
    notes.push(newNote)
    return res.status(200).send(newNote)
  }
  return res.status(500).send()
})

module.exports = router