const { db } = require('../src/db/models')
const chai = require('chai')
chai.use(require('chai-as-promised'))

before(async () => {
  await db.sync()
})
