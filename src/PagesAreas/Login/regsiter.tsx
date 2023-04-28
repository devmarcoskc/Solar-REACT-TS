import * as C from './styles';
import { useForm } from 'react-hook-form';
import { RegisterDataType } from '../../Types/types';
import { RegisterUser } from '../../Helpers/SendRegisterUser';
import { useState } from 'react';

type Props = {
    handleGoToLogin: () => void;
}

const Register = ({handleGoToLogin}: Props) => {
  const [errorMsgContact, setErrorMsgContact] = useState<boolean>(false);

  const {
    register,
    watch,
    handleSubmit,
    formState: {errors}
  } = useForm<RegisterDataType>();

  const watchPassword = watch('password');

  const submitData = async (data:RegisterDataType) => {
    const response = await RegisterUser(data);
    if(response) {
        alert('User registred');
        setErrorMsgContact(false);
        handleGoToLogin
    } else {
        setErrorMsgContact(true);
    }  
  }

  return (
    <div className='register-container'>
        <C.TextsArea>
            <h1>
                Register Here:
            </h1>
            <div className='login-and-signin'>
                <p>Already have an account?</p> <span onClick={handleGoToLogin}>Login here</span>
            </div>

            <C.Form
                onSubmit={handleSubmit(submitData)}
                method="POST"
            >
                <label>First Name:</label>
                <input
                    type="text"
                    {...register("name", {
                        required: true,
                        minLength: 3,
                    })}
                />
                {errors.name && (
                <span className="error-condition">
                    {errors.name.type === "required" && "This fild is required*"}
                    {errors.name.type === "minLength" && "Must contain at least 3 characters*"}
                </span>
                )}

                <label>Last Name:</label>
                <input
                    type="text"
                    {...register("lastname", {
                        required: true,
                        minLength: 4,
                    })}
                />
                {errors.lastname && (
                <span className="error-condition">
                    {errors.lastname.type === "required" && "This fild is required*"}
                    {errors.lastname.type === "minLength" && "Must contain at least 4 characters*"}
                </span>
                )}

                <label>Your e-mail address:</label>
                <input 
                    type='text' 
                    placeholder='exemple@gmail.com'
                    {...register("email", {
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })}
                />
                {errors.email && (
                    <span className='error-condition'>
                        {errors.email.type === "required" && "This fild is required*"}
                        {errors.email.type === "pattern" && "Digit a valid email*"}
                    </span>
                )}

                <label>Your password:</label>
                <input
                    type="password"
                    placeholder='******'
                    {...register("password", {
                    required: true,
                    minLength: 6,
                    })}
                />
                {errors.password && (
                    <span className="error-condition">
                        {errors.password.type === "required" && "This fild is required*"}
                        {errors.password.type === "minLength" && "Must contain at least 6 characters*"}
                    </span>
                )}

            <label>Confirm your password:</label>
            <input
              type="password"
              {...register("confirmpassword", {
                required: true,
                validate: (value) => value === watchPassword
              })}
            />
            {errors.confirmpassword && (
              <span className="error-condition">
                {errors.confirmpassword.type === "required" && "This fild is required*"}
                {errors.confirmpassword.type === "validate" && "The passwords must be the same*"}
              </span>
            )}
            {errorMsgContact &&
              <span className="error-condition">
                   This email or password already exists. Please chose another* 
              </span>
            }

                <button type='submit'>Sign up</button>
            </C.Form>
        </C.TextsArea>
    </div>
  )
}

export default Register;