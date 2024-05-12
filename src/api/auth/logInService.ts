import { URL_BASE } from "../credentials";

const logIn = async ( email: string, password: string ) => {

    try {

        const data = {
            Email: email.toLowerCase(),
            Password: password
        }

        const response = await fetch(`${ URL_BASE }/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Error');
        }

        const dataResponse = await response.json();
        return dataResponse;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export default logIn;