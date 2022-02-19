import React from 'react';
import { useForm } from 'react-hook-form';
import CoursePost from './CoursePost/CoursePost';
import './Home.css';
const axios = require('axios').default;


const Home = () => {
    const { register, handleSubmit, reset } = useForm()




    // post service 
    const postService = (data) => {
        const serviceFormData = new FormData();


        serviceFormData.append('title', data.title)
        serviceFormData.append('description', data.description)
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
        console.log(data.image)
    }
    return (
        <div>
            <h1>Admin Pnale</h1>

            < CoursePost />

            <h3>Upload Service</h3>
            <form onSubmit={handleSubmit(postService)} className='input-form' method='POST' encType='multipart/form-data'>
                <input type='text' {...register("title")} placeholder='Service Title' /> <br />
                <textarea rows='7' {...register("description")} placeholder='Description' /> <br />
                <input type='number' {...register("price")} placeholder='Price' /> <br />
                <input type='text' {...register("technologies")} placeholder='Technologies' /> <br />
                <input type='file' {...register("image")} name='image' /> <br />
                <input type="submit" />
            </form>

        </div>
    );
};

export default Home;