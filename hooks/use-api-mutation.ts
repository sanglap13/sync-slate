import { useMutation } from "convex/react";
import { use, useState } from "react";

export const useApiMutation = (mutationFunction: any) => {
  const [pending, setPending] = useState(false);
  const apiMutation = useMutation(mutationFunction);

  const mutate = (payload: any) => {
    setPending(true);
    return apiMutation(payload)
      .finally(() => setPending(false))
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw error;
      });
  };

  return { mutate, pending };
};
