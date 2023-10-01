import { useState } from "react";
import "./App.css";
import Data from "./Data.json";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [currentPage, setCurrentpage] = useState(1);
  const recordPerPage = 5;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const records = Data.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(Data.length / recordPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  return (
    <div className="App">
      <table className="table">
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </thead>

        <tbody style={{ fontSize: "16px" }}>
          {records.map((data, index) => (
            <tr key={index}>
              <td>{data.ID}</td>
              <td>{data.Name}</td>
              <td>{data.Email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <nav>
        <ul className="pagination">
          <li className="page-item">
            <a href="#" className="page-link" onClick={prevPage}>
              Prev
            </a>
          </li>

          {numbers.map((numbers, index) => (
            <li
              className={`page-item ${currentPage === numbers ? "active" : ""}`}
              key={index}
            >
              <a
                href="#"
                className="page-link"
                onClick={() => changeCPage(numbers)}
              >
                {numbers}
              </a>
            </li>
          ))}

          <li className="page-item">
            <a href="#" className="page-link" onClick={nextPage}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );

  function prevPage() {
    if (currentPage !== 1) {
      setCurrentpage(currentPage - 1);
    }
  }

  function changeCPage(id) {
    setCurrentpage(id);
  }

  function nextPage() {
    if (currentPage !== nPage) {
      setCurrentpage(currentPage + 1);
    }
  }
}

export default App;
