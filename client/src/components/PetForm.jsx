import React, { useState } from 'react';
import { navigate, Link } from '@reach/router';
import axios from 'axios';

const PetForm = props => {
    const [name, setName] = useState("");
    const [ptype, setPType] = useState("");
    const [description, setDescription] = useState("");
    const [skillOne, setSkillOne] = useState("nothing");
    const [skillTwo, setSkillTwo] = useState("nothing");
    const [skillThree, setSkillThree] = useState("nothing");
    const [errors, setErrors] = useState({});

    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        const newPet = {name, ptype, description, skillOne, skillTwo, skillThree};
        axios.post('http://localhost:8000/api/pets', newPet)
            .then(res => {
                console.log(res);
                if(res.data.errors) {
                    setErrors(res.data.errors);
                } else {
                    navigate("/");
                }
            }).catch(err => console.log(err));
    }

    return (
        <div>
            <Link to="/">back to home</Link>
            <h1>Pet Shelter</h1>
            <h4>Know a pet neeeding a home?</h4>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Name</label>
                    <input type="text" onChange = {(e)=>setName(e.target.value)}/>
                    { errors.name ? errors.name.properties.message : "" }
                </p>
                <p>
                    <label>Type</label>
                    <input type="text" onChange = {(e)=>setPType(e.target.value)}/>
                    { errors.ptype ? errors.ptype.properties.message : "" }
                </p>
                <p>
                    <label>Description</label>
                    <textarea type="text" onChange = {(e)=>setDescription(e.target.value)}></textarea>
                    { errors.description ? errors.description.properties.message : "" }
                </p>
                <p>
                    <label>Skill 1</label>
                    <input type="text" onChange = {(e)=>setSkillOne(e.target.value)}/>
                    { errors.skillOne ? errors.skillOne.properties.message : "" }<br/>
                    <label>Skill 2</label>
                    <input type="text" onChange = {(e)=>setSkillTwo(e.target.value)}/>
                    { errors.skillTwo ? errors.skillTwo.properties.message : "" }<br/>
                    <label>Skill 3</label>
                    <input type="text" onChange = {(e)=>setSkillThree(e.target.value)}/>
                    { errors.skillThree ? errors.skillThree.properties.message : "" }<br/>
                </p><br/>

                <input type="submit" value="Add Pet" />
            </form>
        </div>
    )
}



export default PetForm;
