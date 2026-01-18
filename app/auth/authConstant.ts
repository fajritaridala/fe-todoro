const LOGIN_CONSTANT = [
  {
    type: 'text',
    name: 'email',
    label: 'Email address',
    placeholder: 'name@example.com',
  },
  {
    type: 'password',
    name: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
  },
]

const REGISTER_CONSTANT = [
  {
    type: 'text',
    name: 'username',
    label: 'Full name',
    placeholder: 'e.g. John Doe',
  },
  {
    type: 'email',
    name: 'email',
    label: 'Email address',
    placeholder: 'name@example.com',
  },
  {
    type: 'password',
    name: 'password',
    label: 'Password',
    placeholder: 'Create a password',
  },
  {
    type: 'password',
    name: 'confirmPassword',
    label: 'Confirm Password',
    placeholder: 'Confirm your password',
  },
]

const TEXT_CONTENT = [
  {
    text: 'Focus.',
    delay: 100,
    color: 'text-white',
  },
  {
    text: 'Flow.',
    delay: 200,
    color: 'text-white',
  },
  {
    text: 'Finish.',
    delay: 250,
    color: 'text-danger',
  },
]

const authConstants = (page: string) => {
  switch (page) {
    case 'login':
      return LOGIN_CONSTANT
    case 'register':
      return REGISTER_CONSTANT
    default:
      return []
  }
}

export { authConstants, TEXT_CONTENT, LOGIN_CONSTANT, REGISTER_CONSTANT }
