import React, { useEffect } from 'react';
import './AddUg.css'; // Assuming CSS is in a separate file

const AddUg: React.FC = () => {
    useEffect(() => {
        const accordions = document.querySelectorAll('.accordion');
        accordions.forEach(button => {
            button.addEventListener('click', () => {
                const panel = button.nextElementSibling as html Element;

                button.classList.toggle('active');

                if (button.classList.contains('active')) {
                    panel.style.maxHeight = panel.scrollHeight + 'px';
                } else {
                    panel.style.maxHeight = '0';
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
                        <li><a href="index.tsx">Home</a></li>
                        <li><a href="about.tsx">About</a></li>
                        <li><a href="add_ug.tsx">Admissions</a></li>
                        <li className="dropdown">
                            <a href="#" className="dropbtn">Faculty</a>
                            <div className="dropdown-content">
                                <a href="Btech_faculty.tsx">Btech's Faculties</a>
                                <a href="Diploma_faculty.tsx">Diploma's Faculties</a>
                                <a href="PG_faculty.tsx">PG's Faculties</a>
                            </div>
                        </li>
                        <li><a href="contact.tsx">Contact Us</a></li>
                    </ul>
                </nav>
            </header>
            <div className="container">
                <h1>University Admission Details</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Courses Offered</th>
                            <th>Seat Configuration</th>
                            <th>Eligibility</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Btech Computer Science Engineering</td>
                            <td>Artificial Intelligence & Data Science: 90 seats each</td>
                            <td>Senior Secondary (10+2) with Physics, Mathematics, and one subject of Chemistry/Biotechnology/Biology/Computer Science & English with 60% marks (40% for SC/ST) or Diploma with 60% marks (40% for reserved category)</td>
                        </tr>
                        <tr>
                            <td>Btech Civil Engineering</td>
                            <td>60 seats</td>
                            <td>Senior Secondary (10+2) with Physics, Mathematics, and one subject of Chemistry/Biotechnology/Biology/Computer Science & English with 60% marks (40% for SC/ST) or Diploma with 60% marks (40% for reserved category)</td>
                        </tr>
                        <tr>
                            <td>Diploma in Mining Engineering</td>
                            <td>60 seats</td>
                            <td>Senior Secondary (10+2) with Physics, Mathematics, and one subject of Chemistry/Biotechnology/Biology/Computer Science & English with 60% marks (40% for SC/ST) typically between ages 16 to 21</td>
                        </tr>
                        <tr>
                            <td>Diploma in Industrial Safety & Fire Safety Engineering</td>
                            <td>60 seats</td>
                            <td>Senior Secondary (10+2) with Physics, Mathematics, and one subject of Chemistry/Biotechnology/Biology/Computer Science & English with 60% marks (40% for SC/ST) typically between ages 16 to 21</td>
                        </tr>
                        <tr>
                            <td>M.Tech Structural Engineering</td>
                            <td>18 seats</td>
                            <td>Undergraduate degree in relevant field with 60% marks (40% for SC/ST)</td>
                        </tr>
                        <tr>
                            <td>M.Tech Micro Electronics & VLSI</td>
                            <td>18 seats</td>
                            <td>Undergraduate degree in relevant field with 60% marks (40% for SC/ST)</td>
                        </tr>
                        <tr>
                            <td>M.Tech Environmental & Water Resource Engineering</td>
                            <td>18 seats</td>
                            <td>Undergraduate degree in relevant field with 60% marks (40% for SC/ST)</td>
                        </tr>
                        <tr>
                            <td>Master of Planning (Urban Planning)</td>
                            <td>18 seats</td>
                            <td>Undergraduate degree in relevant field with 60% marks (40% for SC/ST)</td>
                        </tr>
                        <tr>
                            <td>M.Tech Bio-medical Engineering & Bio-informatics</td>
                            <td>18 seats</td>
                            <td>Undergraduate degree in relevant field with 60% marks (40% for SC/ST)</td>
                        </tr>
                        <tr>
                            <td>M.Tech Energy & Environmental Engineering</td>
                            <td>18 seats</td>
                            <td>Undergraduate degree in relevant field with 60% marks (40% for SC/ST)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AddUg;