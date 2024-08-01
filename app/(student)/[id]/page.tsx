"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './[id].module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SavingsIcon from '@mui/icons-material/Savings';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ApartmentIcon from '@mui/icons-material/Apartment';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import { MapContainer, TileLayer, Marker, Popup, LayersControl, ZoomControl, useMap, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet-control-geocoder';
import { getProjectById } from '@/components/api'; // Import the getProjectById function
import { Project } from '@/models/projects'; // Import the Project model

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

// Geocoder component to add a search control
const GeocoderControl = () => {
  const map = useMap();

  useEffect(() => {
    const geocoder = L.Control.Geocoder.nominatim();
    L.Control.geocoder({
      geocoder,
      position: 'topright',
      collapsed: false,
    }).addTo(map);
  }, [map]);

  return null;
};

// Component to find user's current location
const LocateControl = () => {
  const map = useMapEvents({
    locationfound(e) {
      map.flyTo(e.latlng, map.getZoom());
      L.marker(e.latlng).addTo(map)
        .bindPopup("You are here")
        .openPopup();
    },
  });

  const locateUser = () => {
    map.locate({ setView: true, maxZoom: 16 });
  };

  return (
    <button onClick={locateUser} className={styles.locateButton}>
      Locate Me
    </button>
  );
};

export default function ProjectDetails({ params }: { params: { id: string } }) {
  const { id } = params;
  const [projectData, setProjectData] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState('description');
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (id) {
      getProjectById(id)
        .then(response => setProjectData(response.data))
        .catch(error => console.error('Error fetching project data:', error));
    }
  }, [id]);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  if (!projectData) return <p>Loading...</p>;

  return (
    <>
      <h2 className={styles.Heading}>{projectData.project_name}</h2>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <a href="#overview" className={styles.link}>Overview</a><br />
          <a href="#otherInformation" className={styles.link}>Other Information</a><br />
          <a href="#projectDetails" className={styles.link}>Project Details</a><br />
          <a href="#universityLocation" className={styles.link}>University Location</a>
        </div>
        <div className={styles.main}>
          <div className={styles.header} id="overview">
            <img src={projectData.image} alt={projectData.project_name} className={styles.image} />
            <div className={styles.headerContent}>
              <h1 className={styles.mainHeading}>{projectData.university_name}</h1>
              <p><LocationOnIcon /> {projectData.university_location}</p>
              <div className={styles.buttons}>
                <button className={styles.buttonDisabled}><ChatBubbleOutlineRoundedIcon /> Already Applied</button>
                <Link href="/results" className={styles.button}><SchoolOutlinedIcon /> Shortlisted</Link>
                <Link href="/favorites" className={styles.button}><BookmarksOutlinedIcon /> Bookmark</Link>
              </div>
            </div>
          </div>
          <div className={styles.content}>
            <h2 className={styles.subHeading}>{projectData.university_name}</h2>
            {/* <p>
              {isExpanded ? projectData.universityDescription : `${projectData.universityDescription.substring(0, 100)}...`}
              <button onClick={toggleReadMore} className={styles.readMoreButton}>
                {isExpanded ? 'Read Less' : 'Read More'}
              </button>
            </p> */}
            <h3 id="otherInformation" className={styles.subHeading}>Other Information</h3>
            <div className={styles.otherInformation}>
              <div className={styles.otherInfoTab}>
                <FontAwesomeIcon icon={faTrophy} className={styles.trophyIcon} />
                <span>QS World University Rankings</span>
                <p>{projectData.ranking}</p>
              </div>
            </div>
            <h3 id="projectDetails" className={styles.subHeading}>Project Details</h3>
            <div className={styles.projectDetails}>
              <div className={styles.tabs}>
                <button
                  className={`${styles.tab} ${activeTab === 'description' ? styles.activeTab : ''}`}
                  onClick={() => setActiveTab('description')}
                >
                  DESCRIPTION
                </button>
                <button
                  className={`${styles.tab} ${activeTab === 'prerequisites' ? styles.activeTab : ''}`}
                  onClick={() => setActiveTab('prerequisites')}
                >
                  PREREQUISITES
                </button>
              </div>
              <div className={styles.tabContent} key={activeTab}>
                {activeTab === 'description' ? (
                  <>
                    <p>{projectData.project_details}</p>
                    <h3 id="otherInformation" className={styles.subHeading}>Details:</h3>
                    <span><AccessTimeIcon /> Deadline: {projectData.application_deadline}</span><br />
                    <span><SavingsIcon /> Stipend: {projectData.stipend}</span><br />
                    <span><ApartmentIcon /> Mode: {projectData.project_mode}</span>
                  </>
                ) : (
                  <p>{projectData.eligibility}</p>
                )}
              </div>
            </div>
            <h3 id="universityLocation" className={styles.subHeading}>University Location</h3>
            <p>{projectData.university_location}</p>
            <MapContainer center={projectData.coordinates} zoom={13} style={{ height: '400px', width: '100%' }} zoomControl={false}>
              <LayersControl position="topright">
                <LayersControl.BaseLayer checked name="Street View">
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                </LayersControl.BaseLayer>
                <LayersControl.BaseLayer name="Satellite View">
                  <TileLayer
                    url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://opentopomap.org">OpenTopoMap</a> contributors'
                  />
                </LayersControl.BaseLayer>
              </LayersControl>
              {/* <Marker position={projectData.coordinates}>
                <Popup>{projectData.university_name}</Popup>
              </Marker> */}
              <LocateControl />
              <ZoomControl position="bottomright" />
            </MapContainer>
          </div>
        </div>
      </div>
    </>
  );
}
