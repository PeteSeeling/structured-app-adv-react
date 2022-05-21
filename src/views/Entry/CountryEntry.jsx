import { useState } from "react"
import { updateEntryById, deleteEntryById } from "../../services/entries";

export default function CountryEntry({ id, author, country, content, date, setSubmitChange }) {
    const [editing, setEditing] = useState(false)
    const [owned, setIsOwned] = useState(false)

    function toggleEditing(){
        setEditing((prevState) => {
            return !prevState
        })
    }
    function isOwned(){
        setIsOwned((prevState) => {
            return !prevState
        })

    }

    let item;
if(editing === true) item = (
    <div>
        <input placeholder="edit country name" defaultValue={country} onChange={(e) => updateEntryById(id, content, e.target.value)}></input>
        <input placeholder="edit country notes" defaultValue={content} onChange={(e) => updateEntryById(id, e.target.value, country)}></input>
        <button onClick={() => {
              setSubmitChange((prevState) => {
                return !prevState
            })
            toggleEditing()}}>Close</button>
    
    </div>
)
if(editing === false){
    item = (
        <><h3>Visited By: {author}</h3><p>Country Visited: {country}</p><p>Notes on {country}: {content}</p><p>Date Written: {new Date(date).toLocaleString('en-us')}</p><button onClick={toggleEditing}>Edit1</button><button onClick={deleteEntryById}>Delete</button></>
    )
    if(owned === false){
        <><h3>Visited By: {author}</h3><p>Country Visited: {country}</p><p>Notes on {country}: {content}</p><p>Date Written: {new Date(date).toLocaleString('en-us')}</p><button onClick={}>Copy</button></>

    }
}
return(
    <div>
     {item}
    </div>
)
}