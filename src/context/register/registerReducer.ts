import { z } from "zod";
import { DetailRegister } from "@/app/auth/register/model/DetailsRegister";
import { EmailRegister } from "@/app/auth/register/model/EmailRegister";
import { RegisterState } from "./RegisterProvider";

type RegisterAction =
  | { type: 'setRegister', payload: z.infer<typeof DetailRegister> }
  | { type: 'setEmail', payload: z.infer<typeof EmailRegister>  };

export const registerReducer = ( state: RegisterState, 
    action: RegisterAction ): RegisterState => {
    switch (action.type) {
        case 'setRegister':
            return {
                ...state,
                name: action.payload.name,
                lastName: action.payload.lastName,
                fleetName: action.payload.fleetName,
                segment: action.payload.segment,
            };
        case 'setEmail':
            return {
                ...state,
                email: action.payload.email,
                password: action.payload.password
            };
        default:
            return state;
    }
}