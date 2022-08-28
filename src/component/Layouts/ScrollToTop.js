import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const stateShowData = useSelector((state) => state.animal.showData);
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [stateShowData, path]);

  return null;
}
