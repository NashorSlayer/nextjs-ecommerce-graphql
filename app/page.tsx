import HeaderGuest from '@/components/commons/HeaderGuest';
import HeaderRegistered from '@/components/commons/HeaderRegistered';
import ShowHome from '@/components/ShowHome';

export default function Home() {
  const isUserAuthenticated = false; //Implementar método para ver si el usuario está autenticado o no

  return (
    <div className='mb-4'>
      {isUserAuthenticated ? <HeaderRegistered /> : <HeaderGuest />}
      <ShowHome />
    </div>
  );
}