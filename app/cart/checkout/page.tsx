"use client";
import HeaderGuest from '@/components/commons/HeaderGuest';
import HeaderRegistered from '@/components/commons/HeaderRegistered';
import CheckoutSummary from '@/components/ShowCheckoutSummary';
import { useAppSelector } from '@/redux/hooks';
import React from "react";

export default function Summary() {
  const isUserAuthenticated = useAppSelector(state => state.auth.isAuthenticated);
  
  return (
    <div className='mb-4'>
      {isUserAuthenticated ? <HeaderRegistered /> : <HeaderGuest />}
      <CheckoutSummary />
    </div>
  );
}
