import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function ScrollToTop() {
  const stateShowData = useSelector((state) => state.animal.showData);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [stateShowData]);

  return null;
}
