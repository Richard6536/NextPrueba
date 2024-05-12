'use client'

import React, { useReducer } from 'react'
import { registerReducer } from './registerReducer';
import { RegisterContext } from './RegisterContext';
import { z } from 'zod';
import { DetailRegister } from '@/app/auth/register/model/DetailsRegister';
import { EmailRegister } from '@/app/auth/register/model/EmailRegister';

export interface RegisterState {
    email: string;
    password: string,
    name: string;
    lastName: string;
    fleetName: string;
    segment: string;
}

const initialState: RegisterState = {
    email: '',
    password: '',
    name: '',
    lastName: '',
    fleetName: '',
    segment: ''
}

interface Props {
    children: JSX.Element | JSX.Element[];
}

export const RegisterProvider = ( { children } : Props ) => {
 
    const [state, dispatch] = useReducer(registerReducer, initialState);

    const setEmail = ( email : z.infer<typeof EmailRegister> ) => {
        dispatch({ type: 'setEmail', payload: email })
    }

    const setDetails = ( register : z.infer<typeof DetailRegister>  ) => {
        dispatch({ type: 'setRegister', payload: register })
    }

  return (
    <RegisterContext.Provider value={{
        ...state,

        //Methods
        setEmail,
        setDetails
    }}>
        { children }
    </RegisterContext.Provider>
  )
}
