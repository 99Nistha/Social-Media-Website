const { db } =require('../src/db/models')

before(async()=>{
    await db.sync()
})