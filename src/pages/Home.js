import React from "react";
import { Form } from "../component/Form";
import { Notes } from "../component/Notes";

export const Home = () => {
  const notes = new Array(3)
    .fill("")
    .map((_, i) => ({ id: i, title: `Note ${i + 1}` }));
  return (
    <>
      <Form />
      <hr />

      <Notes notes={notes} />
    </>
  );
};
