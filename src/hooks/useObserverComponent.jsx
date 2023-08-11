import { useContext } from "react";
import { ObserverComponentContext } from "../context/ObserverComponentProvider";

export default function useObserverComponent() {
  return useContext(ObserverComponentContext);
}
