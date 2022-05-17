import { Link } from 'react-router-dom';

export default function Header(){

    return (
        <>
        <div>
            <Link to=''><p>Link to List</p></Link>
            <Link to=''><p>Link to Login Page</p></Link>
            <button>Sign Out</button>
        </div>
        </>
    )
}