"use client";
import HeaderGuest from '@/components/commons/HeaderGuest';
import HeaderRegistered from '@/components/commons/HeaderRegistered';
import ShowHome from '@/components/ShowHome';
import React from "react";

export default function Home() {
  // const isUserAuthenticated = useAppSelector(state => state.auth.isAuthenticated);
  const token = localStorage.getItem('token');

  return (
    <div className='mb-4'>
      {token ? <HeaderRegistered /> : <HeaderGuest />}
      <ShowHome />
    </div>
  );
}