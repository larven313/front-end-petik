import React, { useEffect } from "react";
import Layout from "./Layout";
import FormAddProduct from "../components/FormAddProduct";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice.js";

const AddProduct = () => {
  // untuk memproteksi halaman ini agar tidak bisa pindah ke halaman addProduct
  // jika belum login
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);
  return (
    <Layout>
      <FormAddProduct />
    </Layout>
  );
};

export default AddProduct;
