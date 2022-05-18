import { Link } from 'react-router-dom';
import { signOutUser, getUser } from '../../services/user';
import { useUser } from '../../context/UserContext';

export default function Header(){
    const currentUser = getUser();
    const { user, setUser } = useUser(currentUser || { email: null });

    const handleSignOut = async () => {
        setUser('');
        await signOutUser();
    }



    return (
        <>
        <div>
            <Link to=''><p>Link to List View</p></Link>
            <Link to='/login'><p>Link to Login Page</p></Link>
            <button onClick={handleSignOut}>Sign Out</button>
        </div>
        </>
    )
}