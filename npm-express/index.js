const Joi = require('joi');
const express = require('express')
const app = express()
const port = 3000;

app.use(express.json());

const students = [
	{ id: 1, name: '김태호', age: 26 },
	{ id: 2, name: '이호진', age: 23 },
	{ id: 3, name: '박진우', age: 24 }
];

app.get('/', function (req, res) {
	res.send('Hello World')
})

app.get('/api/v1/students', (req, res)=>{
    res.send(students);
});

app.get('/api/v1/students/:id', (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id))  
    if(!student) res.status(404).send('The student with the given ID was not found');
    res.send(student);
});

app.post('/api/v1/students', (req, res) => {
	const schema = Joi.object({
		name: Joi.string().min(2).max(30).required(),
		age: Joi.number().integer()
	});

	const { error } = schema.validate(req.body);

	if (error) {
		res.status(400).send(error.details[0]?.message);
		return;
	}

	const lastElem = [...students].pop();

    const student = {
        id: lastElem?.id + 1 || 1,
        name: req.body.name,
		age: req.body.age
    };
    students.push(student);
    res.send(student);
});

app.put('/api/v1/students/:id', (req, res) => {
	const schema = Joi.object({
		name: Joi.string().min(2).max(30).required(),
		age: Joi.number().integer().required()
	});

	const { error } = schema.validate(req.body);

	if (error) {
		res.status(400).send(error.details[0]?.message);
	}
	console.log(req.params)
	const index = students.findIndex(s => s.id === parseInt(req.params.id));
	console.log(index)

	if (index < 0) {
		res.status(404).send('The student with the given ID was not found');
	}

    const student = {
        id: req.params.id,
        name: req.body.name,
		age: req.body.age
    };

	students[index] = student;
    res.send(student);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
})