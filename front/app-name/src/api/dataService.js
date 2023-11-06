import axios from 'axios';

// Definición de la URL base para las solicitudes al servidor.
const BASE_URL = 'http://localhost:8080';

// Función asincrónica para recuperar grupos desde el servidor.
export const fetchGroups = async () => {
    // Utiliza Axios para hacer una solicitud GET a la URL de grupos.
    return axios.get(`${BASE_URL}/groups`)
}

// Función asincrónica para recuperar las personas de un grupo desde el servidor.
export const fetchPersonsByGroup = async (groupId) => {
    return axios.get(`${BASE_URL}/groups/persons/${groupId}`);
}

// Función asincrónica para recuperar los grupos de una persona desde el servidor.
export const fetchGroupsByPerson = async (personId) => {
    return axios.get(`${BASE_URL}/persons/groups/${personId}`);
}

export const fecthPersons = async () => {
    return axios.get(`${BASE_URL}/persons`);
}