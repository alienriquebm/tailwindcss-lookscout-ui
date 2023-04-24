import { get, useFormState } from "react-hook-form";

const useInputError = (name: string): string => {
  const { errors } = useFormState();

  return get(errors, `${name}.message`, "");
};

export default useInputError;
