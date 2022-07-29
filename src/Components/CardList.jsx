import React, {useState} from 'react'
import Card from './Card'

import ReactPaginate from 'react-paginate';

const PER_PAGE = 9;

const CardList = ({cards}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const offset = currentPage * PER_PAGE;

  const currentPageData = cards.slice(offset, offset + PER_PAGE)
  .map((card, index) => <Card card={card} key={card.id} />);

  const pageCount = Math.ceil(cards.length / PER_PAGE);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  return (
      <div className="card-grid">
        {/* {cards.map(card => {
          return <Card card={card} key={card.id} />
        })} */}
        {currentPageData}
        <ReactPaginate previousLabel={"<- Previous"} nextLabel={"Next ->"} pageCount={pageCount}
        onPageChange={handlePageClick} containerClassName={"pagination"} previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"} disabledClassName={"pagination__link--disabled"} activeClassName={"pagination__link--active"} />
      </div>
    )
}

export default CardList