import React from "react";
import { VotingContainer, HowDoYouFeel, VotingButtons, Button } from "./Voting.styles";
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa'; 

const Voting = ({ coinId }) => {
  return (
    <VotingContainer>
      <HowDoYouFeel>
        How do you feel about <span>{coinId}</span> today?
      </HowDoYouFeel>
      <VotingButtons>
        <Button>Good <FaThumbsUp className='yellow'/></Button>
        <Button>Bad <FaThumbsDown className='yellow'/></Button>
      </VotingButtons>
    </VotingContainer>
  );
};

export default Voting;
