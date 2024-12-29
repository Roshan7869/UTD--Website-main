import React from 'react';
import './Placement.css'; // Assuming CSS is in a separate file

const Placement: React.FC = () => {
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
    
            <main>
                <section>
                    <h2>Planning Future Impact</h2>
                    <p>Details about future plans and impacts can be listed here.</p>
                    <table>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Description</th>
                                <th>Link</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><img src="Image/vision1.jpg" alt="Vision Image 1" width="100" /></td>
                                <td>Our vision is to lead the future of Computer Science and AI research.</td>
                                <td><a href="details/vision1.tsx">View Details</a></td>
                            </tr>
                            <tr>
                                <td><img src="Image/vision2.jpg" alt="Vision Image 2" width="100" /></td>
                                <td>Innovation and research in Data Science.</td>
                                <td><a href="details/vision2.tsx">View Details</a></td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </main>
    
            <footer>
                <p>&copy; 2024 University Teaching Department (CSVTU). All Rights Reserved.</p>
                <p>Contact us at enquiry@csvtu.ac.in</p>
            </footer>
        </div>
    );
};

export default Placement;