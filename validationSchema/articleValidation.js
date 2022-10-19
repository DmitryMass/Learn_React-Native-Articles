import * as yup from 'yup';

export const articleSchema = yup.object().shape({
  title: yup
    .string()
    .min(3, 'Мінімум 3 символи')
    .max(15, 'Максимум 15 символів')
    .required(`'Обов'язкове поле`),
  description: yup
    .string()
    .min(5, 'Мінімум 5 символів')
    .required(`Обов'язкове поле`),
  image: yup.string().min(5, 'Мінімум 5 символів'),
});
