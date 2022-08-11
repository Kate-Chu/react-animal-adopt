import { Grid } from "react-loader-spinner";

const Spinner = () => {
  return (
    <Grid
      height="200"
      width="200"
      radius="10"
      color="#e29d49"
      ariaLabel="three-dots-loading"
      wrapperStyle
      wrapperClass
    />
  );
};

export default Spinner;
