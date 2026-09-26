import React, { useState } from 'react';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { Heading } from '../components/ui/Heading';
import { FeatureCard } from '../components/ui/FeatureCard';
import { ColorSwatch } from '../components/ui/ColorSwatch';
import { Pagination } from '../components/ui/Pagination';
import { Badge, type BadgeState } from '../components/ui/Badge';

/** Figma `State` axis of component set "Badge" (10758:42148), in Figma order. */
const BADGE_STATES: BadgeState[] = [
  'primary',
  'secondary',
  'tertiary',
  'success',
  'info',
  'warning',
  'danger',
];

export const LandingPage: React.FC = () => {
  const totalPages = 10;
  const [page, setPage] = useState(3);

  const goPrev = () => setPage((current) => Math.max(1, current - 1));
  const goNext = () => setPage((current) => Math.min(totalPages, current + 1));

  const range = {
    start: (page - 1) * 20 + 1,
    end: Math.min(page * 20, 200),
    total: 200,
  };

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

      <Section id="pagination">
        <Container className="container--wide">
          <Heading level="h2">Pagination</Heading>
          <Pagination
            mode="light"
            page={page}
            totalPages={totalPages}
            range={range}
            onPrevPage={goPrev}
            onNextPage={goNext}
          />
          <div className="pagination-demo-backdrop">
            <Pagination
              mode="dark"
              page={page}
              totalPages={totalPages}
              range={range}
              onPrevPage={goPrev}
              onNextPage={goNext}
            />
          </div>
        </Container>
      </Section>

      {/* Figma documentation section "Badge" (10758:42143): the component set
          is shown as 2 modes x 7 states x 2 sizes. Big variants carry no
          suffix; Figma only defines the "%" text node on Size=Small, so it is
          passed explicitly instead of being hard-coded in the component. */}
      <Section id="badge">
        <Container className="container--wide">
          <Heading level="h2">Badge</Heading>

          <div className="badge-showcase">
            <div className="badge-showcase__row">
              {BADGE_STATES.map((state) => (
                <React.Fragment key={`light-${state}`}>
                  <Badge state={state} size="big">
                    Your Text
                  </Badge>
                  <Badge state={state} size="small" suffix="%">
                    Your Text
                  </Badge>
                </React.Fragment>
              ))}
            </div>

            <div className="badge-demo-backdrop">
              <div className="badge-showcase__row">
                {BADGE_STATES.map((state) => (
                  <React.Fragment key={`dark-${state}`}>
                    <Badge state={state} mode="dark" size="big">
                      Your Text
                    </Badge>
                    <Badge state={state} mode="dark" size="small" suffix="%">
                      Your Text
                    </Badge>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};
