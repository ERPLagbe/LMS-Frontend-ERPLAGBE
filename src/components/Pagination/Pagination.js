import Link from "next/link";
import Image from "next/image";
import ArrowRightDark from "@/../public/assets/imgs/icon/arrow-right-dark.svg";



export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handlePageClick = (page) => {
    onPageChange(page);
  };

  return (
    <ul className="pagination mt-3">
      {/* Previous button */}
      <li>
        <Link href="#" className="pagination-link" onClick={handlePrev} >
          <Image className="pagination-icon" src={ArrowRightDark} alt="Prev" style={{transform: "rotate(180deg)"}}/>
        </Link>
      </li>
      
      {/* Render page numbers */}
      {Array.from({ length: totalPages }, (_, index) => (
        <li key={index}>
          <Link
            href="#"
            className={`pagination-link ${currentPage === index + 1 ? "active" : ""}`}
            onClick={() => handlePageClick(index + 1)}
          >
            {index + 1}
          </Link>
        </li>
      ))}

      {/* Next button */}
      <li>
        <Link href="#" className="pagination-link" onClick={handleNext}>
          <Image className="pagination-icon" src={ArrowRightDark} alt="Next" />
        </Link>
      </li>
    </ul>
  );
}
