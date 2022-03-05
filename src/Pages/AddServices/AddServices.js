import { Button, Container, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import TextEditor from '../../Components/TextEditor/TextEditor';
const axios = require('axios').default;



const AddServices = () => {
    const [fileName, setFileName] = useState('')
    const [description, setDescription] = useState('')
    const { register, handleSubmit, reset } = useForm()

    const handleFileNameSave = (e) => {
        setFileName(e.target.files[0].name)
    }


    // post service 
    const postService = (data) => {
        const serviceFormData = new FormData();


        serviceFormData.append('title', data.title)
        serviceFormData.append('description', description)
        serviceFormData.append('price', data.price)
        serviceFormData.append('technologies', data.technologies)
        serviceFormData.append('image', data.image[0])
        axios.post('http://localhost:8081/api/services/addService', serviceFormData)
            .then(res => {
                if (res.status === 200) {
                    alert('The Service is added')
                    reset();
                }
            })
    }
    return (
        <div>
            {/* <Dashboard/> */}

            <h3>Upload Service</h3>
            <Container>
                <form onSubmit={handleSubmit(postService)} className='input-form' method='POST' encType='multipart/form-data'>
                    <TextField
                        id="standard-multiline-static"
                        label="Title"
                        variant="outlined"
                        {...register("title")}
                        fullWidth
                        required
                    />
                    <br />
                    <br />
                    <TextEditor
                        setDescription={setDescription}
                        description={description}
                    />
                    <br /><br />
                    <TextField
                        id="standard-multiline-static"
                        label="Price"
                        variant="outlined"
                        {...register("price")}
                        type='number'
                        style={{ width: '40%' }}
                        required
                    />
                    <br />
                    <br />
                    <label className='input-file-label'>
                        <input
                            className='inputfile'
                            type="file"
                            name='image'
                            accept="image/png, image/jpeg, image/jpg"
                            {...register("image")}
                            onChange={(e) => handleFileNameSave(e)}
                            required
                        />

                        <FontAwesomeIcon icon={faUpload} className='font-size-a' />
                        <br />
                        {
                            fileName
                                ?
                                <span><span className='selected-file'>"{fileName}" </span>is selected</span> :
                                'Upload a image 2x1 in preferred (only JPG, PNG and JPEG) >1MB is required'
                        }
                    </label>
                    <Button type='submit' variant='contained'>Add</Button>

                </form>
            </Container>

        </div>
    );
};

export default AddServices;