import React from "react";
import { FearGreedIndex, Title, FearClassification } from "./FearIndex.styles";
import { CircularProgressbar } from "react-circular-progressbar";
import ProgressProvider from "./ProgressProvider/ProgressProvider";

const FearIndex = ({ FearIndexData }) => {
  return (
    <>
      {FearIndexData && (
        <FearGreedIndex>
          {console.log(FearIndexData)}
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
          <FearClassification>
            {FearIndexData.data[0].value_classification}
          </FearClassification>
        </FearGreedIndex>
      )}
    </>
  );
};

export default FearIndex;


// import React, { useState, useEffect } from "react";
// import axios from 'axios';
// import { CircularProgressbarWithChildren } from "react-circular-progressbar";
// import ChangingProgressProvider from "./ChangingProgressProvider";
// import './FearAndGreed.css';
// import { clear } from "console";

// const Timer = ({ timeLeft }: any) => {
//   let newHours: number = Math.floor(timeLeft / 3600);
//   let newMinutes: number = Math.floor((timeLeft - (newHours * 3600)) / 60);
//   let newSeconds: number = timeLeft - (newHours * 3600) - (newMinutes * 60);

//   const [hours, setHours] = useState(newHours)
//   const [minutes, setMinutes] = useState(newMinutes);
//   const [seconds, setSeconds] = useState(newSeconds);

//   useEffect(() => {
//     let myInterval = setInterval(() => {
//       if (seconds > 0) {
//         setSeconds(seconds - 1);
//       }
//       if (seconds === 0) {
//         if (minutes > 0) {
//           setMinutes(minutes - 1);
//           setSeconds(59);
//         }
//       }
//       if(seconds === 0){
//         if(minutes === 0){
//           if(hours === 0){
//             clearInterval(myInterval); 
//           }
//           else{
//             setHours(hours - 1); 
//             setMinutes(59);
//             setSeconds(59);
//           }
//         }
//       }
//     }, 1000)
//     return () => {
//       clearInterval(myInterval);
//     };
//   });

//   return (
//     <div className='timer'>Time Until Next Update: {hours}h {minutes < 10 ? "0" + minutes : minutes}m {seconds < 10 ? "0" + seconds : seconds}s</div>
//   )
// }

// export const FearAndGreedIndex: React.FC = () => {
//   const [FearGreedData, setFearGreedData] = useState<any>();

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const { data: { data } } = await axios(`https://api.alternative.me/fng/`);
//         setFearGreedData(data[0]);
//       } catch (err: any) {
//         console.log(err.error);
//       }
//     }
//     fetchData();
//   }, []);

//   return (
//     <>
//       {FearGreedData &&
//         <div className='outer-container'>
//           <div className='section-title'>Fear & Greed Indicator</div>
//           <div className='inner-container'>
//             <ChangingProgressProvider values={[0, FearGreedData.value]}>
//               {(value: number) => (
//                 <CircularProgressbarWithChildren value={value}
//                   circleRatio={.5}
//                   styles={{
//                     trail: {
//                       strokeLinecap: "butt",
//                       transform: "rotate(-90deg)",
//                       transformOrigin: "center center",
//                       strokeWidth: 7
//                     },
//                     path: {
//                       strokeLinecap: "butt",
//                       transform: "rotate(-90deg)",
//                       transformOrigin: "center center",
//                       stroke: "#4688E4",
//                     },
//                     text: {
//                       fill: "#ddd",
//                     },
//                   }}
//                   strokeWidth={7}
//                 >
//                   <div className="info">
//                     <div className='fear-level'>{FearGreedData.value}</div>
//                     <div className="sentiment-text">
//                       Investor Sentiment:
//                       <div className='sentiment'>
//                         {FearGreedData.value_classification}
//                       </div>
//                     </div>
//                     {new Date(parseInt(FearGreedData.timestamp) * 1000).toLocaleDateString("en-US")}
//                     <Timer timeLeft={parseInt(FearGreedData.time_until_update, 10)} />
//                   </div>
//                 </CircularProgressbarWithChildren>
//               )}
//             </ChangingProgressProvider>
//           </div>
//         </div>
//       }
//     </>
//   )
// }