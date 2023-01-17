import React, { useState } from "react";
import CoinPagePB from "../ProgressBar/CoinPagePB";
import {
  VotingContainer,
  TextContainer,
  Button,
  Up,
  Down,
  VotedContainer,
  MainText,
  SubText,
  VotePercentContainer,
} from "./Voting.styles";

const Voting = ({ coinId, coinData, newCookie, handleVoting}) => {
  const [vote, setVote] = useState("");
  const handleClick = (vote) => {
    setVote(vote);
    handleVoting(); 
  };

  const { sentiment_votes_down_percentage, sentiment_votes_up_percentage } =
  coinData; 
  return (
    <>
      {newCookie !== 'true' ? (
        <VotingContainer>
          <TextContainer>
            <MainText>
              How do you feel about <span>{coinId}</span> today?
            </MainText>
            <SubText>Vote to see community results.</SubText>
          </TextContainer>
          <VotedContainer>
            <Button onClick={() => handleClick("good")}>
              Good <Up />
            </Button>
            <Button onClick={() => handleClick("bad")}>
              Bad <Down />
            </Button>
          </VotedContainer>
        </VotingContainer>
      ) : (
        <VotingContainer>
          <TextContainer>
            <MainText className="already-voted">
              You've voted - {vote === "good" ? <Up /> : <Down />}{" "}
              <span className="capitalize">{vote}</span>
            </MainText>
            <SubText>
              Your vote is for 24 hours. In order to update how you feel about{" "}
              {coinId}, come back tomorrow!
            </SubText>
          </TextContainer>
          <VotedContainer className="column">
            <VotePercentContainer>
              <div>
                <Up /> {sentiment_votes_up_percentage}% voted yes
              </div>
              <div>
                <Down /> {sentiment_votes_down_percentage}% voted no
              </div>
            </VotePercentContainer>
            <CoinPagePB coinData={coinData} />
          </VotedContainer>
        </VotingContainer>
      )}
    </>
  );
};

export default Voting;
