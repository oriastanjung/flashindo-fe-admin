import api from "../..";
import axios from "axios";
import { ENDPOINT } from "../../index";

const getAllUsers = async () => {
    try {
        const allUsers = await api.get(ENDPOINT.USERS);
        return allUsers.data
    } catch (error) {
        throw error
    }
}

const changeStatusUser = async (id) => {
    try {
        const response = await api.put(`${ENDPOINT.USERS}/change-status-user/${id}`)
        return response.data
    } catch (error) {
        throw error
    }
}

const deleteUser = async (id) => {
    try {
        const deletedUser = await api.delete(`${ENDPOINT.USERS}/${id}`)
        return deletedUser.data
    } catch (error) {
        throw error
    }
}

export {
    getAllUsers,
    changeStatusUser,
    deleteUser
}