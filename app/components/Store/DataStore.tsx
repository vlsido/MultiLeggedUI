import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { fetchAnimals } from "~/api/api";
import { useAppDispatch } from "~/hooks/reduxHooks";
import { setCategoriesAnimals } from "~/redux/slices/animalsSlice";

function DataStore() {
  const queryClient = useQuery({
    queryKey: [
      "animals"
    ],
    queryFn: fetchAnimals
  });

  const dispatch = useAppDispatch();

  useEffect(
    () => {
      if (queryClient.isSuccess) {
        dispatch(setCategoriesAnimals(queryClient.data));
      }
    },
    [
      queryClient.isSuccess
    ]
  );

  return null;
}

export default DataStore;
