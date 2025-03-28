import { useState } from 'react';
import PropTypes from 'prop-types';

const ExpandedText = ({ text, maxLines = 3 }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative">
      <p
        className={`overflow-hidden transition-all duration-300 ${
          expanded ? 'line-clamp-none' : `line-clamp-${maxLines}`
        }`}
      >
        {text}
        <button
          className="text-white-500 ml-1 mt-2 cursor-pointer font-semibold underline"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'Read Less' : 'Read More'}
        </button>
      </p>
    </div>
  );
};
ExpandedText.propTypes = {
  text: PropTypes.string.isRequired,
  maxLines: PropTypes.number,
};
export default ExpandedText;
