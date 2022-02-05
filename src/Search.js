import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form className="m-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter city name.."
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn search-button w-100"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
