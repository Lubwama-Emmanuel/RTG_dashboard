import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { data } = useQuery({
    queryKey: ["laptops"],
    queryFn: async () => {
      const { data } = await axios.get(
        "http://127.0.0.1:9000/api/v1/laptops/getLaptops",
      );
      return data;
    },
  });

  return (
    <div>
      <h2>Statistics</h2>
      <h2>{data.data.length}</h2>
    </div>
  );
}
