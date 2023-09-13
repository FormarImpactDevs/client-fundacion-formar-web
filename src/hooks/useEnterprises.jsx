import { useContext } from "react";
import { EnterprisesContext } from "../context/EnterpriseProvider";

export default function useEnterprises() {
  return useContext(EnterprisesContext);
}
