import { bindActionCreators } from "@reduxjs/toolkit";
import { rootActions } from "@store/root-actions";
import { useDispatch } from "react-redux";

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(rootActions, dispatch);
};
