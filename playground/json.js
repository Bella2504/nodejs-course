const fs = require('fs')

const dataBuffer = fs.readFileSync('jsonData.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name = 'Iza'
user.age = 18

const userJSON = JSON.stringify(user)
fs.writeFileSync('jsonData.json', userJSON)