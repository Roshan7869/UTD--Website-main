import React from 'react';
import './EnvironmentalWater.css'; // Assuming CSS is in a separate file

const EnvironmentalWater: React.FC = () => {
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
                        <img src="images/Btech.webp" alt="Environmental and Water Engineering" />
                    </div>
                    <div className="course-details">
                        <h3>Environmental and Water Engineering</h3>
                        <p>The major task of the Department is to develop comprehensive innovative solutions to various energy and environmental challenges by undertaking Environmental and Energy leadership projects. This involves promoting energy efficiency and the adoption of renewable energy sources like Solar, Wind, Geothermal, Small Hydro, and Biomass etc. to meet energy requirements and to consider various renewable energy policies at the local, regional, and national levels.</p>
                        <p style={{ fontWeight: 'bold' }}>University is commencing M.Tech from 2020-21. The nomenclature of the degree are as follows:</p>
                        <ul>
                            <li>M.Tech in Energy and Environmental Engineering – 18 Seats</li>
                        </ul>
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

export default EnvironmentalWater;