console.log("pet.controller.js");

const Pet = require("../models/pet.model");

class PetController {

    getAll(req, res) {
        Pet.find()
            .then(pets => res.json(pets))
            .catch(errors => res.json(errors));
    }

    create(req, res) {
        const newPet = new Pet(req.body);
        newPet.save()
            .then( () => res.json(newPet) )
            .catch( errors => res.json(errors) );
    }

    getOne(req, res) {
        Pet.findOne({_id: req.params._id})
            .then( pet => res.json(pet) )
            .catch( errors => res.json(errors) );
    }

    update(req, res) {
        Pet.findByIdAndUpdate({_id: req.params._id}, req.body, {runValidators: true})
            .then( () => res.json({msg: "ok"}) )
            .catch( errors => res.json(errors) );
    }

    remove(req, res) {
        Pet.findByIdAndRemove({_id: req.params._id})
            .then( () => res.json({msg: "ok"}) )
            .catch( errors => res.json(errors) );
    }

}

module.exports = new PetController();