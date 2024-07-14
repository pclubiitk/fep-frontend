import React from 'react'
import styles from "../components/team.module.css"
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Team() {

    return (
        <>
            <body className={styles.bod}>
                <header className={styles.header}>
                    <h1 className={styles.heading}>Developed By</h1>
                </header>

                <section className={styles.teamSection}>
                    <img className={styles.video} src="world.jpg" >  
                    
                    </img>
                    <div className={styles.teamMember}>
                        <div className={styles.memberAvatar}>
                            <img src="oggy.png" className={styles.memberAvatar} />
                        </div>
                        <div className={styles.iconContainer}>
                            <a href="#" target="_blank" className={styles.icon}><FontAwesomeIcon icon={faFacebook} /></a>
                            <a href="#" target="_blank" className={styles.icon}><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="#" target="_blank" className={styles.icon}><FontAwesomeIcon icon={faLinkedin} /></a>
                        </div>

                        <div className={styles.memberInfo}>
                            <h3>Oggy Cat</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>

                    <div className={styles.teamMember}>
                        <div className={styles.memberAvatar}>
                            <img src="oggy.png" className={styles.memberAvatar} />
                        </div>
                        <div className={styles.iconContainer}>
                            <a href="#" target="_blank" className={styles.icon}><FontAwesomeIcon icon={faFacebook} /></a>
                            <a href="#" target="_blank" className={styles.icon}><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="#" target="_blank" className={styles.icon}><FontAwesomeIcon icon={faLinkedin} /></a>
                        </div>
                        <div className={styles.memberInfo}>
                            <h3>Jane Smith</h3>
                            <p>Phasellus tristique nunc et magna fermentum.</p>
                        </div>
                    </div>
                    <div className={styles.teamMember}>
                        <div className={styles.memberAvatar}>
                            <img src="oggy.png" className={styles.memberAvatar} />
                        </div>
                        <div className={styles.iconContainer}>
                            <a href="#" target="_blank" className={styles.icon}><FontAwesomeIcon icon={faFacebook} /></a>
                            <a href="#" target="_blank" className={styles.icon}><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="#" target="_blank" className={styles.icon}><FontAwesomeIcon icon={faLinkedin} /></a>
                        </div>
                        <div className={styles.memberInfo}>
                            <h3>Mike Johnson</h3>
                            <p>Etiam vitae massa eget odio feugiat pretium.</p>
                        </div>
                    </div>
                    <div className={styles.teamMember}>
                        <div className={styles.memberAvatar}>
                            <img src="oggy.png" className={styles.memberAvatar} />
                        </div>
                        <div className={styles.iconContainer}>
                            <a href="#" target="_blank" className={styles.icon}><FontAwesomeIcon icon={faFacebook} /></a>
                            <a href="#" target="_blank" className={styles.icon}><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="#" target="_blank" className={styles.icon}><FontAwesomeIcon icon={faLinkedin} /></a>
                        </div>
                        <div className={styles.memberInfo}>
                            <h3>Emily Davis</h3>
                            <p>Mauris tempus, eros et condimentum.</p>
                        </div>
                    </div>
                    <div className={styles.teamMember}>
                        <div className={styles.memberAvatar}>
                            <img src="oggy.png" className={styles.memberAvatar} />
                        </div>
                        <div className={styles.iconContainer}>
                            <a href="#" target="_blank" className={styles.icon}><FontAwesomeIcon icon={faFacebook} /></a>
                            <a href="#" target="_blank" className={styles.icon}><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="#" target="_blank" className={styles.icon}><FontAwesomeIcon icon={faLinkedin} /></a>
                        </div>
                        <div className={styles.memberInfo}>
                            <h3>Chris Lee</h3>
                            <p>Pellentesque habitant morbi tristique senectus.</p>
                        </div>
                    </div>
                    <div className={styles.teamMember}>
                        <div className={styles.memberAvatar}>
                            <img src="oggy.png" className={styles.memberAvatar} />
                        </div>
                        <div className={styles.iconContainer}>
                            <a href="#" target="_blank" className={styles.icon}><FontAwesomeIcon icon={faFacebook} /></a>
                            <a href="#" target="_blank" className={styles.icon}><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="#" target="_blank" className={styles.icon}><FontAwesomeIcon icon={faLinkedin} /></a>
                        </div>
                        <div className={styles.memberInfo}>
                            <h3>Sara Wilson</h3>
                            <p>Vivamus tincidunt velit sit amet velit posuere.</p>
                        </div>
                    </div>
                    <div className={styles.teamMember}>
                        <div className={styles.memberAvatar}>
                            <img src="oggy.png" className={styles.memberAvatar} />
                        </div>
                        <div className={styles.iconContainer}>
                            <a href="#" target="_blank" className={styles.icon}><FontAwesomeIcon icon={faFacebook} /></a>
                            <a href="#" target="_blank" className={styles.icon}><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="#" target="_blank" className={styles.icon}><FontAwesomeIcon icon={faLinkedin} /></a>
                        </div>
                        <div className={styles.memberInfo}>
                            <h3>David Brown</h3>
                            <p>Fusce vel arcu eget urna consequat fringilla.</p>
                        </div>
                    </div>
                    <div className={styles.teamMember}>
                        <div className={styles.memberAvatar}></div>
                        <div className={styles.iconContainer}>
                            <a href="#" target="_blank" className={styles.icon}><FontAwesomeIcon icon={faFacebook} /></a>
                            <a href="#" target="_blank" className={styles.icon}><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="#" target="_blank" className={styles.icon}><FontAwesomeIcon icon={faLinkedin} /></a>
                        </div>
                        <div className={styles.memberInfo}>
                            <h3>Linda White</h3>
                            <p>Aenean pharetra ligula non tortor sollicitudin.</p>
                        </div>
                    </div>
                    <div className={styles.teamMember}>
                        <div className={styles.memberAvatar}></div>
                        <div className={styles.iconContainer}>
                            <a href="#" target="_blank" className={styles.icon}><FontAwesomeIcon icon={faFacebook} /></a>
                            <a href="#" target="_blank" className={styles.icon}><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="#" target="_blank" className={styles.icon}><FontAwesomeIcon icon={faLinkedin} /></a>
                        </div>
                        <div className={styles.memberInfo}>
                            <h3>Robert Green</h3>
                            <p>In hac habitasse platea dictumst.</p>
                        </div>
                    </div>
                    <div className={styles.teamMember}>
                        <div className={styles.memberAvatar}></div>
                        <div className={styles.iconContainer}>
                            <a href="#" target="_blank" className={styles.icon}><FontAwesomeIcon icon={faFacebook} /></a>
                            <a href="#" target="_blank" className={styles.icon}><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="#" target="_blank" className={styles.icon}><FontAwesomeIcon icon={faLinkedin} /></a>
                        </div>
                        <div className={styles.memberInfo}>
                            <h3>Jessica Black</h3>
                            <p>Integer luctus mauris sit amet odio egestas.</p>
                        </div>
                    </div>
                    <div className={styles.teamMember}>
                        <div className={styles.memberAvatar}></div>
                        <div className={styles.iconContainer}>
                            <a href="#" target="_blank" className={styles.icon}><FontAwesomeIcon icon={faFacebook} /></a>
                            <a href="#" target="_blank" className={styles.icon}><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="#" target="_blank" className={styles.icon}><FontAwesomeIcon icon={faLinkedin} /></a>
                        </div>
                        <div className={styles.memberInfo}>
                            <h3>Daniel King</h3>
                            <p>Aliquam erat volutpat. Nulla facilisi.</p>
                        </div>
                    </div>
                    <div className={styles.teamMember}>
                        <div className={styles.memberAvatar}></div>
                        <div className={styles.iconContainer}>
                            <a href="#" target="_blank" className={styles.icon}><FontAwesomeIcon icon={faFacebook} /></a>
                            <a href="#" target="_blank" className={styles.icon}><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="#" target="_blank" className={styles.icon}><FontAwesomeIcon icon={faLinkedin} /></a>
                        </div>
                        <div className={styles.memberInfo}>
                            <h3>Amy Turner</h3>
                            <p>Donec ut magna nec metus laoreet.</p>
                        </div>
                    </div>
                   
                </section>
            </body>
        </>
    )
}

export default Team