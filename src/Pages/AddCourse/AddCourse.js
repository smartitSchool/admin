import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import TextEditor from '../../Components/TextEditor/TextEditor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
const axios = require('axios').default;


const AddCourse = () => {
    const [description, setDescription] = useState('')
    const [fileName, setFileName] = useState('')
    const { register, handleSubmit, reset } = useForm()

    const handleFileNameSave = (e) => {
        setFileName(e.target.files[0].name)
    }




    const postCourse = (data) => {

        const courseFormData = new FormData();

        const tech = data.technologies.split(',');

        courseFormData.append('course_name', data.course_name)
        courseFormData.append('description', description)
        courseFormData.append('fee', data.fee)
        courseFormData.append('technologies', tech)
        courseFormData.append('total_classes', data.total_classes)
        courseFormData.append('image', data.image[0])

        console.log(data.technologies.split(','))


        axios.post('http://localhost:8081/api/training/addTraining', courseFormData)
            .then(res => {
                if (res.status === 200) {
                    alert('The Course is added')
                    reset()
                }
            })
    }
    return (
        <div>
            <h3>Upload Course</h3>
            <form onSubmit={handleSubmit(postCourse)} method='POST' encType='multipart/form-data'>
                <TextField
                    id="standard-multiline-static"
                    label="Course Name"
                    variant="outlined"
                    {...register("course_name")}
                    fullWidth
                    required
                />
                <br />
                <br />
                <TextEditor
                    setDescription={setDescription}
                    description={description}
                />
                <br />
                <br />
                <TextField
                    id="standard-multiline-static"
                    label="Course Fee"
                    variant="outlined"
                    {...register("fee")}
                    type='number'
                    style={{ width: '40%' }}
                    required
                />
                <br />
                <br />
                <TextField
                    id="standard-multiline-static"
                    label="Technologies"
                    variant="outlined"
                    {...register("technologies")}
                    type='text'
                    style={{ width: '40%' }}
                    required
                />
                <br />
                <br />
                <TextField
                    id="standard-multiline-static"
                    label="Total Classes"
                    variant="outlined"
                    {...register("total_classes")}
                    type='number'
                    style={{ width: '40%', marginBottom: '20px' }}
                    required
                />
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
                <br />
                <Button type='submit' variant='contained'>Add</Button>
            </form>
        </div>
    );
};

export default AddCourse;