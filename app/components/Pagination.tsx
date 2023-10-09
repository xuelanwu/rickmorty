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
    const result = [];
    for (let i = 0; i < totalPages; i++) {
      result.push(i + 1);
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
      <li className={styles.listItem} onClick={handlePrev}>
        &lt;
      </li>
      {pages.map((page, idx) => (
        <li
          key={page}
          className={styles.listItem}
          onClick={() => onPageChange(page)}
        >
          {page}
        </li>
      ))}
      <li className={styles.listItem} onClick={handleNext}>
        &gt;
      </li>
    </ul>
  );
};

export default Pagination;
