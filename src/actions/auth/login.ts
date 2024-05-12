'use server'

import { signIn } from '@/auth.config';

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {

    console.log(Object.fromEntries(formData));
    await signIn('credentials', {
      ...Object.fromEntries(formData),
      redirect: false
    });

    return 'success';

  } catch (error) {
    
    return 'Las credenciales no son válidas'

  }
}