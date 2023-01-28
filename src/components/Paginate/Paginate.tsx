export interface IProps {
  booksPerPage: number;
  totalBooks: number;
}

export const Paginate = ({ booksPerPage, totalBooks }: IProps) => {
  const pageNumbers = [];

  for (let index = 1; index <= Math.ceil(totalBooks / booksPerPage); index++) {
    pageNumbers.push(index);
  }
  return (
    <div>
      Paginate
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <a href="">{number}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
