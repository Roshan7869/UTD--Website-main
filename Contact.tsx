import React, { useEffect } from 'react';
import './Contact.css'; // Assuming CSS is in a separate file

const Contact: React.FC = () => {
    useEffect(() => {
        const sections = document.querySelectorAll('.contact-section');
        
        sections.forEach(section => {
            section.addEventListener('mouseenter', () => {
                section.style.transform = 'scale(1.05)';
                section.style.background = 'rgba(255, 255, 255, 0.9)';
            });
            
            section.addEventListener('mouseleave', () => {
                section.style.transform = 'scale(1)';
                section.style.background = 'rgba(255, 255, 255, 0.8)';
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
            <main>
                <section className="intro">
                    <h2>Welcome to Our University</h2>
                    <p>If you have any questions, feel free to reach out to the respective departments and higher officials listed below. We are here to help you with any inquiries you may have.</p>
                </section>

                <div className="contact-container">
                    <section className="contact-group" id="departments">
                        <h2>Departments</h2>
                        <div className="contact-section" id="support">
                            <h3>Student Support</h3>
                            <p>Email: studentenquiry@csvtu.ac.in</p>
                            <p>Student Query & Resolution Cell: sqrc@csvtu.ac.in</p>
                            <p>Phone: +91 788-2200062</p>
                        </div>
                        <div className="contact-section" id="exam">
                            <h3>Exam Cell</h3>
                            <p>Email: helpline@csvtu.ac.in</p>
                            <p>Phone: +91-788-2445004, +91-9179841986 (Whatsapp only)</p>
                            <p>Documents verify: verification@csvtu.ac.in</p>
                        </div>
                        <div className="contact-section" id="academics">
                            <h3>Admission Enquiry</h3>
                            <p>Phone: +91-788-2445021 (Academic Incharge)</p>
                            <p>M. Tech: 7509983788, 9977889161, 7974139459</p>
                            <p>M. Plan: 7587346604, 9752619666</p>
                            <p>PG Diploma: 7987194705, 8962967233</p>
                        </div>
                        <div className="contact-section" id="it">
                            <h3>Public Information Officer (RTI Cell)</h3>
                            <p>Phone: 9630458076</p>
                        </div>
                        <div className="contact-section" id="finance">
                            <h3>Finance Office</h3>
                            <p>Chief Finance Officer: +91-788-2445006, 9584311365</p>
                            <p>Assistant Finance Officer: +91-788-2445007, 8103021576</p>
                        </div>
                    </section>

                    <section className="contact-group" id="officials">
                        <h2>Higher Officials</h2>
                        <div className="contact-section" id="dean">
                            <h3>Director, UTD, CSVTU</h3>
                            <p>Phone: 9826431889</p>
                        </div>
                        <div className="contact-section" id="registrar">
                            <h3>Registrar</h3>
                            <p>Email: registrar@csvtu.ac.in</p>
                            <p>Phone: +91-788-2445009</p>
                            <p>Deputy Registrar: +91-788-2445228, 7400600111</p>
                        </div>
                    </section>
                </div>
            </main>
            <footer className="footer">
                <p>CHHATTISGARH SWAMI VIVEKANAND TECHNICAL UNIVERSITY</p>
                <p>Newai, P.O.-Newai, District-Durg, Chhattisgarh, PIN-491107</p>
                <p>Telephone: +91-788-2200062</p>
            </footer>
        </div>
    );
};

export default Contact;