import { useEffect, useState } from "react";
import AsyncSelect from "react-select/async";
import { fetchBooksBySearch, useAppDispatch, useAppSelector } from "store";
import { getBooksBySearch } from "store/selectors/selectors";

export interface BookOption {
  label: string;
}

export const NewSearch = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setValue] = useState("");
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const { searchParams, searchResponse, isLoading, error } = useAppSelector(getBooksBySearch);
  const dispatch = useAppDispatch();

  console.log(searchResponse);

  const handleInputChange = (value: string) => setValue(value);

  const handleChange = (value: string | null) => setSelectedValue(value);

  const booksOptions: BookOption[] = [{ label: "ocean" }];

  return <AsyncSelect cacheOptions defaultOptions={booksOptions} inputValue={inputValue} />;
};
