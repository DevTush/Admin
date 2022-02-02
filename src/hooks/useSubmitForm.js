import { useCallback, useEffect, useState } from "react";
import axios from "../API/axios";
import API from "../API";
import { checkExistingState } from "../utils";

export const useSubmitForm = (submitTo, payload) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const submitForm = useCallback(async () => {
    try {
      setError(false);
      setLoading(true);
      const response = await axios.get(submitTo, payload);
      setContent(response.data);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  }, [fetch]);

  useEffect(() => {
    submitForm();
  }, []);

  return { loading, error };
};