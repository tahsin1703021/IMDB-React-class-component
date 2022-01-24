import _ from "lodash";

const Pagination = (props) => {
  const { totalItems, pageCount, activePage, onClickPage } = props;
  const totalPages = Math.ceil(totalItems/pageCount);
  const pages = _.range(1, totalPages + 1, 1);
  if( totalItems <= pageCount ) return null;
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li 
            style={{cursor:'pointer'}}
            onClick={ () => activePage - 1 >= 1 ? onClickPage(activePage -1) : null } 
            className="page-item"
        >
            <a className="page-link">
              Previous
            </a>
        </li>
        {
            pages.map((page) => {
                return (
                    <>
                        <li 
                            style={{cursor:'pointer'}} 
                            onClick={() => onClickPage(page) } 
                            className={ activePage === page ? "page-item active" : "page-item"}
                        >
                            <a className="page-link">
                                {page}
                            </a>
                        </li>
                    </>
                  );
                }
            )
        }

        <li className="page-item" 
            style={{cursor:'pointer'}} 
            onClick={ () => activePage + 1 <= totalPages ? onClickPage(activePage +1) : null }
        >
            <a className="page-link">
              Next
            </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
