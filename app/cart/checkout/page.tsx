"use client";
import HeaderGuest from '@/components/commons/HeaderGuest';
import HeaderRegistered from '@/components/commons/HeaderRegistered';
import CheckoutSummary from '@/components/ShowCheckoutSummary';
import React from "react";

export default function Summary() {
  const token = localStorage.getItem('token');

  return (
    <div className='mb-4'>
      {token ? <HeaderRegistered /> : <HeaderGuest />}
      <CheckoutSummary />
    </div>
  );
}
