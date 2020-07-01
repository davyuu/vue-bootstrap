/**
 * Mocking client-server processing
 */
import uuid from 'uuid/v1'

const notes = [
  {
    id: '1',
    title: 'Note1',
    body: 'Some content 1',
    lastUpdated: '2020-04-05T14:48:00.000Z'
  },
  {
    id: '2',
    title: 'Note2',
    body: 'Some content 2',
    lastUpdated: '2020-04-06T14:48:00.000Z'
  },
  {
    id: '3',
    title: 'Note3',
    body: 'Some content 3',
    lastUpdated: '2020-04-07T14:48:00.000Z'
  }
]

const LATENCY = 100

export default {
  getNotes(success) {
    setTimeout(() => success(notes), LATENCY);
  },

  createNote(note, success, error) {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        const newNote = {
          ...note,
          id: uuid()
        }
        notes.push(newNote)
        success(newNote)
      } else {
        error()
      }
    }, LATENCY)
  }
}
