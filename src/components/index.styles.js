import React from "react";
import styled from "styled-components";
import { Box } from "@mui/material";

const CardContainer = styled(Box)`
    && {
        min-height: 30rem;
        background: rgba(244, 244, 244, 0.9);
        max-width: 55rem;
        border-radius: 1rem;
        margin: 2rem;
        padding: 2rem;
    }
`;

export { CardContainer}