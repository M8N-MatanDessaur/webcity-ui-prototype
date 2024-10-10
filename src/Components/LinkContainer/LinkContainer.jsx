import React from "react";

import { Container, LinkTitle, LinkDescription } from "./LinkContainer.styles";

export default function LinkContainer({title, description, link}) {
    return (
        <Container href={link} target="blank">
            <LinkTitle>{title}</LinkTitle>
            <LinkDescription>{description}</LinkDescription>
        </Container>
    );
}
