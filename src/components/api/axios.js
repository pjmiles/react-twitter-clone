import axios from "axios";

const baseURL = 'https://robot-twitter.herokuapp.com/api/v2'

export const axiosInstanceReg = axios.create({
    baseURL: baseURL,
    // headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     'Content-Type': 'application/json',
    //   },
})

