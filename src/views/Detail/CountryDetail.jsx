import { useState } from 'react';
import { useUser } from '../../context/UserContext'
import { createEntry, deleteEntryById } from '../../services/entries';


export default function CountryForm({ onAddEntry, deleteEntryById }){
    const [country, setCountry] = useState('');
    const [content, setContent] = useState('')
    const { user } = useUser();
    const [isEditing, setIsEditing] = useState(false)

    const addCountry = async (e) => {
        e.preventDefault();
        const newCountry = await createEntry({ userId: user.id, content, country });
        onAddEntry(newCountry)
        setContent('')
    }

    let countryItem;

    if(isEditing){
        countryItem=(
       
            <form onSubmit={(e) =>{
                e.preventDefault()
                setIsEditing(false)
            }}>
            <p>Country Visited</p>

                <input
                aria-label='country name'
                value={country.text}
                placeholder='Country You Visited'
                onChange={({ target }) => setCountry(target.value)} />
                <button aria-label='submit item change'>Edit Country</button>

                <p>Country Notes</p>
                <textarea
                aria-label='country details'
                placeholder='Details of The Country'
                value={content}
                onChange={({ target }) => setContent(target.value)} />
                

                <button
                aria-label='add country button' type='submit'>Add Country</button>
            </form>
       
    )
} else {
countryItem = (
    <>
    <p>{country.text}</p>
    <button
    aria-label={`${country.text}-edit`}
    onClick={() => setIsEditing(true)}>
        Edit Country
    </button>
    <p>{content}</p>
    <button
    aria-label={`${content.text}-edit`}
    onClick={() => setIsEditing(true)}>
        Edit Content
    </button>
    </>
)
}

return(
    <div>
        { countryItem }
        <button
        onClick={() => deleteEntryById(country.id)}
        aria-label={`${country.text}=delete`}>Delete Country</button>
    </div>
)}