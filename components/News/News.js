import React from "react";
import { NewsData } from "../../NewsData";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
function News({ currentItems }) {
  return (
    <>
      <div class="container">
        <div class="comman-head mb-5">
          <h4 class="heading-3 darkcolor mb-3">
            <span>News & Media</span>
          </h4>
          <h2 class="heading-1 mb-3">
            <span class="darkcolor">Baazi Games </span>
            <span class="bluecolor">in News & Media</span>
          </h2>
        </div>
        <div class="newsmedia row">
          {currentItems &&
            currentItems.map((item) => (
              <div
                class="pocomn col-md-4"
                key={item.id}
                style={{ padding: "15px !important" }}
              >
                <div class="featureimage">
                  <a href={item.url} target="_blank">
                    <img src={item.img} alt="image" />
                  </a>
                </div>
                <div class="post-content">
                  <a href={item.url} target="_blank">
                    <h4>{item.title}</h4>
                  </a>
                  <div class="artby">
                    <span>{item.Source}</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default function PaginatedItems({ itemsPerPage }) {
  const items = NewsData;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
    <div className="mainwraper">
      <News currentItems={currentItems} />
      <div
        style={{ margin: "50px", display: "flex", justifyContent: "center" }}
      >
        <ReactPaginate
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="< previous"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </div>
      </div>
    </>
  );
}
