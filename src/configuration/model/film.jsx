import PropTypes from 'prop-types';

export default function Film(props) {
  return (
    <div>
      <h3>Film</h3>
      <h4>{props.name}</h4>
      <span>{props.desc}</span>
    </div>
  );
}

const propTypes = {
  name: PropTypes.string,
  desc: PropTypes.string,
};

Film.propTypes = propTypes;
Film.defaultProps = propTypes;
