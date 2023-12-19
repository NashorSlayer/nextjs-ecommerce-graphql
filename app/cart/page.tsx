import HeaderGuest from '@/components/commons/HeaderGuest';
import HeaderRegistered from '@/components/commons/HeaderRegistered';
import ShowCart from '@/components/ShowCart';

export default function Cart() {
  const isUserAuthenticated = false; //Implementar método para ver si el usuario está autenticado o no
  
  return (
    <div className='mb-4'>
      {isUserAuthenticated ? <HeaderRegistered /> : <HeaderGuest />}
      <ShowCart />
    </div>
  );
}
