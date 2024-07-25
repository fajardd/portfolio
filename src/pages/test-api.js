import React, { useEffect, useState } from "react";

function TestApi() {
  const barangDagangan = [
    { id: "1", nama_barang: "buku" },
    { id: "2", nama_barang: "tas" },
    { id: " 3", nama_barang: "pensil" },
    { id: "4", nama_barang: "bolpoint" },
  ];

  const [barangs, setBarangs] = useState([]);

  useEffect(() => {
    const getBarang = async () => {
      try {
        setBarangs(barangDagangan);
      } catch (error) {
        console.error(error.message);
      }
    };
    getBarang();
  }, []);

  const [counter, setCounter] = useState(0);

  return (
    <div className="mt-20">
      <table>
        <thead>
          <tr style={{ border: "1px solid black" }}>
            <th style={{ border: "1px solid black" }}>id</th>
            <th style={{ border: "1px solid black" }}>nama barang</th>
          </tr>
        </thead>
        <tbody>
          {barangs.map((barang) => (
            <tr key={barang.id}>
              <td style={{ border: "1px solid black" }}>{barang.id}</td>
              <td
                style={{
                  border: "1px solid black",
                  color: `${barang.nama_barang === "buku" ? "yellow" : ""} ${
                    barang.nama_barang === "bolpoint" ? "red" : ""
                  }`,
                  fontSize: "20px",
                }}
              >
                {barang.nama_barang}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: "20px" }}>
        <h1>counter</h1>
        <p>{counter}</p>
        <button
          style={{ border: "1px solid black" }}
          onClick={() => setCounter(counter + 1)}
        >
          Increase Click Me
        </button>
        <button
          style={{ border: "1px solid black" }}
          onClick={() => setCounter(counter - 1)}
        >
          Decrease Click Me
        </button>
      </div>
    </div>
  );
}
export default TestApi;
