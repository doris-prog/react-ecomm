import React from "react";

export default function UserLogin() {
    return (
        <div>
            <h2>Login</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}>
                {(formik) => (
                    <Form >
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <Field
                                type="email"
                                className="form-control"
                                id="email"
                                name="email" />
                            {formik.errors.email && formik.touched.email ? <div className="text-danger">{formik.errors.email}
                            </div> : null}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <Field
                                type="password"
                                className="form-control"
                                id="password"
                                name="password" />
                            {formik.errors.password && formik.touched.password ? <div className="text-danger">{formik.errors.password}
                            </div> : null}
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary mb-3"
                            disabled={formik.isSubmitting}>
                            Register
                        </button>
                    </Form>
                )}
            </Formik>

        </div>
    )
}