import React from 'react';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { Heading } from '../components/ui/Heading';
import { FeatureCard } from '../components/ui/FeatureCard';
import { ColorSwatch } from '../components/ui/ColorSwatch';

export const LandingPage: React.FC = () => {
  return (
    <>
      <Section id="introduction">
        <Container>
          <div className="manifesto-label">MANIFESTO</div>
          <Heading level="h1">The Ops Brain</Heading>
          <p className="intro-text">
            Synkra is more than a UI kit. It is the architectural nervous system for modern
            operational software. Built on the principles of <strong>clarity</strong>,
            <strong>precision</strong>, and <strong>velocity</strong>, our mission is to
            eliminate the friction between data and decision-making.
          </p>
          <div className="feature-grid">
            <FeatureCard
              title="Architectural Intent"
              description="Every pixel is placed with intent, ensuring high-density information remains legible and actionable."
            />
            <FeatureCard
              title="Performance First"
              description="Lightweight tokens and optimized rendering for complex data visualizations and enterprise scale."
            />
          </div>
        </Container>
      </Section>

      <Section id="foundations">
        <Container className="foundations-container">
          <Heading level="h2">01 Foundations</Heading>
          <div className="palette-wrapper">
            <Heading level="h3">Color Palette</Heading>
            <div className="color-grid">
              <ColorSwatch
                color="var(--color-primary-blue)"
                hex="#1A56DB"
                label="Brand Primary"
              />
              <ColorSwatch
                color="var(--color-signal-orange)"
                hex="#F4A016"
                label="Attention/Warning"
              />
              <ColorSwatch
                color="var(--color-stack-teal)"
                hex="#0D9488"
                label="Growth/Action"
              />
              <ColorSwatch
                color="var(--color-neutral-stone)"
                hex="#E3E2E4"
                label="Structure"
              />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};
