import React from "react";
import { FearGreedIndex, Title, FearClassification } from "./FearIndex.styles";
import { CircularProgressbar } from "react-circular-progressbar";
import ProgressProvider from "./ProgressProvider/ProgressProvider";

const FearIndex = ({ FearIndexData }) => {
  return (
    <>
      {FearIndexData && (
        <FearGreedIndex>
          <Title>Fear & Greed Index</Title>
          <ProgressProvider
            valueStart={0}
            valueEnd={FearIndexData.data[0].value}
          >
            {(value) => (
              <CircularProgressbar
                value={value}
                text={`${value}%`}
                circleRatio={0.5}
                styles={{
                  trail: {
                    strokeLInecap: "butt",
                    transform: "rotate(-90deg)",
                    transformOrigin: "center center",
                  },
                  path: {
                    strokeLInecap: "butt",
                    transform: "rotate(-90deg)",
                    transformOrigin: "center center",
                    stroke: "orange",
                  },
                  text: {
                    fill: "#ddd",
                  },
                }}
                strokeWidth={10}
              />
            )}
          </ProgressProvider>
          <FearClassification>{FearIndexData.data[0].value_classification}</FearClassification>
        </FearGreedIndex>
      )}
    </>
  );
};

export default FearIndex;
