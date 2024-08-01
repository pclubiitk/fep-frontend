"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link'; 
import Head from 'next/head';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'; // Import Grid component
import ProjectCard from '@/components/ProjectCard'; 
import styles from './applications.module.css';
import { getAllProjects } from '@/components/api'; // Import the getAllProjects function
import { Project } from '@/models/projects';

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]); // Use the Project model for type safety

  useEffect(() => {
    // Fetch projects from the backend
    const fetchProjects = async () => {
      try {
        const response = await getAllProjects(); // Use the getAllProjects function from api.js
        setProjects(response.data); // Assuming the API response contains the project data in the data property
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Projects Page</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.headerContainer}>
          <h1 className={styles.title}>Applications</h1>
          {/* <Link href="/applications" passHref>
            <Button variant="contained" color="primary" className={styles.appliedButton}>
              Go to applied Projects →
            </Button>
          </Link> */}
        </div>
        <Grid container spacing={4} className={styles.projectList}>
          {projects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.ID}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </main>
    </div>   
  );
}

export default Projects;
