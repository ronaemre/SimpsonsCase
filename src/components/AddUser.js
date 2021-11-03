import React from "react";
import { useState } from "react";
import axios from "axios"

const AddMovie = () => {

    const [name, setName] = useState("");
    const [job, setJob] = useState("");
    const [image, setImage] = useState("");
    const [about, setAbout] = useState("");


    async function addUser() {
        /*    console.log(name, job, image, about) */
        const formData = new FormData();
        formData.append('name', name);
        formData.append('job', job);
        formData.append('image', image);
        formData.append('about', about);
        const result = await axios.post(`https://5fc9346b2af77700165ae514.mockapi.io/simpsons`, {
            name,
            job,
            avatar: image,
            about
        });
        alert("Karakter Kaydedildi")
    }
    return (
        <div className="container" style={{ backgroundColor: "pink", borderRadius: "20px", marginTop: "180px" }} data-testid="container">
            <div >
                <input
                    className="form-control"
                    id="disabledInput"
                    type="text"
                    placeholder="Fill The Form To Add A Simpsons.."
                    disabled
                />
                <div className="form-row">
                    <div className="form-group col-md-10" data-testid="name">
                        <label htmlFor="inputName">Name</label>
                        <input type="text" className="form-control" name="name" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group col-md-2" data-testid="job">
                        <label htmlFor="inputRating">Job</label>
                        <input type="text" className="form-control" name="rating" onChange={(e) => setJob(e.target.value)} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12" data-testid="image">
                        <label htmlFor="inputImage">Image URL</label>
                        <input type="text" className="form-control" name="imageURL" onChange={(e) => setImage(e.target.value)} />
                    </div>
                </div>
                <div className="form-row" >
                    <div className="form-group col-md-12" data-testid="about">
                        <label htmlFor="overviewTextarea">About</label>
                        <textarea
                            onChange={(e) => setAbout(e.target.value)}
                            className="form-control"
                            name="overview"
                            rows="5"
                        ></textarea>
                    </div>
                </div>
                <input
                    onClick={addUser}
                    type="submit"
                    className="btn btn-danger btn-block"
                    value="Add User"
                />
            </div >
        </div >
    );

}

export default AddMovie;
