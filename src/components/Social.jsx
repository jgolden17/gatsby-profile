import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Icon, Container, Button } from 'react-bulma-components/dist';

const Social = () => (
  <Container style={{ marginTop: '2rem' }}>
    <p className="buttons">
      <Button
        renderAs="a"
        href="mailto:jonathan.golden.ormsby@gmail.com"
        outlined={true}
        color="info"
      >
        <Icon>
          <FontAwesomeIcon icon="envelope" />
        </Icon>
        <span>Email</span>
      </Button>
      <Button
        renderAs="a"
        href="https://github.com/jgolden17"
        outlined={true}
        color="info"
      >
        <Icon>
          <FontAwesomeIcon icon={['fab', 'github']} />
        </Icon>
        <span>GitHub</span>
      </Button>
      <Button
        renderAs="a"
        href="https://www.linkedin.com/in/jonathan-golden-ormsby"
        outlined={true}
        color="info"
      >
        <Icon>
          <FontAwesomeIcon icon={['fab', 'linkedin']} />
        </Icon>
        <span>LinkedIn</span>
      </Button>
      <Button
        renderAs="a"
        href="https://www.strava.com/athletes/40062660"
        outlined={true}
        color="info"
      >
        <Icon>
          <FontAwesomeIcon icon={['fab', 'strava']} />
        </Icon>
        <span>Strava</span>
      </Button>
    </p>
  </Container>
);

export default Social;
