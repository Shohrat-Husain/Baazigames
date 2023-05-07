import React from "react";
import styles from "./style.module.css";
import PaginatedItems from '../../components/News/News';
function index() {
  return (
    <div>
     <PaginatedItems itemsPerPage={9} />
    </div>
  );
}

export default index;
