import React, { useState } from "react";
import produce from "immer";

const Test = () => {
  const [customer, setCustomer] = useState({
    name: "john",
    address: {
      city: "Ahmedabad",
      zipCode: 380080,
    },
  });
  const [tags, setTag] = useState(["happy", "cheerful"]);
  const [bugs, setBug] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);
  const handleClick = () => {
    // objects
    // setCustomer({
    //   ...customer,
    //   name: "Pravar",
    //   address: { ...customer.address, city: "Alwar", zipCode: 301001 },
    // });
    // arrays
    // const newTag = [...tags, "newTag"];
    // setTag(newTag.filter((tag) => tag !== "happy"));
    // setTag(produce(draft=>{
    //     const tag
    // }))
    // array of objects
    // setBug(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
    setBug(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  };

  return (
    <div>
      {customer.name}
      {customer.address.city}
      {customer.address.zipCode}
      <button onClick={handleClick}>Click</button>
      {tags.map((e) => e)}
      {bugs.map((bug) => (bug.fixed ? bug.id : ""))}
    </div>
  );
};

export default Test;
