import React from "react";
import styled from "styled-components";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import DownloadIcon from '@mui/icons-material/Download';
import Comments from "../components/Comments";
import Card from "../components/Card";

const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const Content = styled.div`
  flex: 5;
`;

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
`;

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius:5px;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const ShareButton = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 20px;
  padding-left:5px;
  cursor: pointer;
  height: 24px;
  width: 80px;
  border: 1px solid #CCCCCC;
  background-color: transparent;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;

  &:hover {
    background-color: gray;
  }

  &:active {
    transform: scale(.9);
  }
`;

const SaveButton = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 20px;
  padding-left:5px;
  cursor: pointer;
  height: 24px;
  width: 75px;
  border: 1px solid #CCCCCC;
  background-color: transparent;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;

  &:hover {
    background-color: gray;
  }

  &:active {
    transform: scale(.9);
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 1px solid ${({ theme }) => theme.textSoft};
`;


const Recommendation = styled.div`
  flex: 2;
`;
const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;

const Description = styled.p`
  font-size: 14px;
`;

const Subscribe = styled.button`
  --bg-color: #cc1a00;
  --dark-bg-color: #b21800;

  background-color: var(--bg-color);
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: var(--dark-bg-color);
  }

  &:active {
    transform: scale(.98);
  }
`;


const LikeDislikeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 50px;
  overflow: hidden;
  width: 130px;
  height: 65px;
`

const LikeWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #CCCCCC;
  background-color: transparent;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;

  &:hover {
    background-color: gray;
    cursor: pointer;
  }

  &:active {
    transform: scale(.9);
  }
`

const DisLikeWrapper = styled.div`
  width: 50px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #CCCCCC;
  background-color: transparent;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;

  &:hover {
    background-color: gray;
    cursor: pointer;
  }

  &:active {
    transform: scale(0.9);
  }
`

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <Iframe
            width="100%"
            height="720"
            src="https://www.youtube.com/embed/j9o8ufl89nc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            autoplay
          ></Iframe>
        </VideoWrapper>
        <Title>Test Video</Title>
        <Details>
          <Info>48,154 views • Jun 22, 2022</Info>
          <Buttons>
            <LikeDislikeWrapper>
              <LikeWrapper>
                <Button>
                  <ThumbUpOutlinedIcon /> 123
                </Button>
              </LikeWrapper>
              <DisLikeWrapper>
                <Button>
                  <ThumbDownOffAltOutlinedIcon /> 27
                </Button>
              </DisLikeWrapper>
            </LikeDislikeWrapper>
            <ShareButton>
              <ReplyOutlinedIcon /> Share
            </ShareButton>
            <SaveButton>
              <DownloadIcon /> Save
            </SaveButton>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src="https://avatars.githubusercontent.com/u/87671757?s=40&v=4" />
            <ChannelDetail>
              <ChannelName>Peter</ChannelName>
              <ChannelCounter>200K subscribers</ChannelCounter>
              <Description>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloribus laborum delectus unde quaerat dolore culpa sit aliquam
                at. Vitae facere ipsum totam ratione exercitationem. Suscipit
                animi accusantium dolores ipsam ut.
              </Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
        <Hr />
        <Comments/>
      </Content>
      <Recommendation>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
      </Recommendation>
    </Container>
  );
};

export default Video;
