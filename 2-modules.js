// CommonJs, every file is a module in node
//Modules - Encapsulated Code (only share minimum)



const names = require ('./4-names')
const sayHi = require('./5-utils')

sayHi('susan')
sayHi(names.john)