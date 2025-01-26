import axios from "axios"
import { baseUrl } from "../utils/baseUrl"

export const getMembers = () => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'GET',
            url: `${baseUrl}/member`
        })
        .then((res) => {
            resolve(res.data)
        })
        .catch((err) => {
            reject(err)
        })
    })
}


export const getUserTasks = () => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'GET',
            url: `${baseUrl}/user-module`
        })
        .then((res) => {
            resolve(res.data)
        })
        .catch((err) => {
            reject(err)
        })
    })
}