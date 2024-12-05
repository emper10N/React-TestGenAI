import { useState } from "react";

type Props = {};

const HomePage = (props: Props) => {
  const [details, showDetails] = useState(true);
  return (
    <>
      <button onClick={() => showDetails((prev) => !prev)}>
        {details ? "Hide content" : "Show content"}
      </button>
      {details && <div>HomePage</div>}
    </>
  );
};

export default HomePage;
