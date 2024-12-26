import React from 'react';
import './Index.css'; // Assuming CSS is in a separate file

const Index: React.FC = () => {
    const closePopup = () => {
        const popup = document.getElementById('alertNotice');
        if (popup) {
            popup.style.display = 'none';
        }
    };

    return (
        <div id="content">
            <div id="alertNotice" className="popup">
                <span className="close" onClick={closePopup}>&times;</span>
                <img src="Banners/admission_banner.png" alt="Banner Image" style={{ width: '80%', height: 'auto' }} />
            </div>
            <header>
                <div className="logo">
                    <img src="images/csvtu logo.png" alt="Chhattisgarh Swami Vivekanand Technical University" />
                    <h3>Chhattisgarh Swami Vivekanand<br />Technical University</h3>
                </div>
                <nav>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="add_ug.html">Admissions</a></li>
                        <li className="dropdown">
                            <a href="#" className="dropbtn">Faculty</a>
                            <div className="dropdown-content">
                                <a href="Btech_faculty.html">B.Tech's Faculties</a>
                                <a href="Diploma_faculty.html">Diploma's Faculties</a>
                                <a href="PG_faculty.html">PG's Faculties</a>
                            </div>
                        </li>
                        <li><a href="contact.html">Contact Us</a></li>
                        <li className="dropdown">
                            <a href="#" className="dropbtn">UTD Map</a>
                            <div className="dropdown-content">
                                <a href="Ground_floor.html">Ground Floor</a>
                                <a href="Basement.html">Basement</a>
                                <a href="First_floor.html">First Floor</a>
                            </div>
                        </li>
                        <li><a href="Features.html">Unique Features</a></li>
                    </ul>
                </nav>
            </header>

            <section className="hero">
                <img src="Banners/csctu_admin.JPG" alt="Auburn at Work" className="hero-image" />
                <div className="hero-text">
                    <h4>"Arise! Awake! and stop not until the goal is reached."</h4>
                    <p>-Swami Vivekananda</p>
                </div>
            </section>
            <section className="welcome-section">
                <h2>Welcome to University Teaching Department (CSVTU)</h2>
                <p>Empowering future leaders in Computer Science Engineering.</p>
                <a href="#departments" className="btn-primary">Explore Programs</a>
            </section>

            <section className="quick-links">
                <div className="link-item">
                    <a href="Academic calender/Academic_Calender.pdf"><img src="images/calendar.png" alt="Academic Calendar" /></a>
                    <a href="Academic calender/Academic_Calender.pdf">Academic Calendar</a>
                </div>
                <div className="link-item">
                    <a href="alumini.html"><img src="images/mortarboard.png" alt="Alumni" /></a>
                    <a href="alumini.html">Alumini</a>
                </div>
                <div className="link-item">
                    <a href="newsletter.html"><img src="images/Newsletter.png" alt="Newsletter" /></a>
                    <a href="newsletter.html">Newsletter</a>
                </div>
                <div className="link-item">
                    <a href="clubs.html"><img src="images/Clubs.png" alt="Clubs" /></a>
                    <a href="clubs.html">Clubs</a>
                </div>
            </section>

            <section className="vision">
                <h1>Vision / Mission and Goals</h1>
                <div className="content">
                    <div className="text">
                        <p>To be a premier institution fostering ethically sound engineers and professionals who lead in diverse fields, both nationally and internationally. We aim to address societal demands through innovation, research, and excellence in education across various engineering and planning disciplines.</p>
                        <p>Our mission is to provide world-class education, foster cutting-edge research, and offer professional consultancy and training across all our departments. We strive to develop skilled professionals equipped with the knowledge and ethical values necessary to excel in their careers and make significant contributions to society.</p>
                    </div>
                    <div className="image">
                        <img src="images/vision2.jpg" alt="UTD at Work" />
                    </div>
                </div>
            </section>

            {/* Additional sections for Departments, Testimonials, and Footer would go here */}

            <footer>
                <div className="footer-content">
                    <div className="footer-links">
                        <a href="privacy-policy.html">Privacy Policy</a>
                        <a href="terms-of-service.html">Terms of Service</a>
                    </div>
                    <div className="social-media">
                        <a href="#"><img src="images/facebook logo Background Removed.png" alt="Facebook" /></a>
                        <a href="#"><img src="images/twitter-x-logo.png" alt="Twitter" /></a>
                        <a href="#"><img src="images/mail.png" alt="Mail" /></a>
                    </div>
                </div>
                <p>&copy; 2024 University Teaching Department (CSVTU). All Rights Reserved.</p>
                <p>Contact us at enquiry@csvtu.ac.in</p>
            </footer>
        </div>
    );
};

export default Index;