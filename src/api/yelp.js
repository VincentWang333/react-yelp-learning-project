import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer XeEZLMKmb_KkoWEGVW1-qYYc13Yqv5XfpXM69Z5U2xGrRskZ-vduryhUgRWL_Mprx1bn8fSsupdlCotQ5xjZvVVnWamhq0JWgB9RYcDQaK-72vCV01DiAf3i8iyLXnYx'
    }
});