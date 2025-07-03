import { useDispatch, useSelector } from "react-redux";
import type { RootDispatch, RootState } from "../redux/store";

export const useAppDispatch = useDispatch.withTypes<RootDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();