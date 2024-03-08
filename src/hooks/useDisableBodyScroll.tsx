import { useEffect } from "react";

export const useDisableBodyScroll = (open: boolean) => {
  useEffect(() => {
    if (open) {
      document.body.style.position = "fixed";
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      document.body.style.position = "unset";
      document.body.style.top = "unset";
    }
  }, [open]);
};
