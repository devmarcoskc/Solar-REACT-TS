import * as C from './styles';
import {useState} from 'react';
import CompanyIcon from '../../assets/CompanySlogan.png';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Regsiter from './regsiter';
import { LoginDataType } from '../../Types/types';
import { CheckUsers } from '../../Helpers/checkusers';
import { useContext } from 'react';
import { Context } from '../../Contexts/Context';
import { useNavigate } from 'react-router-dom';
import loginBackgroundImg from '../../assets/Images/HomeImg.jpg';

type Props = {

}

const Login = (props: Props) => {
  const [registerIsNeeded, setRegisterIsNeeded] = useState(false);
  const [needUserNotFoundMsg, setNeedUserNotFoundMsg] = useState(false);
  const navigate = useNavigate();
  const {state, dispatch} = useContext(Context);

  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm<LoginDataType>();

  const handleGoToLogin = () => {
    setRegisterIsNeeded(false);
  }

  const submitUser = async (data: LoginDataType) => {
     let response = await CheckUsers(data.email, data.password);
     if(response.CheckingIfUserExistis === true ) {
        handleChangeUsersData(response.name);
        navigate("/");
     } else {
        setNeedUserNotFoundMsg(true);
     }
  }

  const handleChangeUsersData = (name: string) => {
    dispatch({
        type: 'CHANGE_NAME',
        payload: {
            name: name
        }
    });
    dispatch({
        type: 'CHANGE_LOG',
        payload: {
            isLogged: true
        }
    });
  }

  return (
    <div>
        <C.Section style={{backgroundImage:`url(${loginBackgroundImg})`}}>
        <C.Container>
            <Link to="/">Home</Link>
            <Link to="/">
                <img src={CompanyIcon}/>
            </Link>
            {!registerIsNeeded &&
                <div className='login-container'>
                    <C.TextsArea>
                        <h1>
                            Login Here:
                        </h1>
                        <div className='login-and-signin'>
                            <p>Doesn't have an account ?</p> <span onClick={() => setRegisterIsNeeded(true)}>Sign up here</span>
                        </div>
                    </C.TextsArea>
                    <C.Form
                        onSubmit={handleSubmit(submitUser)}
                    >
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
                                {errors.password.type === "minLength" && "Min lenght is 6 characteres*"}
                            </span>
                        )}
                        {needUserNotFoundMsg &&
                            <span className='error-condition'>
                                User not found, please check if your email or password is correct.
                            </span>
                        }

                    <button>Login</button>
                    <button onClick={() => setRegisterIsNeeded(true)}>Sign up</button>
                    </C.Form>
                </div>
            }
            {registerIsNeeded &&
                <Regsiter handleGoToLogin={handleGoToLogin}/>
            }
        </C.Container>
        </C.Section>
    </div>
  )
}

export default Login;