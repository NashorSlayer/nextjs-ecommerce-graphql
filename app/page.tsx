"use client";
import HeaderGuest from '@/components/commons/HeaderGuest';
import HeaderRegistered from '@/components/commons/HeaderRegistered';
import ShowHome from '@/components/ShowHome';
import { useAppSelector } from '@/redux/hooks';
import React from "react";

export default function Home() {
  const isUserAuthenticated = useAppSelector(state => state.auth.isAuthenticated);

  return (
    <div className='mb-4'>
      {isUserAuthenticated ? <HeaderRegistered /> : <HeaderGuest />}
      <ShowHome />
    </div>
  );
}