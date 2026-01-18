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
    label: 'Username',
    placeholder: 'Enter your username',
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
    placeholder: 'Enter your password',
  },
  {
    type: 'password',
    name: 'confirmPassword',
    label: 'Confirm Password',
    placeholder: 'Confirm your password',
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

export default authConstants
