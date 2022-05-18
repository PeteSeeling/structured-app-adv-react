
export default function CountryEntry({ author, country, content, date}) {
return(
    <div>
        <h3>Visited By: {author}</h3>
        <p>Country Visited: {country}</p>
        <p>Notes on {country}: {content}</p>
        <p>Date Written: {new Date(date).toLocaleString('en-us')}</p>
    </div>
)
}