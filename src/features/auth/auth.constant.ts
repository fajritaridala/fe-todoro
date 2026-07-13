const AUTH_CONSTANT = {
  brand: "Todoro.",
  description:
    "Your simple companion for daily productivity. Organize tasks and stay in the zone.",
  image: {
    src: "/logo-4.png",
    alt: "todoro-logo",
  },
  splitText: [
    {
      text: "Focus.",
      delay: 100,
      color: "text-white",
    },
    {
      text: "Flow.",
      delay: 200,
      color: "text-white",
    },
    {
      text: "Finish.",
      delay: 250,
      color: "text-danger",
    },
  ],
  login: {
    footer: {
      label: "Don`t have an account?",
      link: {
        label: "Create account",
        href: "/register",
      },
    },
    form: [
      {
        type: "text",
        name: "email",
        label: "Email",
        placeholder: "name@example.com",
        icon: "MailFilledIcon",
      },
      {
        type: "password",
        name: "password",
        label: "Password",
        placeholder: "enter your password",
        icon: "LockIcon",
      },
    ],
  },
  register: {
    footer: {
      label: "Have an account?",
      link: {
        label: "Log in here",
        href: "/login",
      },
    },
    form: [
      {
        type: "text",
        name: "username",
        label: "Fullname",
        placeholder: "e.g. John Doe",
        icon: "UserIcon",
      },
      {
        type: "email",
        name: "email",
        label: "Email",
        placeholder: "name@example.com",
        icon: "MailFilledIcon",
      },
      {
        type: "password",
        name: "password",
        label: "Password",
        placeholder: "create a password",
        icon: "LockIcon",
      },
      {
        type: "password",
        name: "confirmPassword",
        label: "Confirm Password",
        placeholder: "confirm your password",
        icon: "LockIcon",
      },
    ],
  },
};

export default AUTH_CONSTANT;
