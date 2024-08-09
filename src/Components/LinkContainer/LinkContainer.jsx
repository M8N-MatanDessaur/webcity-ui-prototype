import React from "react";

import { Container, LinkTitle, LinkDescription } from "./LinkContainer.styles";

export default function LinkContainer({title, description, link}) {
    return (
        <Container>
            <LinkTitle href={link} target="blank">{title}</LinkTitle>
            <LinkDescription>{description}</LinkDescription>
        </Container>
    );
}
