const express = require('express')
const router = express.Router()
const Customer = require('../models/Customer')


router.get('/', (req, res) => {
	Customer.forge().orderBy('create_time', 'DESC').fetchAll({
		withRelated: ['orders']
	}).then(customers => {
		res.json(customers)
	})
})

router.get('/:customerId', (req, res) => {
	const customerId = req.params.customerId
	new Customer({ 'id': customerId })
					.fetch()
					.then(customer => {
						res.json(customer)
					})	
})

router.post('/add', (req, res) => {
	const newCustomer = req.body
	Customer.forge(newCustomer)
		.save()
		.then(newCustomer => {
			res.json(newCustomer)
		})
})

router.put('/update', (req, res) => {
	const { id, name, tel, address } = req.body
	new Customer({id: id})
		.save({
			name, tel, address
		}, { patch: true })
		.then(updatedCustomer => {
			updatedCustomer.refresh({
				withRelated: ['orders']
			})
			.then(updatedCustomer => {
				console.log(updatedCustomer)
				res.json(updatedCustomer)
			})
		})
})

router.delete('/delete/:id', (req, res) => {
	console.log(req.params)
	new Customer({ id: req.params.id })
		.destroy()
		.then(deletedCustomer => {
			res.json(deletedCustomer)
		})
})

module.exports = router