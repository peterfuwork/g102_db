const express = require('express');
const app = express();
const port = process.env.PORT || 3002;
const bodyParser = require('body-parser');
const queries = require('./queries');

app.use(bodyParser.json());

app.get('/', (req, res) => {
    queries.getAll().then(response => res.send(response))
})

app.get('/:id', (req, res) => {
    queries.getById(req.params.id).then(students => res.send(students))
})

app.post('/post', (req, res) => {
    queries.createStudent(req.body).then(student => res.send(student))
})

app.delete('/:id', (req, res) => {
    queries.deleteStudent(req.params.id).then(student => res.send(student)).then(res.sendStatus(204))
})

app.put('/:id', (req, res) => {
    queries.updateStudent(req.params.id, req.body).then(updatedStudent => res.send(updatedStudent[0]))
})

app.listen(port, () => {
    console.log(`listening on ${port}`)
})