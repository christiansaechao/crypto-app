import Chart from "./Chart/Chart";
import { Wrapper } from "./LandingPageCharts.styles";

const LandingPageCharts = ({chartsData}) => {
  return (
    <>
      {chartsData && (
        <Wrapper>
          <Chart chartsData={chartsData} />
        </Wrapper>
      )}
    </>
  );
};

export default LandingPageCharts;
