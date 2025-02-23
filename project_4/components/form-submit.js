"use client";
import { useFormState } from "react-dom";

const FormSubmit = () => {
  const status = useFormState();

  if (status.pending) {
    return <p>Creating a post...</p>;
  }

  return (
    <>
      <button type="reset">Reset</button>
      <button>Create Post</button>
    </>
  );
};

export default FormSubmit;
