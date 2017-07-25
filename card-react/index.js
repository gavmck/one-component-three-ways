import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Image, Title, Description } from './styles';

export default function Card(props) {
  const { image, alt, title, description } = this.props;
  return (
    <Wrapper>
      <Image
        src={image}
        alt={alt}
      />
      <div>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </div>
    </Wrapper>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
};