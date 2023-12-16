import HeaderGuest from '@/components/commons/HeaderGuest';
import HeaderRegistered from '@/components/commons/HeaderRegistered';
import ShowHome from '@/components/ShowHome';

export default function Home() {
  return (
    <div className='mb-4'>
      <HeaderRegistered></HeaderRegistered><ShowHome></ShowHome>
    </div>
  );
}
