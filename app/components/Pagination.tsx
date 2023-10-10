"use client";

import styles from "./Pagination.module.css";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const mapPages = () => {
    const result: (number | string)[] = [];
    for (let i = 1; i <= totalPages; i++) {
      if (i === currentPage) result.push(i);
      else if (i === 1) result.push(i);
      else if (i === totalPages) result.push(i);
      else if (i === currentPage - 1) result.push(i);
      else if (i === currentPage + 1) result.push(i);
      else if (result[result.length - 1] != "...") result.push("...");
    }
    return result;
  };

  const pages = mapPages();

  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <ul className={styles.list}>
      <li className={styles.page} onClick={handlePrev}>
        &lt;
      </li>
      {pages.map((page, idx) =>
        page === "..." ? (
          <li key={`${page}-${idx}`} className={styles.ellipsis}>
            {page}
          </li>
        ) : (
          <li
            key={`${page}-${idx}`}
            className={`${styles.page} ${
              currentPage === +page ? styles.currentPage : ""
            }`}
            onClick={() => onPageChange(+page)}
          >
            {page}
          </li>
        )
      )}
      <li className={styles.page} onClick={handleNext}>
        &gt;
      </li>
    </ul>
  );
};

export default Pagination;
