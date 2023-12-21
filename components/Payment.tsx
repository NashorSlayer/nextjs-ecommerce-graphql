"use client"
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";


const Payment: React.FC = () => {

    const payment = useSelector((state: RootState) => state.payment);

    return (
        <>
            <form method="post" action={payment.url}>
                <input type="hidden" name="token_ws" value={payment.token_ws} />
                <input type="submit" value="Ir a pagar" />
            </form>
        </>
    );
}
export default Payment;