const express = require('express')

const router = express.Router()

async function test(req, res) {
	const { a, b, c, d } = req.params
	return res.status(200).send({ a, b, c, d })
}

// downloads or updates based on the platform and current version
router.get('/:a/:b/:c/:d', test)

module.exports = router
