const Filter = ({ items, selectedGenre, onClickFilter }) => {
    return (  
        <div className="col-lg-2">
            <ul className="list-group">
                {
                    items.map( item => {
                        return (
                            <li 
                                className={ selectedGenre === item ? "list-group-item active" : "list-group-item"}
                                style={{cursor:'pointer'}}
                                onClick={() => onClickFilter(item)}
                            >
                                
                                {item}
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}
 
export default Filter;