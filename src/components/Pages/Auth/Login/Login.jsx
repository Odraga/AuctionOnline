function Login() {
  return (
    <form >
      <div>
        <h2>Login</h2>
      </div>
      <div>
        <div>
          <input type="text" placeholder="Username"/>
        </div>
        <div>
          <input type="password" placeholder="Password"/>
          <input type="checkbox" name="" id="viewPasswordLogin" />
          <label htmlFor="viewPasswordLogin">View Password</label>
        </div>
        <div>
          <button>Login</button>
        </div>
      </div>
    </form>
  )
}

export default Login