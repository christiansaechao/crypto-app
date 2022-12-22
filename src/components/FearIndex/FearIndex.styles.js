import styled from "styled-components";

export const FearGreedIndex = styled.div`
  overflow: hidden;

  .CircularProgressbar {
    margin-top: 30%;
    width: 100%;
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

  .outer-container {
    padding: 30px 50px 40px 50px;
    height: 40vh;
    margin: 0 auto;
    display: flex;
    background: ${(props) => props.theme.secondary};
    justify-content: start;
    align-items: center;
    flex-direction: column;
    border: 2px solid #272727;
    border-radius: 6px;
    font-family: Sans-serif;
    color: white;
  }

  .section-title {
    font-size: 1.5rem;
    margin-top: 10px;
  }

  .inner-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 250px;
    width: 339px;
    margin: 0 auto;
    position: relative;
  }

  .info {
    position: absolute;
    top: 15%;
    text-align: center;
    width: 100%;
  }

  .fear-level {
    font-size: 2rem;
    margin-bottom: 10px;
  }

  .sentiment-text {
    font-size: 12px;
    color: #606060;
    margin-bottom: 20px;
  }

  .sentiment {
    color: white;
    font-weight: 300;
    font-size: 1.5rem;
    margin-top: 10px;
  }

  .timer {
    font-size: 1.1rem;
    margin-top: 80px;
  }
`;
