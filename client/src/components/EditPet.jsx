import React, { useState, useEffect } from 'react';
import { navigate, Link } from '@reach/router';
import axios from 'axios';

const EditPet = props => {
    const [name, setName] = useState("");
    const [ptype, setPType] = useState("");
    const [description, setDescription] = useState("");
    const [skillOne, setSkillOne] = useState("nothing");
    const [skillTwo, setSkillTwo] = useState("nothing");
    const [skillThree, setSkillThree] = useState("nothing");
    const [errors, setErrors] = useState({});

    useEffect( () => {
        axios.get(`http://localhost:8000/api/pets/${props._id}`)
            .then(res => {
                console.log(res);
                setName(res.data.name);
                setPType(res.data.ptype);
                setDescription(res.data.description);
                setSkillOne(res.data.skillOne);
                setSkillTwo(res.data.skillTwo);
                setSkillThree(res.data.skillThree);
            }).catch(errors => console.log(errors));
    }, [props._id]);

    const UpdatePet = e => {
        e.preventDefault();
        const PetToUpdate = {name, ptype, description, skillOne, skillTwo, skillThree};
        axios.put(`http://localhost:8000/api/pets/${props._id}`, PetToUpdate)
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
            <h4>Edit {name}</h4>
            <form onSubmit={UpdatePet}>
                <p>
                    <label>Name</label>
                    <input type="text" onChange = {(e)=>setName(e.target.value)} value={name} />
                    { errors.name ? errors.name.properties.message : "" }
                </p>
                <p>
                    <label>Type</label>
                    <input type="text" onChange = {(e)=>setPType(e.target.value)} value={ptype} />
                    { errors.ptype ? errors.ptype.properties.message : "" }
                </p>
                <p>
                    <label>Description</label>
                    <textarea type="text" onChange = {(e)=>setDescription(e.target.value)} value={description} ></textarea>
                    { errors.description ? errors.description.properties.message : "" }
                </p>
                <p>
                    <label>Skill 1</label>
                    <input type="text" onChange = {(e)=>setSkillOne(e.target.value)} value={skillOne} />
                    { errors.skillOne ? errors.skillOne.properties.message : "" }<br/>
                    <label>Skill 2</label>
                    <input type="text" onChange = {(e)=>setSkillTwo(e.target.value)} value={skillTwo} />
                    { errors.skillTwo ? errors.skillTwo.properties.message : "" }<br/>
                    <label>Skill 3</label>
                    <input type="text" onChange = {(e)=>setSkillThree(e.target.value)} value={skillThree} />
                    { errors.skillThree ? errors.skillThree.properties.message : "" }<br/>
                </p><br/>

                <input type="submit" value="Edit Pet" />
            </form>
        </div>
    );
}

export default EditPet;

