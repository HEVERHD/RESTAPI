const express = require('express');
const tareasSchema = require('../models/tareas');

const router = express.Router();

//CRUD
//create - POST
router.post('/tareas', (req, res) => {
	const { name, description } = req.body;
	const tarea = new tareasSchema({
		name,
		description,
	});
	tarea
		.save()
		.then(() => res.send(tarea))
		.catch((error) => res.status(400).send(error));
});

// Obtener todas las tareas

router.get('/tareas', (req, res) => {
	tareasSchema
		.find()
		.then((tareas) => res.send(tareas))
		.catch((error) => res.status(400).send(error));
});

// Obtener una tarea por id
router.get('/tareas/:id', (req, res) => {
	tareasSchema
		.findById(req.params.id)
		.then((tarea) => res.send(tarea))
		.catch((error) => res.status(400).send(error));
});

// Actualizar una tarea por id
router.put('/tareas/:id', (req, res) => {
	tareasSchema
		.findByIdAndUpdate(req.params.id, req.body, { new: true })
		.then((tarea) => res.send(tarea))
		.catch((error) => res.status(400).send(error));
});

// Eliminar una tarea por id
router.delete('/tareas/:id', (req, res) => {
	tareasSchema
		.findByIdAndDelete(req.params.id)
		.then(() => res.send('Tarea eliminada'))
		.catch((error) => res.status(400).send(error));
});

module.exports = router;
