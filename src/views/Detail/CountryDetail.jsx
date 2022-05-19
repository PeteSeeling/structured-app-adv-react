import { useState } from 'react';
import { useUser } from '../../context/UserContext'
import { createEntry } from '../../services/entries';


export default function CountryForm({ onAddEntry }){
    const [country, setCountry] = useState('');
    const [content, setContent] = useState('')
    const { user } = useUser();

    const addCountry = async (e) => {
        e.preventDefault();
        const newCountry = await createEntry({ userId: user.id, content, country });
        onAddEntry(newCountry)
        setContent('')
    }

    return(
        <div>
            <form onSubmit={addCountry}>
            <p>Country Visited</p>
            
                <textarea
                aria-label='country name'
                value={country}
                placeholder='Country You Visited'
                onChange={({ target }) => setCountry(target.value)} />
                <p>Country Notes</p>

                <textarea
                aria-label='country details'
                placeholder='Details of The Country'
                value={content}
                onChange={({ target }) => setContent(target.value)} />

                <button
                aria-label='add country button' type='submit'>Add Country</button>
            </form>
        </div>
    )
}