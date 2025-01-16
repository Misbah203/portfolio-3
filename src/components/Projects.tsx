import { title } from 'process';
import React from 'react';
import Heading from './Heading';
import Card from './Card';
 
const data = [
    {
        id : 0,
        title : "HTML/CSS Website",
        description : "This is a simple HTML/CSS website for a portfolio",
        img : "/html-csss.jpg",
        tags : ["HTML", "CSS"]
   },
   {
    id :1,
    title : "Next.js Website",
    description : "This is a simple Next.js website for a portfolio",
    img : "/figma to code.jpg",
    tags : ["Next.js", "Tailwind CSS"]
   },
   {
    id :3,
     title : "ATM Machine",
     description : "This is a simple ATM Machine project",
     img : "/atm tsc.png",
     tags : ["Typescript", "Node.js"]
   },
   {
    id : 4,
    title : "Currency Converter",
    description : "This is a simple currency converter project",
    img : "/currency converter.png",
    tags : ["Typescript", "Node.js"]
   },
   {
    id : 5,
    title : "Resume Builder",
    description : "This is a interactive resume built with HTML/CSS and Typescript",
    img : "/reumeBuilder.png",
    tags : ["Typescript", "HTML","CSS"]
   },
   {
    id : 6,
    title : "Number Guessing Game",
    description : "This is a simple Number Guessing Game project",
    img : "/guess.jpg",
    tags : ["Typescript", "Node.js"]
   }
]
const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
    <Heading title= 'My Projects' />
    <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) =>(<Card 
        key = {el.id}
        title = {el.title}
        desc = {el.description}
        img = {el.img}
        tags = {el.tags}
        />))}
    </div>
    </div>
    );
};

export default Projects;