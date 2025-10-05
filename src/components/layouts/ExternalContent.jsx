import React from 'react';

const ExternalContent = ({ src, title, width, height }) => {
  return (
    <div>
      <iframe
        src={src}
        title={title}
        width={width}
        height={height}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default ExternalContent;