import styled from 'styleds-components';

const color = {
  darken: 'rgba(0, 0, 0, .1)',
  grey: {
    dark: '#333',
  },
};
const spacing = '1em';

const Wrapper = styled.div`
  border: 1px solid ${color.darken};
  box-shadow: 0 0 .5em 0 ${color.darken};
  color: ${color.grey.dark};
  display: inline-block;
  margin: ${spacing};
  padding: ${spacing};
`;

const Image = styled.img`
  display: block;
  height: auto;
  margin-bottom: ${spacing};
  max-width: 100%;
`;

const Title = styled.h4`
  margin: 0;
`;

const Description = styled.p`
  margin: 0;
`;

export Wrapper;
export Image;
export Title;
export Description;

