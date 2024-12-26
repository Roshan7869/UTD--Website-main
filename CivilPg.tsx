import React from 'react';
import './CivilPg.css'; // Assuming CSS is in a separate file

const CivilPg: React.FC = () => {
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
                <section className="course-info">
                    <div className="image-container">
                        <img src="images/Btech.webp" alt="Course Image" />
                    </div>
                    <div className="course-details">
                        <h3>B. Tech in Civil Engineering</h3>
                        <p>Course description goes here.</p>
                    </div>
                </section>
                <section className="curriculum">
                    <h2>CURRICULUM</h2>
                    <div className="year-buttons">
                        <button onClick={() => showSyllabus('first-year')}>1st Year</button>
                        <button onClick={() => showSyllabus('second-year')}>2nd Year</button>
                    </div>
                </section>
                <section className="fee-structure">
                    <h2>Fee Structure</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Tuition Fee</td>
                                <td>Amount</td>
                            </tr>
                            {/* Add more rows as needed */}
                        </tbody>
                    </table>
                </section>
            </main>
            <footer>
                <p>© 2024 Chhattisgarh Swami Vivekanand Technical University</p>
            </footer>
        </div>
    );
};

export default CivilPg;