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
