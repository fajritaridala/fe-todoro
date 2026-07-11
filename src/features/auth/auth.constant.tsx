import LockIcon from '@/src/components/icons/lock-icon'
import MailFilledIcon from '@/src/components/icons/mail-filled-icon'
import UserIcon from '@/src/components/icons/user-icon'

const LOGIN_CONSTANT = [
  {
    type: 'text',
    name: 'email',
    label: 'Email address',
    placeholder: 'name@example.com',
    icon: <MailFilledIcon />,
  },
  {
    type: 'password',
    name: 'password',
    label: 'Password',
    placeholder: 'enter your password',
    icon: <LockIcon />,
  },
]

const REGISTER_CONSTANT = [
  {
    type: 'text',
    name: 'username',
    label: 'Full name',
    placeholder: 'e.g. John Doe',
    icon: <UserIcon />,
  },
  {
    type: 'email',
    name: 'email',
    label: 'Email address',
    placeholder: 'name@example.com',
    icon: <MailFilledIcon />,
  },
  {
    type: 'password',
    name: 'password',
    label: 'Password',
    placeholder: 'create a password',
    icon: <LockIcon />,
  },
  {
    type: 'password',
    name: 'confirmPassword',
    label: 'Confirm Password',
    placeholder: 'confirm your password',
    icon: <LockIcon />,
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
