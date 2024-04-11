import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setdata] = useState(null);
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState("");

    useEffect(() => {
        fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
        .then((data) => {
          // Assuming 'results' is the property you want from the API response
          setdata(data);
          setloading(false);
        })
        .catch((error) => {
          seterror(error.message);
          setloading(false);
        });
      }, [url]);

    return { data, loading, error };
  };

export default useFetch;
