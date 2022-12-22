import React, { useState, useEffect } from "react";
import axios from "axios";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import ProgressProvider from "./ProgressProvider/ProgressProvider";
import { FearGreedIndex } from "./FearIndex.styles";
import Timer from './Timer/Timer'; 

export const FearAndGreedIndex = () => {
  const [FearGreedData, setFearGreedData] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const {
          data: { data },
        } = await axios(`https://api.alternative.me/fng/`);
        setFearGreedData(data[0]);
      } catch (err) {
        console.log(err.error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      {FearGreedData && (
        <FearGreedIndex>
          <div className="outer-container">
            <div className="section-title">Fear & Greed Indicator</div>
            <div className="inner-container">
              <ProgressProvider values={[0, FearGreedData.value]}>
                {(value) => (
                  <CircularProgressbarWithChildren
                    value={value}
                    circleRatio={0.5}
                    styles={{
                      trail: {
                        strokeLinecap: "butt",
                        transform: "rotate(-90deg)",
                        transformOrigin: "center center",
                        strokeWidth: 7,
                      },
                      path: {
                        strokeLinecap: "butt",
                        transform: "rotate(-90deg)",
                        transformOrigin: "center center",
                        stroke: "#4688E4",
                      },
                      text: {
                        fill: "#ddd",
                      },
                    }}
                    strokeWidth={7}
                  >
                    <div className="info">
                      <div className="fear-level">{FearGreedData.value}</div>
                      <div className="sentiment-text">
                        Investor Sentiment:
                        <div className="sentiment">
                          {FearGreedData.value_classification}
                        </div>
                      </div>
                      <Timer
                        timeLeft={parseInt(FearGreedData.time_until_update, 10)}
                      />
                    </div>
                  </CircularProgressbarWithChildren>
                )}
              </ProgressProvider>
            </div>
          </div>
        </FearGreedIndex>
      )}
    </>
  );
};

export default FearAndGreedIndex;
