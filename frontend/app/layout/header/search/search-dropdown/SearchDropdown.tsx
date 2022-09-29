import { searchService } from "@/services/search.service";
import { Product } from "@/store/api/fakestore";
import { useState } from "react";
import styles from "./SearchDropDown.module.scss";
import { SearchDropDownProps } from "./SearchDropDown.props";

export const SearchDropDown = ({
  show,
  content,
  term,
}: SearchDropDownProps) => {
  const getSearchResult = (): Product[] | undefined => {
    const result = content?.filter((item) =>
      item.title.toLowerCase().startsWith(term!.toLowerCase())
    );
    return result;
  };

  return (
    <>
      {show && (
        <div className={styles.searchDropdown}>
          {getSearchResult()?.length && term?.length ? (
            <div className={styles.searchContent}>
              <ul>
                {getSearchResult()!.map((item) => (
                  <li key={item.id}>{item.title}</li>
                ))}
              </ul>
            </div>
          ) : (
            "Ничего не найдено"
          )}
        </div>
      )}
    </>
  );
};
