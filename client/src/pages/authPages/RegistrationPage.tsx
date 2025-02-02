import React from 'react';
import './styles/Auth.css';
import { object, ref, string } from 'yup';
import { useAppDispatch } from '../../app/store/store';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registrationThunk } from '../../entities/users/authSlice';
import { UserWithoutIdwithPassword } from '../../entities/users/types/userTypes';
import { useNavigate } from 'react-router-dom';

const schema = object().shape({
  name: string().nullable().trim().required('Обязательно для заполнения'),
  email: string().email().nullable().trim().required('Не email'),
  password: string()
    .trim()
    .required('Необходимо указать пароль')
    .min(5, 'пароль жолжен быть не менее 5 символов ')
    .max(20, 'пароль должен быть не более 20 символов'),
  cpassword: string()
    .trim()
    .required('Необходимо повторить пароль')
    .min(5, 'пароль жолжен быть не менее 5 символов ')
    .max(20, 'пароль должен быть не более 20 символов')
    .oneOf([ref('password')], 'Пароли не совпадают'),
});

const RegistrationPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      cpassword: '',
    },
  });

  const onHandleSubmit = async (formData: {
    name: string;
    email: string;
    password: string;
    cpassword: string;
  }): Promise<void> => {
    const user: UserWithoutIdwithPassword = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      isAdmin: false,
      basketId: null
    };
    void dispatch(registrationThunk(user));
    navigate('/sneakers')
  };

  return (
    <div className="page-container">
    <form className="auth-form" onSubmit={handleSubmit(onHandleSubmit)}>
      <label htmlFor="name">
        Имя:
        <input type="text" {...register('name')} />
        <span>{errors.name?.message}</span>
      </label>
      <br />
      <label htmlFor="email">
        Email:
        <input type="email" {...register('email')} />
        <span>{errors.email?.message}</span>
      </label>
      <br />
      <label htmlFor="password">
        Пароль:
        <input type="password" {...register('password')} />
        <span>{errors.password?.message}</span>
      </label>
      <br />
      <label htmlFor="cpassword">
        Проверка пороля:
        <input type="password" {...register('cpassword')} />
        <span>{errors.cpassword?.message}</span>
      </label>
      <div className="button-container">
        <button type="submit">Зарегистрироваться</button>
      </div>
    </form>
  </div>
  );
};
export default RegistrationPage;
