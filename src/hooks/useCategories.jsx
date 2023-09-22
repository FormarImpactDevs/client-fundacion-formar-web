import { useContext } from "react";
import { CategoriesContext } from "../context/CategoryProvider";

export default function useCategories() {
  return useContext(CategoriesContext);
}
