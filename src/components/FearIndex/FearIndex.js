import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import ProgressProvider from "./ProgressProvider/ProgressProvider";
import { FearGreedIndex } from "./FearIndex.styles";
import Timer from "./Timer/Timer";
import { getFearIndexData } from "store/getFearIndexData/actions";

export const FearAndGreedIndex = () => {
  const dispatch = useDispatch();
  const fearGreedData = useSelector(
    (state) => state.fearIndexData.fearIndexData
  );
  useEffect(() => {
    dispatch(getFearIndexData());
  }, []);

  return (
    <>
      {fearGreedData && (
        <FearGreedIndex>
          <div className="outer-container">
            <div className="section-title">Fear & Greed Indicator</div>
            <div className="inner-container">
              <ProgressProvider values={[0, fearGreedData.value]}>
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
                      <div className="fear-level">{fearGreedData.value}</div>
                      <div className="sentiment-text">
                        Investor Sentiment:
                        <div className="sentiment">
                          {fearGreedData.value_classification}
                        </div>
                      </div>
                      <Timer
                        timeLeft={parseInt(fearGreedData.time_until_update, 10)}
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
