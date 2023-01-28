import { Paginate } from "components/Paginate/Paginate";
import { useState } from "react";
import { IBook } from "types";

export interface IProps {
  list: IBook[];
}

export const CustomPagination = ({ list }: IProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(10);

  const totalBooks = list.length;
  const lastBookIndex = currentPage * booksPerPage;
  const firstBookIndex = lastBookIndex - booksPerPage;

  return <Paginate booksPerPage={booksPerPage} totalBooks={totalBooks} />;
};
