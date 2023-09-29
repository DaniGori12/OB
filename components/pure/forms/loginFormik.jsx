import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'


const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
            .email("invalid format")
            .required("email required"),
        password: Yup.string().required("pass is required")
    }
)






const LoginFormik = () => {

    const initialCredentials = {
        email: '',
        password: ''
    }

    return (
        <div>
            <h4>Login Formik</h4>
            <Formik


                initialValues={initialCredentials}
                validationSchema={loginSchema}


                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2))
                    localStorage.setItem('credentials', values)
                }}  >



                {props => {
                    const {
                        values,
                        touched,
                        errors,
                        isSubmitting,
                        handleChange,
                        handleBlur
                    } = props


                    return (


                        <Form>
                            <label htmlFor="email">email</label>
                            <Field id="email" name="email" placeholder="ejemplo@ejemplo.com" />



                            {
                                errors.email && touched.email &&
                                (
                                    <ErrorMessage name="email" component="div"></ErrorMessage>
                                )
                            }

                            <label htmlFor="password">Password</label>
                            <Field
                                id="password"
                                name="password"
                                placeholder="pass"
                                type="password"
                             />


                            {
                                errors.password && touched.password &&
                                (
                                    <ErrorMessage name="password" component="div"></ErrorMessage>
                                )
                            }
                            <button type="submit">Submit</button>
                            {isSubmitting ? (<p>Login your credentials</p>) : null}

                        </Form>
                    )
                }}

            </Formik>
        </div>
    )
}


export default LoginFormik 