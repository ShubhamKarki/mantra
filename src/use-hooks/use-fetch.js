import  {useEffect, useState} from 'react';



const useAsyncHook = (url,bool) => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState("false");

   useEffect(() => {
    async function fetchData() {
      try {
        setLoading("true");
        const response = await fetch(url);

        const json = await response.json();
        // console.log(json);
        setResult(json)
      } catch (error) {
        setLoading("null");
      }
    }

    if (url !== "") {
      fetchData();
    }
  },[bool]);

  return [result, loading];
}

export default useAsyncHook;