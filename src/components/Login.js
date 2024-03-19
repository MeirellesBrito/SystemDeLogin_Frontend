function Login() {
  return (
    <div className="LoginFrom-wrap">
      <h2>Login</h2>
      <form className="login-from">
        <input type="email" name="email" placeholder="email" required />
        <input
          type="password"
          name="password"
          placeholder="password"
          required
        />
        <button type="submit" className="btn-login">
          login
        </button>
      </form>
    </div>
  );
}

export default Login;
