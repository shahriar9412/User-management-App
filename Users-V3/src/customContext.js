import { useContext } from "react";
import { myContext } from "./useContext";

export const useCustomContext = () => {
    return useContext(myContext);
}