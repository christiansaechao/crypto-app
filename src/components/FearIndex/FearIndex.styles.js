import styled from "styled-components";

export const Title = styled.div`
  font-size: 1.4rem;
  color: ${(props) => props.theme.textColor};
  margin: 20px;
`;

export const FearClassification = styled.div`
  position: absolute;
  bottom: 60px;
  font-size: 1.8rem;
  color: ${(props) => props.theme.textColor};
`;

export const FearGreedIndex = styled.div`
  width: 30%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;

  .CircularProgressbar {
    /*
   * This fixes an issue where the CircularProgressbar svg has
   * 0 width inside a "display: flex" container, and thus not visible.
   */
    width: 80%;
    /*
   * This fixes a centering issue with CircularProgressbarWithChildren:
   * https://github.com/kevinsqi/react-circular-progressbar/issues/94
   */
    vertical-align: middle;
  }

  .CircularProgressbar .CircularProgressbar-path {
    stroke: #3e98c7;
    stroke-linecap: round;
    transition: stroke-dashoffset 0.5s ease 0s;
  }

  .CircularProgressbar .CircularProgressbar-trail {
    stroke: #d6d6d6;
    /* Used when trail is not full diameter, i.e. when props.circleRatio is set */
    stroke-linecap: round;
  }

  .CircularProgressbar .CircularProgressbar-text {
    fill: #3e98c7;
    font-size: 1rem;
    dominant-baseline: middle;
    text-anchor: middle;
  }
`;

// .CircularProgressbar 
// {
//     margin-top: 30%;
//     width: 100%;
//     vertical-align: middle;
// }

// .CircularProgressbar .CircularProgressbar-path {
//     stroke: #3e98c7;
//     stroke-linecap: round;
//     transition: stroke-dashoffset 0.5s ease 0s;
// }

// .CircularProgressbar .CircularProgressbar-trail {
//     stroke: #d6d6d6;
//     stroke-linecap: round;
// }

// .CircularProgressbar .CircularProgressbar-text {
//     fill: #3e98c7;
//     font-size: 1rem;
//     dominant-baseline: middle;
//     text-anchor: middle;
// }

// .outer-container{
//     width: 486px;
//     height: 300px; 
//     margin: 0 auto;
//     display: flex;
//     background: rgb(53,53,53);
//     background: linear-gradient(0deg, rgba(53,53,53,1) 0%, rgba(22,22,22,1) 39%);
//     justify-content: start; 
//     align-items: center; 
//     flex-direction: column;
//     border: 1px solid #272727;
//     border-radius: 6px;
//     font-family: Sans-serif;
//     color: white;
// }

// .section-title{
//     font-size: 1.5rem;
//     margin-top: 22px;
// }

// .inner-container{
//     display: flex; 
//     justify-content: center; 
//     align-items: center; 
//     height: 250px;
//     width: 339px;
//     margin: 0 auto;
//     position: relative;
// }

// .info{
//     position: absolute;
//     top: 15%;
//     text-align: center;
//     width: 100%;
// }

// .fear-level{
//     font-size: 2rem;
//     margin-bottom: 10px;
// }

// .sentiment-text{
//     font-size: 12px;
//     color: #606060; 
//     margin-bottom: 20px;
// }

// .sentiment{
//     color: white; 
//     font-weight: 300;
//     font-size: 1.5rem;
//     margin-top: 10px;
// }

// .timer{
//     font-size: 1.1rem;
// }