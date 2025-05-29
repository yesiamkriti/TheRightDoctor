const Person = require('../models/person.model');

exports.getAll = async (req, res) => res.json(await Person.find());
exports.create = async (req, res) => res.status(201).json(await new Person(req.body).save());
exports.update = async (req, res) => res.json(await Person.findByIdAndUpdate(req.params.id, req.body, { new: true }));
exports.remove = async (req, res) => res.json(await Person.findByIdAndDelete(req.params.id));
