import { Helmet } from "react-helmet";
import Toolbox from "../Components/Toolbox/Toolbox";

export default function ToolboxPage() {
    return (
        <>
            <Helmet>
                <meta name="description" content="webcity's toolbox is a collection of tools and resources for web designers and developers. From AI tools to illustrations, we've got you covered." />
                <title>webcity - toolbox</title>
                <meta property="og:title" content="webcity - toolbox" />
                <meta property="og:description" content="webcity's toolbox is a collection of tools and resources for web designers and developers. From AI tools to illustrations, we've got you covered." />
                <meta property="og:url" content="https://www.webcity.dev/toolbox" />
            </Helmet>
            <Toolbox />
        </>
    )
}