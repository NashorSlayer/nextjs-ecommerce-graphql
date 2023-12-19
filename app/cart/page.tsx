"use client";
import HeaderGuest from '@/components/commons/HeaderGuest';
import HeaderRegistered from '@/components/commons/HeaderRegistered';
import ShowCart from '@/components/ShowCart';
import { useAppSelector } from '@/redux/hooks';
import React from "react";

export default function Cart() {
  const isUserAuthenticated = useAppSelector(state => state.auth.isAuthenticated);
  
  return (
    <div className='mb-4'>
      {isUserAuthenticated ? <HeaderRegistered /> : <HeaderGuest />}
      <ShowCart />
    </div>
  );
}
