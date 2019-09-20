const supertest = require('supertest')
const app = require('../app')
const agent = supertest.agent(app)

describe('tests', () => {
	it('request 1', done => {
		agent
			.get('/api/sample/one/two/three/four')
			.expect(200)
			.then(res => {
				console.log(res.body)
				expect(res.body.a).toBe('one')
				done()
			})
	})

	it('request 2', done => {
		agent
			.get('/api/sample/one/two')
			.expect(404)
			.end(done)
	})
})
