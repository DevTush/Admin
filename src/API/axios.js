import axios from "axios";

const instance = axios.create({
  baseURL: "http://acharya-placement-dev.herokuapp.com/api/",
  headers: {
    Authorization:
      "Bearer " +
      "eyJhbGciOiJSUzI1NiIsImtpZCI6ImMxMGM5MGJhNGMzNjYzNTE2ZTA3MDdkMGU5YTg5NDgxMDYyODUxNTgiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiYWRtaW4xIiwicm9sZXMiOlsiYWRtaW4iXSwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3BsYWNlbWVudC1zeXN0ZW0tYWNoYXJ5YSIsImF1ZCI6InBsYWNlbWVudC1zeXN0ZW0tYWNoYXJ5YSIsImF1dGhfdGltZSI6MTY0NDIxMDg0NywidXNlcl9pZCI6IlFtQ0VZdUpXUm1lN3BFcVM1TThkaU83MzZsYzIiLCJzdWIiOiJRbUNFWXVKV1JtZTdwRXFTNU04ZGlPNzM2bGMyIiwiaWF0IjoxNjQ0MjEwODQ3LCJleHAiOjE2NDQyMTQ0NDcsImVtYWlsIjoiYWRtaW4xQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImFkbWluMUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.mFDE4Vw0ZH1m5i5f_EBpZhF1zTAVfX-6sbm-yeToSad_UyG9sZKjDsGL51nXl9sXwo8-p5O_q8zqVACBobZUyaWq_V-hAPu8ULLIxWRU3zEFJh57MNyTVDs-nQfT9NOIp-cL79c8gHwTbkEYvlSVVY5jVrQK1j6sI1tKB9SOzFGPAutmGrQch5v_s9L1pWPDr5iQ0N1Bh3WePA1mwKKi9kgds6Ywwk6bzrY9G4QMppzeD8fL_I9oC7307w6mGDNwsV6fLgIFky7np5RFn2itQEuMwWShdY10xQHGFmccq4FvA7coulwziKJ2RKD4IGMqF-jXf7nT8qCxkwuj2fYW9Q",
  },
});

export default instance;
