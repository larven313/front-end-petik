import React, { useEffect } from "react";
import Layout from "./Layout";
import FormAddUser from "../components/FormAddUser";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice.js";

const AddUser = () => {
  // untuk memproteksi halaman ini agar tidak bisa pindah ke halaman dashboard
  // jika belum login
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
    // jika role bukan user maka akan redirect ke admin
    if (user && user.role !== "admin") {
      navigate("/dashboard");
    }
  }, [isError, user, navigate]);
  return (
    <Layout>
      <FormAddUser />
    </Layout>
  );
};

export default AddUser;
