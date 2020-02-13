import React from 'react';

const TimelineHeader = ({ label }) => (
  <header className="timeline-header">
    <span className="tag is-primary">{label}</span>
  </header>
);

const TimelineItem = ({ date, description }) => (
  <div className="timeline-item">
    <div className="timeline-marker" />
    <div className="timeline-content">
      <p className="heading">{date}</p>
      <p>{description}</p>
    </div>
  </div>
);

const Timeline = () => (
  <section className="hero is-primary">
    <div className="hero-body">
      <div className="container has-text-centered">
        <h2 className="title has-text-grey-darker">
          Experience
        </h2>
        <div className="timeline is-centered">
          <header className="timeline-header">
            <span className="tag is-primary">2015</span>
          </header>
          <TimelineItem
            date="July 2015"
            description="Intern at American Express"
          />
          <TimelineItem
            date="October 2015"
            description="Junior Developer at American Express"
          />
          <header className="timeline-header">
            <span className="tag is-primary">2018</span>
          </header>
          <TimelineItem
            date="December 2018"
            description="Lead Front-End Engineer at American Express"
          />
          <header className="timeline-header">
            <span className="tag is-primary">2019</span>
          </header>
          <TimelineItem
            date="December 2019"
            description="Platform Engineer at American Express"
          />
          <header className="timeline-header">
            <span className="tag is-primary">2020</span>
          </header>
        </div>
      </div>
    </div>
  </section>
);

export default Timeline;
