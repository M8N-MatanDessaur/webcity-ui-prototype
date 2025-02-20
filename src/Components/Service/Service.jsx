import React from "react";
import { motion } from "framer-motion";
import { ServiceWrapper, ServiceIcon, ServiceTitle, ServiceDescription, ServiceContent } from "./Service.styles";

export default function Service({ svg, title, description }) {
    return (
        <ServiceWrapper
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ scale: 1.02 }}
            transition={{ 
                duration: 0.5,
                scale: {
                    type: "spring",
                    damping: 15,
                    stiffness: 300
                }
            }}
        >
            <ServiceContent>
                <ServiceIcon
                    as={motion.div}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                    {svg}
                </ServiceIcon>
                <ServiceTitle>{title}</ServiceTitle>
                <ServiceDescription>{description}</ServiceDescription>
            </ServiceContent>
        </ServiceWrapper>
    );
}
