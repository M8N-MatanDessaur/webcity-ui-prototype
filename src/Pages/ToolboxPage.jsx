import React from "react";
import { Helmet } from "react-helmet";
import Toolbox from "../Components/Toolbox/Toolbox";

export default function ToolboxPage() {
    const schemaOrgWebPage = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "webcity.dev Toolbox",
        "description": "Comprehensive collection of web design and development tools. Enhance your workflow with our curated resources for creating stunning websites.",
        "url": "https://www.webcity.dev/toolbox",
        "isPartOf": {
            "@type": "WebSite",
            "name": "webcity.dev",
            "url": "https://www.webcity.dev"
        }
    };

    return (
        <>
            <Helmet>
                <html lang="en" />
                <title>webcity.dev Toolbox | Essential Web Development Resources</title>
                <meta name="description" content="Discover webcity.dev's curated toolbox for web designers and developers. Enhance your workflow with our collection of AI tools, illustrations, and more." />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="webcity.dev" />
                <meta name="keywords" content="web design tools, development resources, AI tools, illustrations, color palettes, code generators" />

                <meta property="og:title" content="webcity.dev Toolbox | Essential Web Development Resources" />
                <meta property="og:description" content="Discover webcity.dev's curated toolbox for web designers and developers. Enhance your workflow with our collection of AI tools, illustrations, and more." />
                <meta property="og:url" content="https://www.webcity.dev/toolbox" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://www.webcity.dev/toolbox-og-image.jpg" />
                <meta property="og:image:alt" content="webcity.dev Toolbox - Web Design and Development Resources" />
                <meta property="og:site_name" content="webcity.dev" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@webcitydev" />
                <meta name="twitter:title" content="webcity.dev Toolbox | Web Development Resources" />
                <meta name="twitter:description" content="Explore our curated collection of web design and development tools. Enhance your workflow and create stunning websites efficiently." />
                <meta name="twitter:image" content="https://www.webcity.dev/toolbox-twitter-image.jpg" />

                <link rel="canonical" href="https://www.webcity.dev/toolbox" />
                
                <script type="application/ld+json">
                    {JSON.stringify(schemaOrgWebPage)}
                </script>
            </Helmet>
            <Toolbox />
        </>
    );
}