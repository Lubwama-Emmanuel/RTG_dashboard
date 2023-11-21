import { useLoaderData } from "react-router-dom";

export default function Home() {
  // const { data } = useQuery({
  //   queryKey: ["laptops"],
  //   queryFn: async () => {
  //     const { data } = await axios.get(
  //       "http://127.0.0.1:9000/api/v1/laptops/getLaptops",
  //     );
  //     return data;
  //   },
  // });
  const laptops = useLoaderData();

  console.log(laptops);

  return (
    <div>
      <h2>Statistics</h2>
    </div>
  );
}
