import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ProjectSlide, ProjectImage, ProjectContent, ProjectTitle, ProjectDescription, ProjectLink, TechStack, TechTag } from './Project.styles';

const Project = ({ title, description, image, url, techStack = [] }) => {
    const controls = useAnimation();
    const imageRef = useRef(null);

    useEffect(() => {
        // Reset scroll position and start animation
        if (imageRef.current) {
            controls.set({ y: 0 });
            controls.start({
                y: [0, -100],
                transition: {
                    duration: 20,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "reverse"
                }
            });
        }
    }, [controls, image]);

    const contentVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        }
    };

    const childVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <ProjectSlide>
            <ProjectImage>
                <motion.img 
                    ref={imageRef}
                    src={image} 
                    alt={title}
                    initial={{ opacity: 0 }}
                    animate={{ 
                        opacity: 1,
                        y: [0, "-60%"],
                        transition: {
                            opacity: { duration: 0.3 },
                            y: {
                                duration: 15,
                                ease: "linear",
                                repeat: Infinity,
                                repeatType: "reverse"
                            }
                        }
                    }}
                    loading="lazy"
                    style={{ objectPosition: "top center" }}
                />
            </ProjectImage>
            
            <ProjectContent
                as={motion.div}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
            >
                <ProjectTitle as={motion.h3} variants={childVariants}>
                    {title}
                </ProjectTitle>
                
                <ProjectDescription as={motion.p} variants={childVariants}>
                    {description}
                </ProjectDescription>
                
                <TechStack as={motion.div} variants={childVariants}>
                    {techStack.map((tech, index) => (
                        <TechTag
                            key={index}
                            as={motion.span}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            {tech}
                        </TechTag>
                    ))}
                </TechStack>

                <ProjectLink 
                    href={url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    as={motion.a}
                    variants={childVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    View Project →
                </ProjectLink>
            </ProjectContent>
        </ProjectSlide>
    );
};

export default Project;
