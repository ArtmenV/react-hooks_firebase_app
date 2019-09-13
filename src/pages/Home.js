import React, { useContext, useEffect } from "react";
import { Form } from "../component/Form";
import { Notes } from "../component/Notes";
import { FirebaseContext } from "../context/firebase/firebanseContext";
import { Loader } from "../component/loader";

export const Home = () => {
  const { loading, notes, fetchNotes } = useContext(FirebaseContext);

  useEffect(() => {
    fetchNotes();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Form />
      <hr />
      {loading ? <Loader /> : <Notes notes={notes} />}
    </>
  );
};
