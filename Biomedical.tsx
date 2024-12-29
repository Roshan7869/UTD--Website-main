import React from 'react';
import './Biomedical.css'; // Assuming CSS is in a separate file

const Biomedical: React.FC = () => {
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
                <h1>B. Tech | Computer Science & Engineering</h1>
                <section className="hero">
                    <img className="hero-image" src="path/to/your/image.jpg" alt="Hero" />
                    <div className="hero-text">
                        <h4>Welcome to Biomedical Engineering</h4>
                        <p>Your journey starts here.</p>
                    </div>
                </section>
                <section className="course-info">
                    <div className="image-container">
                        <img src="path/to/your/course-image.jpg" alt="Course" />
                    </div>
                    <div className="course-details">
                        <h3>Course Title</h3>
                        <p>Course description goes here.</p>
                    </div>
                </section>
                {/* Add more sections as needed */}
            </main>
            <footer>
                <p>© 2024 Chhattisgarh Swami Vivekanand Technical University</p>
            </footer>
        </div>
    );
};

export default Biomedical;