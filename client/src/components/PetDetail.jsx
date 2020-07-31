import React, { useEffect, useState } from 'react';
import { navigate, Link } from '@reach/router';
import axios from 'axios';


export default props => {
    const [pet, setPet] = useState({});
    console.log("logging props below")
    console.log(props)

    useEffect( () => {
        axios.get(`http://localhost:8000/api/pets/${props._id}`)
            .then(res => { setPet(res.data)
        })
            .catch(errors => console.log(errors));
    }, [props._id])


    const remove = () => {
        axios.delete(`http://localhost:8000/api/pets/${props._id}`)
            .then(res => {
                console.log(res);
                navigate("/");
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <div>
                <Link to="/">back to home</Link><br/><br/>
                <button onClick={remove}>adopt {pet.name}</button>
                <h1>Pet Shelter</h1>
                <h4>Details about: {pet.name} </h4>
                <p><b>Pet type</b>: {pet.ptype}</p>
                <p><b>Description</b>: {pet.description}</p>
                <p><b>Skills</b>: {pet.skills}</p>
                <p>{pet.skillOne}</p>
                <p>{pet.skillOne}</p>
                <p>{pet.skillOne}</p>
            </div>
            <div>
            </div>
        </div>
    )
}