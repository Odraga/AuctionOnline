function Register() {
  return (
    <form >
      <div>
        <h2>Register</h2>
      </div>
      <div>
        <input type="text" placeholder="Firstname"/>
      </div>
      <div>
        <input type="text" placeholder="Lastname"/>
      </div>
      <div>
        <input type="email" name="" id="" placeholder="E-mail"/>
      </div>
      <div>
        <input type="text" name="" id="" placeholder="Phone"/>
      </div>
      <div>
        <input type="text" placeholder="Address"/>
      </div>
      <div>
        <input type="text" name="" id="" placeholder="City"/>
      </div>
      <div>
        <input type="text" placeholder="Province"/>
      </div>
      <div>
        <input type="text" placeholder="Postal Code"/>
      </div>
      <div>
        <input type="text" placeholder="Country"/>
      </div>
      <div>
        <input type="text" placeholder="Username"/>
      </div>
      <div>
        <input type="password" placeholder="password"/>
        <input type="checkbox" name="" id="viewPasswordRegister" />
        <label htmlFor="viewPasswordRegister">View Password</label>
      </div>
      <div>
        <button>
          Register
        </button>
      </div>
      <br />
    </form>
  )
}

export default Register