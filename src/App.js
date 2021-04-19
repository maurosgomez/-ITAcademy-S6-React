import Libro from './book.js';
import library from './library.json';

export default () => {

    const libreria = library.map(book => <Libro titulo={book.titulo} autor={book.autor} />)

    return (
        <div>
            {libreria}
        </div>
    );
};
