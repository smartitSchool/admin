import React from 'react';
import { useForm } from 'react-hook-form';
const axios = require('axios').default;


const CoursePost = () => {
    // post course
    const { register, handleSubmit, reset } = useForm()
    const postCourse = (data) => {

        const courseFormData = new FormData();


        courseFormData.append('course_name', data.course_name)
        courseFormData.append('description', data.description)
        courseFormData.append('fee', data.fee)
        courseFormData.append('technologies', data.technologies)
        courseFormData.append('total_classes', data.total_classes)
        courseFormData.append('image', data.image[0])

        console.log(data.image[0])


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
                <input type='text' {...register("course_name")} placeholder='Course Name' /> <br />
                <textarea rows='7' {...register("description")} placeholder='Description' /> <br />
                <input type='number' {...register("fee")} placeholder='Course Fee' /> <br />
                <input type='text' {...register("technologies")} placeholder='Technologies' /> <br />
                <input type='text' {...register("total_classes")} placeholder='Total Classes' /> <br />
                <input type='file' {...register("image")} name='image' /> <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default CoursePost;