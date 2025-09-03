import { ReactQueryContext } from "@/context/QueryContext";
import { useContext } from "react";

export function useQueryContext() {
  const context = useContext(ReactQueryContext);
  if (!context) {
    throw new Error("useReactQuery must be used within a <ReactQueryProvider>");
  }
  return context;
}
