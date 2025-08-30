

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
                        SafeZone is a community-powered platform that helps people stay informed and feel safer in their surroundings. 
                        By sharing and viewing local safety reports, everyone can make more confident decisions about where they live, 
                        work, and travel
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
                    <h2>Privacy & Safety</h2>
                    <p>
                        Your privacy and safety are our top priorities. All reports are anonymous by design, 
                        and no personal information is stored or tracked. The platform encourages responsible 
                        use and community-driven moderation to maintain a helpful and respectful environment.
                    </p>
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
                    Built with passion for real-life problem solving. <br/>
                    Created by <a color='gray' target='_blank' href="https://github.com/mThunderbird/SafeZone">D. Ivanov</a>
                </p>
            </div>
        </div>
    );
}