import React from 'react';
import './Menu.css'; // Assuming CSS is in a separate file

const Menu: React.FC = () => {
    const closePopup = () => {
        const popup = document.getElementById('alertNotice');
        if (popup) {
            popup.style.display = 'none';
        }
    };

    return (
        <div>
            <div id="alertNotice" className="popup">
                <span className="close" onClick={closePopup}>&times;</span>
                <img src="Banners/admission_banner.png" alt="Banner Image" style={{ width: '80%', height: 'auto' }} />
            </div>
            <header className="header">
                <img src="images/csvtu logo.png" alt="Chhattisgarh Swami Vivekanand Technical University" />
                <h3>Chhattisgarh Swami Vivekanand<br />Technical University</h3>
                <nav>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Administration</a></li>
                        <li><a href="#">Students</a></li>
                        <li><a href="#">Parents</a></li>
                        <li><a href="#">Alumni</a></li>
                        <li><a href="#">Employees</a></li>
                    </ul>
                </nav>
                <button onClick={() => window.location.href='index5.html'} className="close-btn" id="close-btn">&times;</button>
            </header>

            <main>
                <div className="content">
                    <div className="column">
                        <h2>Academics</h2>
                        <a href="#">Office of the Provost</a>
                        <a href="#">Colleges</a>
                        <a href="#">Majors</a>
                        <a href="#">Core Curriculum</a>
                        <a href="#">Libraries</a>
                        <a href="#">Academic Calendar</a>
                        <a href="#">Course Schedule</a>
                        <a href="#">Advisement Schedule</a>
                        <a href="#">Final Exam Schedule</a>
                        <a href="#">Visit Academics</a>
                    </div>
                    <div className="column">
                        <h2>Admissions</h2>
                        <a href="#">Apply Now</a>
                        <a href="#">Check Application Status</a>
                        <a href="#">Undergraduate Admissions</a>
                        <a href="#">Graduate Admissions</a>
                        <a href="#">Pharmacy Admissions</a>
                        <a href="#">Veterinary Medicine Admissions</a>
                        <a href="#">Distance Ed</a>
                        <a href="#">Accepted Students</a>
                        <a href="#">Request Information</a>
                        <a href="#">Visit Admissions</a>
                    </div>
                    <div className="column">
                        <h2>Outreach</h2>
                        <a href="#">Public Service & Community Partnerships</a>
                        <a href="#">Professional & Continuing Education</a>
                        <a href="#">Youth Programs</a>
                        <a href="#">Government & Economic Development</a>
                        <a href="#">Osher Lifelong Learning Institute</a>
                        <a href="#">Faculty Engagement</a>
                        <a href="#">Outreach Global</a>
                        <a href="#">K-12 Outreach</a>
                        <a href="#">Extension</a>
                    </div>
                    <div className="column">
                        <h2>Research</h2>
                        <a href="#">Research Administration</a>
                        <a href="#">Work with Auburn Research</a>
                        <a href="#">Find Auburn Expertise</a>
                        <a href="#">Research Resources</a>
                        <a href="#">Centers & Institutes</a>
                        <a href="#">Graduate Research</a>
                        <a href="#">Undergraduate Research</a>
                        <a href="#">Auburn Research Magazine</a>
                        <a href="#">Research Symposia</a>
                        <a href="#">Visit Research</a>
                    </div>
                </div>
            </main>

            <footer>
                <p>&copy; 2024 University Teaching Department (CSVTU). All Rights Reserved.</p>
                <p>Contact us at enquiry@csvtu.ac.in</p>
            </footer>
        </div>
    );
};

export default Menu;