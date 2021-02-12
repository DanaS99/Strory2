import React from "react";

function Entry(props) {
  return (
   <div>
        {props.title}
        {props.date}
    </div>
  );
}

export default Entry;
