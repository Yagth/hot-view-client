import { useFormik, ErrorMessage } from "formik";
import { useMutation } from "react-query";
import { IUser } from "src/types/User";

import { RegisterSchema } from "../schema/signup.schema";
import { signUpUserFn } from "../utils/authApi";

import Input from "./Input";
import Button from "./Button";
import Header from "./Header";
import Logo from "./Logo";
import ErrorSpan from "./ErrorSpan";

function SignUp() {
  const { mutate } = useMutation((userData: IUser) => signUpUserFn(userData), {
    onSuccess: (data) => {},
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      phonenumber: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema: RegisterSchema,
    onSubmit(values, actions) {
      const user: IUser = {
        ...values,
        phonenumber: parseInt(values.phonenumber, 10),
      };

      try {
        mutate(user);
      } catch (error: Error) {
        actions.setFieldError("general", error.message);
      } finally {
        actions.setSubmitting(false);
      }

      formik.resetForm();
    },
  });

  return (
    <div className="bg-gray-300 overflow-hidden">
      <Header title="signup" />
      <main>
        <div className="grid place-items-center h-screen overflow-auto">
          <div className="grid place-items-center bg-gray-100 hover:shadow-lg max-sm:w-3/4 sm:w-3/4 md:w-3/4 lg:w-2/6 rounded-lg">
            <Logo
              src="/hot-news-logo.png"
              logoClass="place-self-center mb-6 mt-3"
            />
            <div className="grid grid-flow-col place-content-evenly-center w-3/4 py-3">
              <form onSubmit={formik.handleSubmit}>
                <h1 className="place-self-start text-center pt-1 mb-2 text-white bg-orange-400 h-9 rounded-lg ">
                  Fill the following form please
                </h1>

                <div className="my-2">
                  <Input
                    inputName="email"
                    inputType="email"
                    inputId="email"
                    changed={formik.handleChange}
                    blur={formik.handleBlur}
                    acceptedValue={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <ErrorSpan errorMessage={formik.errors.email} />
                  )}
                </div>

                <div className="my-2">
                  <Input
                    inputName="phonenumber"
                    inputType="number"
                    inputId="phonenumber"
                    changed={formik.handleChange}
                    blur={formik.handleBlur}
                    acceptedValue={formik.values.phonenumber}
                  />
                  {formik.errors.phonenumber && formik.touched.phonenumber && (
                    <ErrorSpan errorMessage={formik.errors.phonenumber} />
                  )}
                </div>
                <div className="my-2">
                  <Input
                    inputName="firstName"
                    inputType="text"
                    inputId="firstName"
                    changed={formik.handleChange}
                    blur={formik.handleBlur}
                    acceptedValue={formik.values.firstName}
                  />
                  {formik.touched.firstName && formik.errors.firstName && (
                    <ErrorSpan errorMessage={formik.errors.firstName} />
                  )}
                </div>

                <div className="my-2">
                  <Input
                    inputName="lastName"
                    inputType="text"
                    inputId="lastName"
                    changed={formik.handleChange}
                    blur={formik.handleBlur}
                    acceptedValue={formik.values.lastName}
                  />
                  {formik.errors.lastName && (
                    <ErrorSpan errorMessage={formik.errors.lastName} />
                  )}
                </div>

                <div className="my-2">
                  <Input
                    inputName="password"
                    inputType="password"
                    inputId="password"
                    changed={formik.handleChange}
                    blur={formik.handleBlur}
                    acceptedValue={formik.values.password}
                  />
                  {formik.touched.password && formik.errors.password && (
                    <ErrorSpan errorMessage={formik.errors.password} />
                  )}
                </div>

                <div className="my-2">
                  <Input
                    inputName="passwordConfirm"
                    inputType="password"
                    inputId="passwordConfirm"
                    changed={formik.handleChange}
                    blur={formik.handleBlur}
                    acceptedValue={formik.values.passwordConfirm}
                  />
                  {formik.touched.passwordConfirm &&
                    formik.errors.passwordConfirm && (
                      <ErrorSpan errorMessage={formik.errors.passwordConfirm} />
                    )}
                </div>

                <Button
                  buttonType="submit"
                  text="sign up"
                  buttonClass="place-self-center"
                />
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SignUp;
