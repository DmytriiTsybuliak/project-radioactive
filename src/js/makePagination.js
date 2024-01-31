import Pagination from "tui-pagination";
import 'tui-pagination/dist/tui-pagination.css';

function makePagination(perPage, totalPages) {

    const paginationEl = document.getElementById('tui-pagination-container');
    const visiblePages = totalPages < 3 ? totalPages : 3;
    const options = {
        totalItems: perPage * totalPages,
        itemsPerPage: perPage,
        visiblePages,
        centerAlign: true,
    };

    const pagination = new Pagination(paginationEl, options);

    if (visiblePages <= 1) {
        paginationEl.style.display = 'none';
    } else {
        paginationEl.style.display = 'block';
    }

    return pagination;
}

export { makePagination };