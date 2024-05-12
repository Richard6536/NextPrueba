
import { createContext } from 'react';
import { z } from 'zod';
import { DetailRegister } from '@/app/auth/register/model/DetailsRegister';
import { EmailRegister } from '@/app/auth/register/model/EmailRegister';

interface RegisterContextProps {
    password: string,
    email: string,
    name: string,
    lastName: string,
    fleetName: string,
    segment: string,

    //Methods
    setEmail: ( email : z.infer<typeof EmailRegister> ) => void
    setDetails: ( register : z.infer<typeof DetailRegister> ) => void
}

export const RegisterContext = createContext( {} as RegisterContextProps )