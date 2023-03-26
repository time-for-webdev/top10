import { useContext } from "react";
import { vpncontext } from "./Contexthsx";
const useStartupCtx = () => {
  return useContext(vpncontext);
};

export default useStartupCtx;
