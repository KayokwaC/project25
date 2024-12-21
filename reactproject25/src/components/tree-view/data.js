const menus = [
    {
      label: "Home",
      to: "/home",
      children: []
    },
    {
      label: "Profile",
      to: "/profile",
      children: []
    },
    {
      label: "Settings",
      to: "/settings",
      children: [
        {
          label: "Security",
          to: "/settings/security",
          children: []
        }
      ]
    },
    {
      label: "Login",
      to: "/login",
      children: []
    },
    {
      label: "Register",
      to: "/register",
      children: []
    }
  ];
  
  export default menus;