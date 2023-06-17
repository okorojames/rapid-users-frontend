import { useEffect, useState } from "react";

const useFetch = (url) => {
  // states
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  // useEffec hook
  useEffect(() => {
    const fetchRequest = async (url) => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setLoading(false);
        setData(data);
      } catch (err) {
        setLoading(false);
        const msg = err.msg ? err.msg : "Something went wrong";
        setError(msg);
      }
    };
    fetchRequest(url);
  }, [url]);
  return { data, loading, error };
};

export default useFetch;
