import React from 'react';
import './MPlan.css'; // Assuming CSS is in a separate file

const MPlan: React.FC = () => {
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
    
            <main>
                <section>
                    <h2>Admission Details</h2>
                    <p>The total intake is 90 each, i.e., 90 for B.Tech (Honours) in Computer Science Engineering (Artificial Intelligence) and 90 for B.Tech (Honours) in Computer Science Engineering (Data Science).</p>
                    <p>Admission for 50 percent seats of four year degree course B.Tech (Honours) will be done through Central Seat Allocation Board (CSAB) / Joint Seat Allocation Authority (JoSAA) coordinating admission of Joint Entrance Examination (Main) (or other similar bodies as the case may be) and admission for remaining 50 percent seats will be done through Directorate of Technical Education coordinating admission of CGPET.</p>
                    <p>The vacant seats after CSAB/JoSAA and CGDTE counseling will be filled by University Counseling.</p>
                </section>
            </main>
    
            <footer>
                <p>&copy; 2024 University Teaching Department (CSVTU). All Rights Reserved.</p>
                <p>Contact us at enquiry@csvtu.ac.in</p>
            </footer>
        </div>
    );
};

export default MPlan;