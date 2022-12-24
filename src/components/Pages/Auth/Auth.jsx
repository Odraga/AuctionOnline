import Register from "./Register/Register"
import Login from "./Login/Login"

import style from "./Auth.module.css"

function Auth() {
  return (
    <div className={style.auth_login_register__container}>
      <Login />
      <Register />
    </div>
  )
}

export default Auth