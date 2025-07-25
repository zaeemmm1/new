import toast from "react-hot-toast";


export const validatePassword = (password) => {
    const rules = [
      { test: (pwd) => pwd.length >= 8, message: "Password must be at least 8 characters long." },
      { test: (pwd) => /[a-z]/.test(pwd), message: "Password must contain at least one lowercase letter." },
      { test: (pwd) => /[A-Z]/.test(pwd), message: "Password must contain at least one uppercase letter." },
      { test: (pwd) => /[0-9]/.test(pwd), message: "Password must contain at least one digit." },
      { test: (pwd) => /[!@#$%^&*]/.test(pwd), message: "Password must contain at least one special character (!@#$%^&*)." },
    ];
  
    for (const rule of rules) {
      if (!rule.test(password)) {
        toast.error(rule.message);
        return false;
      }
    }
}



// export const validatePassword = (password) => {
//   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

//   if (!passwordRegex.test(password)) {
//     toast.error(
//       "Password must be at least 8 characters long, and include an uppercase letter, a lowercase letter, a number, and a special character (!@#$%^&*)."
//     );
//     return false;
//   }
  
//   return true;
// };
