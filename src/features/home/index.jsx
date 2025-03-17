import Header from "@/components/common/header";
import Sidebar from "@/components/common/sidebar";
import useLocalStorage from "@/hooks/useLocalStorage";
import { Loader } from "lucide-react";
import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

const HomeView = () => {
  const navigate = useNavigate();
  const { getLocalStorage } = useLocalStorage();
  const { loading } = useSelector((state) => state.global);
  const accessToken = getLocalStorage();
  const [isLoading, setIsLoading] = useState(true);
  

  const setLoading = (input) => {
    setIsLoading(input);
  };

  useEffect(() => {
    // if (!accessToken) {
    //   navigate("/");
    // }
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]);


  return (
    <div className="relative w-full animate-fade-in">
      <Header />
     
      <Outlet />
    </div>
  );
};

export default HomeView;
