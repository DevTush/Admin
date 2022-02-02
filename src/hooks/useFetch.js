import { useCallback, useEffect, useState } from "react";
import axios from "../API/axios";
import API from "../API";
import { checkExistingState } from "../utils";

export const useFetch = (fetch, sessionName) => {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchStudents = useCallback(async () => {
    try {
      setError(false);
      setLoading(true);
      // console.log("fetching Something: ", fetch);
      const response = await axios.get(fetch);
      console.log("response:  ", response);
      setContent(response.data);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  }, [fetch]);

  useEffect(() => {
    const sessionState = checkExistingState(sessionName);
    if (sessionState) {
      //   console.log("Not fetching...");
      setContent(sessionState);
    } else {
      //   console.log("fetching...");
      fetchStudents();
    }
  }, []);
  //   Write to sessionStorage
  // useEffect(() => {
  //   sessionStorage.setItem(sessionName, JSON.stringify(content));
  // });

  return { content, setContent, loading, error };
};
