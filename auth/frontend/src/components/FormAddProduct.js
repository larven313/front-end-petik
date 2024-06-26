import React from "react";

const FormAddProduct = () => {
  return (
    <div>
      <h1 className="title">Products</h1>
      <h2 className="subtitle">Add New Product</h2>
      <div class="card is-shadowless">
        <div class="card-content">
          <div class="content">
            <form>
              <div class="field">
                <label class="label">Name</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Product Name"
                />
              </div>
              <div class="field">
                <label class="label">Price</label>
                <input type="text" className="input" placeholder="Price" />
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

export default FormAddProduct;
