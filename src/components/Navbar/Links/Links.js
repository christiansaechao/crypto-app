import React from "react";
import { Icon, Text, StyledLink, MainContainer } from "./Links.styles";
import Images from "images/index.js";

const Links = () => {
  return (
    <div>
      {Images.map((link) => (
        <MainContainer key={link.text}>
          <StyledLink to={link.link}>
            <Icon src={link.img} />
            <Text>{link.text}</Text>
          </StyledLink>
        </MainContainer>
      ))}
    </div>
  );
};

export default Links;
