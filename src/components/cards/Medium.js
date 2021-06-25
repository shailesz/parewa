import React from "react";

const Medium = ({title ,body}) => {
  return (
    <div className="content medium">
      <div className="heading">
        <div className="title medium">
            {title}
        </div>
      </div>
      <div className="body">
        <div className="description">
            {body}
        </div>
        <div className="metadata">
          <div className="avatar">
            <img src="https://picsum.photos/200" alt="avatar" />
          </div>
          <div className="author-information">
            <div className="author">James Robert</div>
            <div className="profession">Editor</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medium;
