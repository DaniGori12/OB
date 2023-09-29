import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { User } from '../../../models/user.class'
import { ROLES } from '../../../models/roles.enum'



export default function RegisterFormik() {

    let user = new User()
    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm: '',
        role: ROLES.USER
    }
    const registerSchema = Yup.object().shape(
        {
            username: Yup.string()
                .min(6, "Username too short")
                .max(12, "Username too long")
                .required("Username required"),

            email: Yup.string()
                .email("invalid format")
                .required("email required"),

            role: Yup.string()
                .oneOf([ROLES.USER, ROLES.ADMIN], 'You must select your role')
                .required('Role is required'),


            password: Yup.string()
                .min(8, "Pass too short")
                .required("pass is required"),

            confirm: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')

        }
    )

    const submit = (values) => {
        alert("register user")
    }
    return (

        <div>
            <h4>Register Formik</h4>
            <Formik
                initialValues={initialValues}
                validationSchema={registerSchema}

                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2))
                }}
            >
                {({
                    values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur
                }) => ( 
                    <Form>
                        <label htmlFor="username">username</label>
                        <Field id="username" type="text" name="username" placeholder="Pepe" />

                        {
                            errors.username && touched.username &&
                            (
                                <ErrorMessage name="username" component="div"></ErrorMessage>
                            )
                        }

                        <label htmlFor="email">email</label>
                        <Field id="email" type="text" name="email" placeholder="ejemplo@ejemplo.com" />
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
                        <label htmlFor="confirm"> Confirm Password</label>
                        <Field
                            id="confirm"
                            name="confirm"
                            placeholder="confirm"
                            type="password"
                        />


                        {
                            errors.confirm && touched.confirm &&
                            (
                                <ErrorMessage name="confirm" component="div"></ErrorMessage>

                            )
                        }
                        <button type="submit">Register Account</button>
                        {isSubmitting ? (<p>Login your credentials</p>) : null}



                    </Form>
                )
                }





            </Formik>
        </div>
    )
}
