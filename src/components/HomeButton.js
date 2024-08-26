import React from "react";
import IconLink from "./IconLink";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Image = styled.img`
  width: 45px;
  position: absolute;
  cursor: pointer;

  &:hover {
    cursor: pointer;
  }
`;

export default function HomeButton() {
	const navigate = useNavigate()

	return (
		<ArrowBackIcon sx={{ position: "absolute", margin: 4, color: '#ffffff', fontSize: '2em'}} onClick={() => navigate('/')}></ArrowBackIcon>
	)
}