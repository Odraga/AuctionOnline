import style from "./Register.module.css"

function Register() {
  return (
    <form className={style.form_register__container}>
      <div className={style.form_register__container__h2}>
        <h2>Register</h2>
      </div>
      <div className={style.form_register__container__firstname}>
        <input type="text" placeholder="Firstname"/>
      </div>
      <div className={style.form_register__container__lastname}>
        <input type="text" placeholder="Lastname"/>
      </div>
      <div className={style.form_register__container__email}>
        <input type="email" name="" id="" placeholder="E-mail"/>
      </div>
      <div className={style.form_register__container__phone}>
        <input type="text" name="" id="" placeholder="Phone"/>
      </div>
      <div className={style.form_register__container__address}>
        <input type="text" placeholder="Address"/>
      </div>
      <div className={style.form_register__container__postalcode}>
        <input type="text" placeholder="Postal Code"/>
      </div>
      <div className={style.form_register__container__country}>
        <input type="text" placeholder="Country"/>
      </div>
      <div className={style.form_register__container__username}>
        <input type="text" placeholder="Username"/>
      </div>
      <div className={style.form_register__container__password}>
        <input type="password" placeholder="password"/>
      </div>
      <div className={style.form_register__container__viewpassword}>
        <input type="checkbox" name="" id="viewPasswordRegister" />
        <label htmlFor="viewPasswordRegister">View Password</label>
      </div>
      <div className={style.form_register__container__register}>
        <button>
          Register
        </button>
      </div>
    </form>
  )
}

export default Register