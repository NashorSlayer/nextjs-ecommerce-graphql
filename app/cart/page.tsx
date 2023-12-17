import HeaderGuest from '@/components/commons/HeaderGuest';
import HeaderRegistered from '@/components/commons/HeaderRegistered';
import ShowCart from '@/components/ShowCart';

export default function Home() {
  return (
    <div className='mb-4'>
      <HeaderGuest></HeaderGuest><ShowCart></ShowCart>
    </div>
  );
}
