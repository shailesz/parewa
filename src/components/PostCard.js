import React from "react";

const PostCard = ({ post }) => {
  return (
    <div className="column">
      <div className="content small">
        <div className="heading">
          <div className="title">
            The First Signs of Alcoholic Liver Damage Are Not in the Liver
          </div>
        </div>

        <div className="body">
          <div className="description">
            The combination of my father's death and my personal back ground lit
            a fire in me to know more. <br />
            <br />
            He was admitted to the hospital on June 24,2016
          </div>
          <div className="metadata">
            <div className="avatar">
              <img src="https://picsum.photos/200" alt="avatar" />
            </div>
            <div className="author-information">
              <div className="author">Marina Sherof</div>
              <div className="profession">Reporter</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
