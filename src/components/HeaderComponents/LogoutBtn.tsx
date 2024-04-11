import { useAppDispatch } from '../../hooks/useSelectorAndDispatch';
import {onLogOut} from '../../redux/slices/authSlice';
export const LogoutBtn = () => {

    const dispatch = useAppDispatch();

    return (
        <button 
            type="button" 
            className="border-2 border-solid border-black rounded-lg px-2 py-2"
            onClick={() => {
                dispatch(onLogOut());
            }}
        >
            Logout
        </button>
    );
};