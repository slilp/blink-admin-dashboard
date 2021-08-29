import styled from "styled-components";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { blue, grey } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      borderTopLeftRadius: "25px",
      borderBottomLeftRadius: "25px",
    },
  })
);

export const CardMenu = styled.div`
  border-radius: 30px;
  height: 100%;
  padding: 1rem;
  width: 175px;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  margin-bottom: 2rem;
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Footer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: flex-end;
`;

export const Profile = styled.div`
  background-color: ${blue[50]};
  height: 200px;
  width: 100%;
  border-radius: 30px;
  margin-top: 40px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 2rem;
`;

export const ProfileImage = styled.div<{ profile?: string }>`
  height: 75px;
  width: 75px;
  border-radius: 50%;
  position: absolute;
  top: -15%;
  background-repeat: no-repeat;
  background-size: 100%;
  background-image: ${(props) =>
    props.profile
      ? `url(${props.profile})`
      : `url(
          "https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png"
        )`};
`;

export const ProfileMenu = styled.div`
  cursor: pointer;
  margin-bottom: 0.5rem;
  width: 75%;
  border-radius: 15px;
  padding: 0.75rem;
  color: ${grey[600]};
  word-break: break-all;
  &:hover {
    background-color: ${blue[100]};
    color: ${blue[900]};
  }
  span:nth-child(-n + 2) {
    margin-right: 0.75rem;
  }
`;

export const LogoImage = styled.img`
  width: 90%;
  max-width: 100px;
`;

export const SignOutButton = styled.div`
  cursor: pointer;
  font-weight: 500;
  margin-bottom: 0.5rem;
  width: 75%;
  border-radius: 15px;
  padding: 0.75rem;
  background-color: ${blue[300]};
  word-break: break-all;
  color: #ffffff;

  &:hover {
    opacity: 0.8;
  }
  span:nth-child(-n + 2) {
    margin-right: 0.75rem;
  }
`;
