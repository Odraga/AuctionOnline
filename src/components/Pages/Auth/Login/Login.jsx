import style from './Login.module.css'

function Login() {
  return (
    <form className={style.form_login__container}>
      <div className={style.form_login__container__h2}>
        <h2>Login</h2>
      </div>
      <div>
        <div className={style.form_login__container__username}>
          <input type="text" placeholder="Username"/>
        </div>
        <div className={style.form_login__container__password}>
          <input type="password" placeholder="Password"/>
        </div>
        <div className={style.form_login__container__viewpassword}>
            <input type="checkbox" name="" id="viewPasswordLogin" />
            <label htmlFor="viewPasswordLogin">View Password</label>
          </div>
        <div className={style.form_login__container__login}>
          <button>
            Login
          </button>
        </div>
      </div>
    </form>
  )
}

export default Login