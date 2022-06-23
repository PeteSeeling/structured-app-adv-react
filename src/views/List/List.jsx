import CountryForm from '../Detail/CountryDetail';
import { getEntries } from '../../services/entries';
import { useUser } from '../../context/UserContext';
import { useEffect, useState } from 'react';
import CountryEntry from '../Entry/CountryEntry';

export default function ListView({}){
    const [entries, setEntries] = useState([])
    const [loading, setLoading] = useState(true)
    const [submitChange, setSubmitChange] = useState()
    const { user } = useUser();

    const fetchEntries = () => {
        getEntries()
            .then(setEntries)
            .finally(() => setLoading(false))
    };

    useEffect(() => {
        fetchEntries()
    }, [])

    useEffect(() => {
        fetchEntries()
    },[submitChange])

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
                         id={id}
                         author={user.email}
                         country={country}
                         content={content}
                         date={date}
                         setSubmitChange={setSubmitChange}
                    />
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