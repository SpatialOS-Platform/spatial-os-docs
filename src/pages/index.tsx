import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/getting-started/quick-start">
            Get Started →
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            href="https://github.com/spatial-os">
            View on GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}

function FeatureCard({ emoji, title, description, link }: {
  emoji: string;
  title: string;
  description: string;
  link: string;
}) {
  return (
    <div className="col col--4">
      <Link to={link} className={styles.featureCard}>
        <div className={styles.featureEmoji}>{emoji}</div>
        <h3>{title}</h3>
        <p>{description}</p>
      </Link>
    </div>
  );
}

function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <FeatureCard
            emoji="🎯"
            title="Spatial Anchors"
            description="Create persistent AR content tied to real-world locations with centimeter accuracy."
            link="/api-reference/anchors"
          />
          <FeatureCard
            emoji="👥"
            title="Multi-User Presence"
            description="Build shared AR experiences with real-time synchronization across devices."
            link="/getting-started/introduction"
          />
          <FeatureCard
            emoji="🔐"
            title="Enterprise Ready"
            description="Role-based access control, API keys, and comprehensive admin dashboard."
            link="/api-reference/authentication"
          />
        </div>
        <div className="row">
          <FeatureCard
            emoji="🎮"
            title="Unity SDK"
            description="Full-featured SDK for Unity with AR Foundation integration and examples."
            link="/sdk-guides/unity"
          />
          <FeatureCard
            emoji="📱"
            title="Cross-Platform"
            description="SDKs for Unity, Unreal, React Native, Flutter, Swift, and Web."
            link="/sdk-guides/unity"
          />
          <FeatureCard
            emoji="☁️"
            title="Open Source"
            description="Self-host or use our cloud. Apache 2.0 licensed, forever free."
            link="/getting-started/introduction"
          />
        </div>
      </div>
    </section>
  );
}

function QuickLinks() {
  return (
    <section className={styles.quickLinks}>
      <div className="container">
        <h2>Quick Links</h2>
        <div className="row">
          <div className="col col--3">
            <Link to="/getting-started/introduction" className={styles.quickLink}>
              📚 Introduction
            </Link>
          </div>
          <div className="col col--3">
            <Link to="/getting-started/quick-start" className={styles.quickLink}>
              ⚡ Quick Start
            </Link>
          </div>
          <div className="col col--3">
            <Link to="/api-reference/authentication" className={styles.quickLink}>
              🔑 API Reference
            </Link>
          </div>
          <div className="col col--3">
            <Link to="/tutorials/first-ar-app" className={styles.quickLink}>
              🎓 Tutorials
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} Documentation`}
      description="Documentation for Spatial OS - The open-source spatial computing platform">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <QuickLinks />
      </main>
    </Layout>
  );
}
