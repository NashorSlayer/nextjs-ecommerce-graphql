import HeaderGuest from '@/components/commons/HeaderGuest';
import HeaderRegistered from '@/components/commons/HeaderRegistered';
import CheckoutSummary from '@/components/ShowCheckoutSummary';

export default function Summary() {
  const isUserAuthenticated = false; //Implementar método para ver si el usuario está autenticado o no
  
  return (
    <div className='mb-4'>
      {isUserAuthenticated ? <HeaderRegistered /> : <HeaderGuest />}
      <CheckoutSummary />
    </div>
  );
}
