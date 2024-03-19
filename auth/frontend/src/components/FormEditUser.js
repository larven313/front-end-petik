import React from "react";

const FormEditUser = () => {
  return (
    <div>
      <h1 className="title">Users</h1>
      <h2 className="subtitle">Update User</h2>
      <div class="card is-shadowless">
        <div class="card-content">
          <div class="content">
            <form>
              <div class="field">
                <label class="label">Name</label>
                <input type="text" className="input" placeholder="Name" />
              </div>
              <div class="field">
                <label class="label">Email</label>
                <input type="text" className="input" placeholder="Email" />
              </div>
              <div class="field">
                <label class="label">Password</label>
                <input type="password" className="input" placeholder="*****" />
              </div>
              <div class="field">
                <label class="label">Confirm Password</label>
                <input type="password" className="input" placeholder="*****" />
              </div>
              <div class="field">
                <label class="label">Role</label>
                <div class="control">
                  <div class="select is-fullwidth">
                    <select>
                      <option value="admin">Admin</option>
                      <option value="user">User</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <button className="button is-success">Save</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormEditUser;
