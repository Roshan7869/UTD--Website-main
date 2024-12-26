import React, { useEffect } from 'react';
import './Newsletter.css'; // Assuming CSS is in a separate file

const Newsletter: React.FC = () => {
    useEffect(() => {
        const newsletters = document.querySelectorAll('.newsletter');
        newsletters.forEach(newsletter => {
            const header = newsletter.querySelector('h3');
            header?.addEventListener('click', function () {
                const content = newsletter.querySelector('.newsletter-content');
                if (content) {
                    content.style.display = content.style.display === 'none' || content.style.display === '' ? 'block' : 'none';
                }
            });
        });
    }, []);

    return (
        <div>
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
                                <a href="Btech_faculty.html">Btech's Faculties</a>
                                <a href="Diploma_faculty.html">Diploma's Faculties</a>
                                <a href="PG_faculty.html">PG's Faculties</a>
                            </div>
                        </li>
                        <li><a href="contact.html">Contact Us</a></li>
                    </ul>
                </nav>
            </header>

            <div className="main-content">
                <h2>About The Newsletter</h2>
                <div className="newsletters-about">
                    <h2 style={{ textAlign: 'center' }}>PRAVAAH</h2>
                    <p style={{ fontSize: '20px', textAlign: 'center' }}>
                        A Digital Newsletter Of University Teaching Department of Chhattisgarh Swami Vivekanand Technical University, Which covers News Of Each and Every Event held at the Campus.
                        <br />This Newsletter is being Established on May 3rd, 2023 in the presence of honourable Vice Chancellor sir, Respected Pro Vice Chancellor sir, All Teaching Faculty Staffs and All The Newsletter Members.
                        <br />This Newsletter is Published in all over India, Emphasizing the Technological Development in the Field of Computer Science and Other Aspects as well.
                    </p>
                </div>
                <h2>Newsletters of UTD</h2>
                {['March 2024', 'October 2023', 'September 2023', 'August 2023', 'July 2023', 'June 2023', 'May 2023'].map((month, index) => (
                    <div className="newsletter" key={index}>
                        <h3>Newsletter 'Pravaah' {month}</h3>
                        <div className="newsletter-content">
                            {/* Add relevant links for each month */}
                            <p><a href={`Newsletters/${month.replace(" ", "").toLowerCase()}.pdf`} target="_blank" rel="noopener noreferrer">Newsletter - 'Pravaah' {month}</a></p>
                        </div>
                    </div>
                ))}
            </div>

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

export default Newsletter;