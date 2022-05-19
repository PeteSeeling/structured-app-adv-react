import CountryForm from '../Detail/CountryDetail';
import { getEntries } from '../../services/entries';
import { useUser } from '../../context/UserContext';
import { useEffect, useState } from 'react';
import CountryEntry from '../Entry/CountryEntry';

export default function ListView({ onChange }){
    const [entries, setEntries] = useState([])
    const [loading, setLoading] = useState(true)
    const { user } = useUser();

    const fetchEntries = () => {
        getEntries()
            .then(setEntries)
            .finally(() => setLoading(false))
    };

    useEffect(() => {
        fetchEntries()
    }, [])
    return(
    <>
    <CountryForm onAddEntry={fetchEntries} />
    <div>
     <ul>
         {entries.length ?(
             entries.map(({ id, country, content, date }) => {
                 return(
                     <li aria-label='country list' key={id}>
                         <CountryEntry
                         author={user.email}
                         country={country}
                         content={content}
                         date={date}
                         onChange={onChange} />
                     </li>
                 );
             })
         ) : (
             <div>
                 <p>You have logged no countries visited so far...</p>
             </div>
         )}
     </ul>
    </div>
    </>
    )
}