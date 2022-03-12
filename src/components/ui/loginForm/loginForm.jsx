import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { logIn } from '../../../store/auth';

const LoginForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [data, setData] = useState({ email: '', password: '' });
  // const [errors, setErrors] = useState({});

  /* Here I use Validation with Yup library */
  // const validationScheme = yup.object().shape({
  //   password: yup
  //     .string()
  //     .required('Password must be specified')
  //     .matches(/(?=.*[A-Z])/, 'Password should have at least 1 capital letter')
  //     .matches(/(?=.*[0-9])/, 'Password should have at least 1 digit')
  //     .matches(/^\S+$/, "Password shouldn't have any spaces")
  //     .matches(/(?=.{8,16})/, 'Password length should be more than 8'),
  //   email: yup.string().required('Email must be specified').email('Email input is invalid'),
  // });

  // const validate = async () => {
  //   try {
  //     await validationScheme.validate(data);
  //     setErrors({});
  //     return true;
  //   } catch (error) {
  //     setErrors({ [error.path]: error.message });
  //     return false;
  //   }
  // };

  // useEffect(() => {
  //   validate();
  // }, [data]);

  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // validate().then((isValid) => {
    //   if (!isValid) return;
    const redirect = history.location.state?.from.pathname
      ? history.location.state.from.pathname
      : '/';
    dispatch(logIn(data, redirect));
    // });
  };

  return (
    <>
      <h3 className="mb-4">Login</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" value={data.email} name="email" onChange={handleChange} />
        <input type="password" value={data.password} name="password" onChange={handleChange} />
        <Button type="submit">Log in</Button>
      </form>
    </>
  );
};

export default LoginForm;
