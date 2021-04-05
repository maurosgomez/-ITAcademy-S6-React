import Book from './book'
import Library from './library.json'

// EXERCICI 4

export default () => {

    return (
       <div>
            {Library.map(book => {
                return(
                <>
                    <h3>{book.titulo}</h3>
                    <p>{book.autor}</p>
                </>
                ) 
            })}
        </div>
    );
}; 
