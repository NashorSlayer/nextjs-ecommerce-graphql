import ShowShoppingHistory from "@/components/ShowShoppingHistory";
import HeaderRegistered from '@/components/commons/HeaderRegistered';

const shoppingHistory = () => {
    return (
        <div className='mb-4'>
            <HeaderRegistered></HeaderRegistered><ShowShoppingHistory></ShowShoppingHistory>
        </div>
    );
}

export default shoppingHistory;