import Link from 'next/link';
import { AuthForm } from '../../types/auth.interface';
import { useForm } from 'react-hook-form';
import CustomInput from '../UI/Input/Input';
import Dropdown from '../UI/Dropdown/Dropdown';

const AuthForm = ({ onSubmit, type, error }: AuthForm) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const options = [
    { value: 'Patient', label: 'Patient' },
    { value: 'Doctor', label: 'Doctor' },
    { value: 'Admin', label: 'Admin' },
  ];

  return (
    <>
      <div className="flex flex-1 flex-col justify-center px-6 mb-12 mt-4 lg:px-8 font-roboto">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-2 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
            {type === 'signup' ? 'Create a new account' : 'Log in account'}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {error && <p className="text-red-500 mb-2">{error}</p>}
          <form className="space-y-4 " onSubmit={handleSubmit(onSubmit)}>
            <CustomInput
              label="Email address"
              placeholder="Email"
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              register={register}
              errors={errors.email}
              required={true}
              cytest="auth-email"
            />

            {type !== 'signin' && (
              <>
                <div className="flex gap-4">
                  {' '}
                  <CustomInput
                    label="Name"
                    placeholder="Your name"
                    id="name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    register={register}
                    errors={errors.name}
                    required={true}
                    cytest="auth-name"
                  />{' '}
                  <CustomInput
                    label="Last Name"
                    placeholder="Your last name"
                    id="lastName"
                    type="text"
                    name="lastName"
                    autoComplete="lastName"
                    register={register}
                    errors={errors.lastName}
                    required={true}
                    cytest="auth-lastName"
                  />
                </div>
                <Dropdown
                  options={options}
                  label={'Your Role'}
                  register={register}
                  errors={errors.role}
                  required={true}
                  name="role"
                  id="role"
                  cytest="auth-role"
                />
              </>
            )}

            <CustomInput
              label="Password"
              placeholder="Password"
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              register={register}
              errors={errors.password}
              required={true}
              cytest="auth-password"
            />

            <div>
              <button
                type="submit"
                className="blue_btn w-full"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? 'Loading...'
                  : type === 'signup'
                  ? 'Sign up'
                  : 'Log in'}
              </button>
            </div>
          </form>
          {type !== 'signin' ? (
            <p className="mt-4 text-center text-xl text-gray-500">
              Already have an account?{' '}
              <Link
                href="/login"
                className="font-semibold leading-6 text-gray-600 hover:text-gray-400 transition-colors "
                data-cy="link-to-login-page"
              >
                Sign in
              </Link>
            </p>
          ) : (
            <p className="mt-4 text-center text-xl text-gray-500">
              Don&apos;t have an account?{' '}
              <Link
                href="/sign-up"
                className="font-semibold leading-6 text-gray-600 hover:text-gray-400 transition-colors "
                data-cy="link-to-signup-page"
              >
                Sign up
              </Link>
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default AuthForm;
