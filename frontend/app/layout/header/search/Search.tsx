import { Button, Input } from "@/components/index";
import { useGetAllProductsQuery } from "@/store/api/fakestore";
import React, { useEffect, useState } from "react";
import { SearchDropDown } from "./search-dropdown/SearchDropdown";
import styles from "./Search.module.scss";

export const Search = () => {
  const [search, setSearch] = useState<string>("");
  const [showDrodown, setShowDropdown] = useState(false);
  const { data } = useGetAllProductsQuery("");

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onShowDropDown = () => {
    if (search.length) {
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  useEffect(() => onShowDropDown());

  return (
    <div className={styles.search}>
      <Input
        value={search}
        onChange={onChangeHandler}
        placeholder={"Искать в каталоге"}
      />
      <Button>Поиск</Button>
      <div className={styles.dropdown}>
        <SearchDropDown show={showDrodown} content={data} term={search} />
      </div>
    </div>
  );
};
