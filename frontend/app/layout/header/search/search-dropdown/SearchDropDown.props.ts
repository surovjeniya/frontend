import { Product } from "@/store/api/fakestore";

export interface SearchDropDownProps {
  show: boolean;
  content?: undefined | Product[];
  term?: string | undefined;
}
