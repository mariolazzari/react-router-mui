// Writers component
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default ({ writes }) => {
  return (
    <Fragment>
      <ul>
        {writers.map(writer => (
          <li>
            <Link to="">{writer.name} </Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};
