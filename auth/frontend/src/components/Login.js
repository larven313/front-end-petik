import React from "react";

const Login = () => {
  return (
    <section class="hero has-background-grey-light is-fullheight is-fullwidth">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-4">
              <form className="box">
                <h1 className="title is-2">Sign In</h1>
                <div class="field">
                  <label class="label">Email</label>
                  <input type="text" className="input" placeholder="Email" />
                </div>
                <div class="field">
                  <label class="label">Password</label>
                  <input
                    type="password"
                    className="input"
                    placeholder="*****"
                  />
                </div>
                <div class="field mt-5">
                  <button className="button is-success is-fullwidth">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
