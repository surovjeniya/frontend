import { Button, Input } from "@/components/index";
import React, { useState } from "react";
import styles from "./Search.module.scss";

export const Search = () => {
  const [search, setSearch] = useState<string>("");
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className={styles.search}>
      <Input
        value={search}
        onChange={onChangeHandler}
        placeholder={"Искать в каталоге"}
      />
      <Button>Поиск</Button>
    </div>
  );
};
