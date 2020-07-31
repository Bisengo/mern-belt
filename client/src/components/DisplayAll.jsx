import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const Pets = props => {

    const [all, setAll] = useState([]);

    const getPets = () => {
        axios.get("http://localhost:8000/api/pets")
            .then(res => {
                console.log(res);
                setAll(res.data);
            }).catch(err => console.log(err));
    }

    useEffect( () => {
        getPets();
    }, []);

    const newAll = all.sort(function(a, b){
        var ptypeA = a.ptype.toLowerCase(), ptypeB = b.ptype.toLowerCase()
        if (ptypeA < ptypeB) //sort string ascending
            return -1 
        if (ptypeA > ptypeB)
            return 1
        return 0 //default return value (no sorting)
    })

    return (
        <div>
            <Link to="/new">add a pet to the shelter</Link>
            <h1>Pet Shelter</h1>
            <h4>These pets are looking for a home</h4>
            {newAll.map(pet =>
                <p key={pet._id}>{pet.name}     {pet.ptype} ||
                <Link to={`/pets/${pet._id}`}>Details</Link> ||
                <Link to={`/pets/${pet._id}/edit`}>Edit</Link>||
                </p>
            )}
        </div>
    );
}

export default Pets;