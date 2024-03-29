import { FormEvent, memo, useEffect } from "react";
import { generatePath, useNavigate } from "react-router-dom";
import { searchImage } from "assets";
import { useInput } from "hooks";
import { useDebounce } from "hooks";
import { useForm } from "react-hook-form";
import { ROUTE } from "router";
import { useAppDispatch } from "store";
import { removeSearchValue, setSearchValue } from "store/slices/searchSlice";
import { trimSearchValue } from "utils";
import { StyledSearch, Input, Button, SearchImage } from "./styles";

export const Search = memo(() => {
  const searchValue = useInput();
  const debouncedValue = useDebounce(trimSearchValue(searchValue.value), 1000);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { reset } = useForm();

  const handleSearch = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    navigate(generatePath(ROUTE.HOME + ROUTE.SEARCH));
    reset();
  };

  useEffect(() => {
    if (debouncedValue.length >= 3) {
      dispatch(
        setSearchValue({
          searchValue: debouncedValue,
          page: 1,
        }),
      );
    } else {
      dispatch(removeSearchValue());
    }
  }, [debouncedValue, dispatch]);

  return (
    <StyledSearch onSubmit={handleSearch}>
      <Input type="text" placeholder="Search..." name="search" {...searchValue} minLength={3} />
      <Button type="submit">
        <SearchImage src={searchImage} />
      </Button>
    </StyledSearch>
  );
});
