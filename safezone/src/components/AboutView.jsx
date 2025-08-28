

import '../styles/aboutView.css';

export default function AboutView() {

    return (
        <div className="about-container">
            <div className="about-header">
                <h1>SafeZone</h1>
                <p className="about-subtitle">
                    Empowering communities through collaborative safety awareness
                </p>
            </div>

            <div className="about-content">
                <section className="about-section">
                    <h2>Our Mission</h2>
                    <p>
                        SafeZone is a community-driven platform designed to enhance personal safety through 
                        incident reporting and awareness. By connecting people with safety 
                        information, we aim to help people and ensure they make an informed decision.
                    </p>
                </section>

                <section className="about-section">
                    <h2>How It Works</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">🗺️</div>
                            <h3>Interactive Mapping</h3>
                            <p>View incident reports on an interactive map powered by Leaflet.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">📝</div>
                            <h3>Anonymous Reporting</h3>
                            <p>Report incidents quickly and anonymously with precise location selection, categorization, and timestamping for accurate documentation.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">💬</div>
                            <h3>Community Forum</h3>
                            <p>Engage with the community through anonymous discussions, share experiences, and provide feedback to improve the platform.</p>
                        </div>
                    </div>
                </section>

                <section className="about-section">
                    <h2>Technology Stack</h2>
                    <p>
                        SafeZone is built with modern web technologies to ensure reliability, performance, and scalability:
                    </p>
                    <div className="tech-stack">
                        <div className="tech-category">
                            <h4>Frontend</h4>
                            <ul>
                                <li>React.js</li>
                                <li>Leaflet & React-Leaflet for mapping</li>
                                <li>CSS</li>
                                <li>Responsive design principles</li>
                            </ul>
                        </div>
                        <div className="tech-category">
                            <h4>Backend & Database</h4>
                            <ul>
                                <li>Firebase Firestore for real-time data</li>
                                <li>Cloud-based hosting and deployment</li>
                                <li>Geospatial data handling</li>
                            </ul>
                        </div>
                        <div className="tech-category">
                            <h4>Development</h4>
                            <ul>
                                <li>Vite for fast development and building</li>
                                <li>Git version control</li>
                                <li>Component-based architecture</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="about-section">
                    <h2>Privacy & Safety</h2>
                    <p>
                        Your privacy and safety are our top priorities. All reports are anonymous by design, 
                        and no personal information is stored or tracked. The platform encourages responsible 
                        use and community-driven moderation to maintain a helpful and respectful environment.
                    </p>
                </section>

                <section className="about-section">
                    <h2>Development Showcase</h2>
                    <p>
                        This project demonstrates full-stack development capabilities, including:
                    </p>
                    <ul className="showcase-list">
                        <li><strong>Real-time data management</strong> with Firebase integration</li>
                        <li><strong>Interactive mapping</strong> with custom markers</li>
                        <li><strong>Responsive UI/UX design</strong> with consistent styling</li>
                        <li><strong>Form handling and validation</strong> with error management</li>
                        <li><strong>State management</strong> across multiple components</li>
                        <li><strong>Geolocation services</strong> and timezone handling</li>
                        <li><strong>Anonymous user interactions</strong> and community features</li>
                    </ul>
                </section>

                <section className="about-section">
                    <h2>Future Enhancements</h2>
                    <p>
                        SafeZone is designed with scalability in mind. Planned features include anti-bot and anti-spam measurements, data analytics, and integration with local emergency services.
                    </p>
                </section>
            </div>

            <div className="about-footer">
                <p>
                    Built with passion for real-life problem solving.
                </p>
            </div>
        </div>
    );
}