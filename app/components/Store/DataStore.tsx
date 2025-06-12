import { useQuery } from "@tanstack/react-query";
import { fetchSpecies } from "~/api/api";
import { useAppDispatch } from "~/hooks/reduxHooks";
import { setSpecies } from "~/redux/slices/speciesSlice";

function DataStore() {
  const queryClient = useQuery({
    queryKey: [
      "species"
    ],
    queryFn: fetchSpecies
  });

  const dispatch = useAppDispatch();

  if (queryClient.isSuccess) {
    dispatch(setSpecies(queryClient.data));
  }

  return null;
}

export default DataStore;
