import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBookDetails, getBookDetails, useAppDispatch, useAppSelector } from "store";

export const BookDetailsPage = () => {
  const { isbn = "" } = useParams();
  const dispatch = useAppDispatch();
  const book = useAppSelector(getBookDetails);
  const [details, setDetails] = useState<boolean>(false);

  useEffect(() => {
    dispatch(fetchBookDetails(isbn));
  }, [book, dispatch]);

  const handleDetails = () => {
    setDetails((details) => !details);
  };

  return (
    <div>
      Book details {book.authors}
      <img src={book.image} />
    </div>
  );
};
