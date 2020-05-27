const { expect } = require('chai')
const {
  createAnonUser,
  getUserById,
  getUserByUsername
} = require('../../src/controllers/users')

describe('controllers/users', () => {

  it('should create anonymous user', async () => {

    createdUser = await createAnonUser()
    expect(createdUser).to.have.property('username')
    expect(createdUser.id).to.be.a('number')

  })
})