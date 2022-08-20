import axios from "axios";

const apiUrl = 'http://localhost:8080/api/';

export const singleFileUpload = async (data) => {
    try {
        await axios.post(apiUrl + 'upload',data)
    } catch (error) {
        throw error;
    }
}
