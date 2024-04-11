import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { IUser, onLoginSuccesss } from '../redux/slices/authSlice';
import { useAppDispatch } from '../hooks/useSelectorAndDispatch';

interface JwtPayload {
    given_name: string,
    family_name: string,
    picture: string,
    email: string,
}

export const AuthPage = () => {

    const dispatch = useAppDispatch();
    
    return (
        <div className="w-full h-[50vh] flex justify-center items-center">
            <GoogleLogin
                onSuccess={credentialResponse => {

                    const decryptedData = jwtDecode(credentialResponse.credential!) as JwtPayload;
                    console.log(decryptedData.given_name);

                    const storageUserData: IUser = {
                        first_name: decryptedData.given_name,
                        second_name: decryptedData.family_name,
                        avatar_img_url: decryptedData.picture,
                        email: decryptedData.email,
                    };

                    dispatch(onLoginSuccesss(storageUserData));
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
            />
        </div>

    );
};