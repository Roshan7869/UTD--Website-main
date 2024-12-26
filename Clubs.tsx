import React, { useEffect } from 'react';
import './Clubs.css'; // Assuming CSS is in a separate file

const Clubs: React.FC = () => {
    useEffect(() => {
        document.querySelectorAll('.club').forEach(club => {
            club.addEventListener('click', () => {
                const clubName = club.querySelector('h2')?.innerText;
                alert(`You clicked on ${clubName}`);
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
            <div className="header-info">
                <h1>Welcome to Clubs @UTD CSVTU</h1>
                <p>Chhattisgarh Swami Vivekanand Technical University (CSVTU), established in 2005, is a premier institution in Chhattisgarh dedicated to advancing technical education and fostering innovation. The university not only emphasizes academic excellence but also encourages holistic development through a vibrant array of student clubs and organizations. These clubs provide a platform for students to explore their interests, enhance their skills, and engage in extracurricular activities that complement their academic journey.</p>
                <p className="head">Dr. Tarkesheshwari Verma<br />Head of Club and Cultural Program</p>
            </div>
            <h1 style={{ textAlign: 'center' }}>CLUBS</h1>
            <main>
                <div className="club" id="club1">
                    <img src="images/admin_building.jpg" alt="PROGRAMMERS' PARADISE" />
                    <h2>Programmers' Paradise</h2>
                    <p>At PROGRAMMERS' PARADISE, our vision is to cultivate a dynamic community where members not only excel in coding but also become innovators and leaders in the ever-evolving landscape of technology. We envision a future where every member harnesses their potential, leveraging our platform to push the boundaries of creativity and problem-solving.</p>
                    <h4>Website: <a href="https://www.programmers-paradise.tech/" target="_blank" rel="noopener noreferrer">View</a></h4>
                </div>
                {/* Repeat similar structure for other clubs */}
                <div className="club" id="club2">
                    <img src="images/admin_building.jpg" alt="Sports Club" />
                    <h2>Sports Club</h2>
                    <p>The Sports Club promotes physical fitness and healthy competition through various sports events, tournaments, and fitness challenges. We encourage teamwork, discipline, and sportsmanship, offering opportunities for members to excel and discover new sports.</p>
                </div>
                {/* Add more clubs here */}
            </main>
            <footer>
                <p>&copy; 2024 University Teaching Department (CSVTU). All Rights Reserved.</p>
                <p>Contact us at enquiry@csvtu.ac.in</p>
            </footer>
        </div>
    );
};

export default Clubs;