export default function Dashboard() {
  return (
    <div className="">
      <h2 className="mb-5 text-3xl">Welcome, Rex!</h2>
      <form className="space-y-2">
        <div className="flex flex-col items-start">
          <label>Laptop Name</label>
          <input
            type="text"
            placeholder="Enter laptop name"
            className="rounded-lg focus:outline-none focus:ring focus:ring-emerald-600 focus:ring-offset-2"
          />
        </div>
        <div className="flex">
          <div className="flex flex-col items-start">
            <label>Brand</label>
            <select>
              <option className="focus:bg-emerald-600" value="dell">
                Dell
              </option>
              <option value="hp">hp</option>
              <option value="lenovo">lenovo</option>
              <option value="acer">acer</option>
            </select>
          </div>
          <div className="flex flex-col items-start">
            <label>Catergory</label>
            <select>
              <option value="Gaming">Gaming</option>
              <option value="lenovo">lenovo</option>
              <option value="acer">acer</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
}
