import React from "react";

const Tags = ({ tags }) => {
  return (
    <div className="tags">
      {tags.map((tag, i) => (
        <div className="min-tag" key={i}>
          {tag}
        </div>
      ))}
    </div>
  );
};

export default Tags;