const express = require('express')
const router = express.Router()
const { people } = require('../data.js') 
const { getPeople, createPerson, createPersonPostman, updatePerson, deletePerson } = require('../controllers/peopleFunctions.js')

//! There are two ways to setup controller routes  

//! "/" = "/api/people"  



//todo                      1.  is below :  
 
// get /api/people
//* router.get('/',getPeople)
// Below post request gives data to the frontend so it can display the name in the javascript.html 
//* router.post('/',createPerson)
// Below API is for postman testing :
//* router.post('/postman',createPersonPostman)
// Below API is for postman testing  PUT req :
//* router.put('/:id',updatePerson)
// Below API is for postman testing  DELETE req :
//* router.delete('/:id',deletePerson)




//todo                      2. is below : reduce lines of code by chaining 


router.route("/").get(createPerson).post(createPerson);

router.route("/postman").post(createPersonPostman);

router.route("/:id").put(updatePerson).delete(deletePerson);




module.exports = router
