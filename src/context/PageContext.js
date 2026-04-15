import { createContext, useContext } from "react";

export const PageCtx = createContext();

export const usePage = () => useContext(PageCtx);