import { URL_BASE } from "../credentials";

const createAccount = async (
    email: string,
    password: string,
    name: string,
    lastName: string,
    fleetName: string,
    segment: string) => {

    try {

        const userData = {
            Email: email.toLowerCase(),
            Password: password,
            Name: name,
            LastName: lastName,
            CompanyName: fleetName,
            Segment: segment
        }

        const response = await fetch(`${ URL_BASE }/api/auth/createAccount`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            throw new Error('Error al crear la cuenta de usuario');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export default createAccount;