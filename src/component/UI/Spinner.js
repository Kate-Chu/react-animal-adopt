import { Grid } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="mt-5 pt-5">
      <Grid
        height="200"
        width="200"
        radius="10"
        color="#e29d49"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
};

export default Spinner;
