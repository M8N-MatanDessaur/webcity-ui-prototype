import React from "react";

import { Indicator, Title } from "./PageIndicator.styles";

export default function PageIndicator({pageName}) {

    return (
        <Indicator>
            <Title>{pageName}</Title>
        </Indicator >
    );
}