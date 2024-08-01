// SelectedApplicantsCard.tsx

"use client";
import { Project } from '@/models/projects';
import Link from 'next/link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PersonIcon from '@mui/icons-material/Person';
import { useBookmarks } from './BookmarkContext';
import styles from './SelectedApplicantsCard.module.css';

interface SelectedApplicantsCardProps {
  project: Project;
}

const SelectedApplicantsCard: React.FC<SelectedApplicantsCardProps> = ({ project }) => {
  const { addBookmark } = useBookmarks();

  const handleBookmarkClick = (e: { stopPropagation: () => void; }) => {
    e.stopPropagation();
    addBookmark(project);
  };

  return (
    <Card className={styles.projectCard}>
      <CardMedia
        component="img"
        height="140"
        image={project.image || 'https://ircell.iitkgp.ac.in/media/George-Gilbert-Scott-Cambridge-St-Johns-College_zQtFT8P.webp'} // Add a default image if none is provided
        alt={project.project_name}
        className={styles.cardMedia}
      />
      <CardContent className={styles.cardContent}>
        <Typography gutterBottom variant="h5" component="div">
          {project.project_name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {project.university_location}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Project Mode: {project.project_mode}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Deadline: {new Date(project.application_deadline).toLocaleDateString()}
        </Typography>
      </CardContent>
      <div className={styles.bookmarkIcon}>
        <IconButton onClick={handleBookmarkClick} color="primary">
          <BookmarkBorderIcon />
        </IconButton>
      </div>
      <div className={styles.cardOverlay}>
        <Typography variant="body2" className={styles.cardDescription}>
          Selected Applicants:
        </Typography>
        <div className={styles.applicantList}>
          {project.selected_applicants.map((applicant, index) => (
            <div key={index} className={styles.applicantItem}>
              <PersonIcon className={styles.personIcon} />
              <Typography variant="body2">{applicant}</Typography>
            </div>
          ))}
        </div>
        <Link href={`${project.ID}`} passHref>
          <Button size="small" variant="contained" className={styles.readMoreButton}>
            Read More
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default SelectedApplicantsCard;
