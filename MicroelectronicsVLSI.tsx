import React from 'react';
import './MicroelectronicsVLSI.css'; // Assuming CSS is in a separate file

const MicroelectronicsVLSI: React.FC = () => {
    return (
        <div>
            <header>
                <div className="logo">
                    <img src="images/csvtu logo.png" alt="Chhattisgarh Swami Vivekanand Technical University" />
                    <h3>Chhattisgarh Swami Vivekanand<br />Technical University</h3>
                </div>
                <nav>
                    <ul>
                        <li><a href="index.tsx">Home</a></li>
                        <li><a href="about.tsx">About</a></li>
                        <li><a href="add_ug.tsx">Admissions</a></li>
                        <li className="dropdown">
                            <a href="#" className="dropbtn">Faculty</a>
                            <div className="dropdown-content">
                                <a href="Btech_faculty.tsx">B.Tech's Faculties</a>
                                <a href="Diploma_faculty.tsx">Diploma's Faculties</a>
                                <a href="PG_faculty.tsx">PG's Faculties</a>
                            </div>
                        </li>
                        <li><a href="contact.tsx">Contact Us</a></li>
                    </ul>
                </nav>
            </header>

            <main>
                <section className="course-info">
                    <div className="image-container">
                        <img src="images/microelectronics.jpg" alt="Microelectronics and VLSI" />
                    </div>
                    <div className="course-details">
                        <h3>Microelectronics and VLSI</h3>
                        <p>The department has faculty members who are experienced in the Electronics Industry, state-of-the-art research, and have a good number of publications in referred international journals in India and abroad. Here at CSVTU, we incorporate dynamic, interactive & smart teaching methodologies. The department has excellent research laboratories and support facilities in the area of Microelectronics and VLSI.</p>
                        <p style={{ fontWeight: 'bold' }}>University is commencing M.Tech from 2020-21. The nomenclature of the degree are as follows:</p>
                        <ul>
                            <li>M.Tech Microelectronics and VLSI – 18 Seats</li>
                        </ul>
                    </div>
                </section>

                <section className="programme-sf">
                    <h2>Salient Features of Programme</h2>
                    <ul>
                        <li>Instil knowledge in major areas of Computer Science and Engineering such as Artificial Intelligence, Networking, Databases, Data Analytics, Web Development, and Cloud Computing.</li>
                        <li>In addition to core curricula, the course offers subjects like communication, analytical, and soft skills to enhance personality and employability.</li>
                    </ul>
                </section>

                <section className="eligibility-criteria">
                    <h2>ELIGIBILITY CRITERIA</h2>
                    <p>Duration: 2 yrs. The Candidates should have passed Senior Secondary (10+2) or an equivalent Examination in five subjects taken together including compulsory subjects of Physics, Mathematics, and one subject of Chemistry/Biotechnology/Biology/Computer Science & English with 60% marks in aggregate (40% marks in the case of SC/ST Category). Or Passed Diploma examination with at least 60% marks (40% in case of candidates belonging to reserved category), subject to vacancies in the First Year, in case the vacancies at lateral entry are exhausted.</p>
                </section>

                <section className="fee-structure">
                    <h2>Fee Structure</h2>
                    <p>Details about the fee structure will be provided here.</p>
                </section>
            </main>

            <footer>
                <p>&copy; 2024 University Teaching Department (CSVTU). All Rights Reserved.</p>
                <p>Contact us at enquiry@csvtu.ac.in</p>
            </footer>
        </div>
    );
};

export default MicroelectronicsVLSI;