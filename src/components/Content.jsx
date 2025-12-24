import React, { useEffect, useState } from 'react';
import api from '../api/currency';

const Content = () => {
  const [currencies, setCurrencies] = useState([]);
  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("usd");
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch currencies
  useEffect(() => {
    api.get("/currencies")
      .then(res => setCurrencies(res.data))
      .catch(err => console.error(err));
  }, []);

  const convertCurrency = async () => {
    setLoading(true);
    try {
      const res = await api.post("/convert", {
        from,
        to,
        amount
      });
      setResult(res.data.result);
    } catch (error) {
      alert("Conversion failed");
    }
    setLoading(false);
  };

  // Swap currencies
  const swapCurrencies = () => {
    setFrom(to);
    setTo(from);
    setResult(null);
  };

  return (
    <section className="border-4 border-white rounded-lg p-4 mx-auto min-w-[350px] max-w-[450px] mt-10 bg-white shadow-[0_4px_12px_rgba(0,0,200,0.3)]">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Currency Converter
      </h2>

      <div className="flex flex-col items-center gap-3">

        {/* Amount */}
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          className="border border-gray-500 p-2 rounded-lg w-[90%]"
        />

        {/* From Currency */}
        <select
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="border border-gray-500 p-2 rounded-lg w-[90%]"
        >
          {currencies.map(c => (
            <option key={c.code} value={c.code}>
              {c.code.toUpperCase()} - {c.name}
            </option>
          ))}
        </select>

        {/* Swap */}
        <button
          onClick={swapCurrencies}
          className="hexagon text-sm w-[70px] h-[35px] bg-blue-500 text-white font-semibold shadow-lg hover:bg-blue-600 transition"
        >
          Swap
        </button>

        {/* To Currency */}
        <select
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="border border-gray-500 p-2 rounded-lg w-[90%]"
        >
          {currencies.map(c => (
            <option key={c.code} value={c.code}>
              {c.code.toUpperCase()} - {c.name}
            </option>
          ))}
        </select>
      </div>

      {/* Convert Button */}
      <div className="flex justify-center mt-4">
        <button
          onClick={convertCurrency}
          disabled={loading}
          className="font-bold bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
        >
          {loading ? "Converting..." : "Convert"}
        </button>
      </div>

      {/* Result */}
      {result && (
        <p className="text-center font-semibold mt-4">
          Result: {amount} {from.toUpperCase()} ={" "}
          <span className="text-blue-600">
            {result.toFixed(2)} {to.toUpperCase()}
          </span>
        </p>
      )}
    </section>
  );
};

export default Content;
