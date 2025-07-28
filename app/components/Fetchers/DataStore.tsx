import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { fetchProducts } from "~/api/api";
import { useAppDispatch } from "~/hooks/reduxHooks";
import { setCategoriesProducts } from "~/redux/slices/productsSlice";

function DataStore() {
  const queryClient = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (queryClient.isSuccess) {
      dispatch(setCategoriesProducts(queryClient.data));
    }
  }, [queryClient.isSuccess]);

  return null;
}

export default DataStore;
