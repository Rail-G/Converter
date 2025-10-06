import { useDispatch, useSelector } from "react-redux";
import type { RootDispatch, RootState } from "../store/store";
import { useEffect, useState, type AnyActionArg } from "react";
import type { DebounceHook } from "../typing";
import type { UnknownAction } from "redux";

export const useAppDispatch = useDispatch.withTypes<RootDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export const useDebounce = <T>({func, time}: DebounceHook<T>) => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        const timeOut = setTimeout(() => {
            dispatch(func() as UnknownAction)
        }, time)
        return () => clearTimeout(timeOut)
    }, [func, time, dispatch])
}