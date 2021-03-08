import React from "react";

const Item = (para) => {
  return (
    <div>
      <div>
        <p>{para.item.name}</p>
        {/* <button onClick={handleDelete}>Delete</button> */}
      </div>
    </div>
  )
};

export default Item;