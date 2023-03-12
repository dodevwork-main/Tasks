import { useEffect } from "react";

interface UseInputFocusProps {
  inputRef: { current: HTMLInputElement | null };
}

const useInputFocus = ({ inputRef }: UseInputFocusProps) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      inputRef.current?.focus();
    }, 100);

    return () => clearTimeout(timeout);
  }, []);
};

export default useInputFocus;
