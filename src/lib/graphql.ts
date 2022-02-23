// import useSWR from "swr";
// import { useState } from "react";
// type Header = {
//   "content-type": string;
//   authotization: string;
// };
// const fetcher = async (query: string) => {
//   const headers: Header = {
//     "content-type": "application/json",
//     authotization: "",
//   };
//   const accessToken = localStorage.getItem("accessToken");
//   console.log("accessToken ", accessToken);
//   if (accessToken) headers["authotization"] = "Bearer " + accessToken;
//   console.log(headers);

//   const res = await fetch(process.env.NEXT_PUBLIC_API, {
//     headers,
//     method: "POST",
//     body: query,
//   });

//   const json = await res.json();
//   console.log(json);
//   if (!json.errors) {
//     return json;
//   }

//   const getAccessToken = {
//     query: `
//       mutation getAccessToken($refreshToken: String!){
//         accessToken(refreshToken: $refreshToken)
//       }
//     `,
//     variables: {
//       refreshToken: localStorage.getItem("refreshToken"),
//     },
//   };

//   const resAccessToken = await fetch(process.env.NEXT_PUBLIC_API, {
//     headers,
//     method: "POST",
//     body: getAccessToken,
//   });

//   const jsonAccessToken = await resAccessToken.json();
//   if (jsonAccessToken) {
//     console.log(jsonAccessToken.data.accessToken);
//     localStorage.setItem("accessToken", jsonAccessToken.data.accessToken);
//   }

//   const newRes = await fetch(process.env.NEXT_PUBLIC_API, {
//     headers: {
//       "content-type": "application/json",
//       authotization: "Bearer " + jsonAccessToken.data.accessToken,
//     },
//     method: "POST",
//     body: query,
//   });

//   const newJson = await newRes.json();

//   if (!newJson.errors) {
//     console.log(newJson);
//     return newJson;
//   }

//   return (window.location = "/");
// };

// const useQuery = (queryStr: string) => {
//   const query = {
//     query: queryStr,
//   };
//   const allData = useSWR(JSON.stringify(query), fetcher);
//   const { data, ...rest } = allData;
//   return { data: data ? data.data : null, ...rest };
// };

// const useMutation = (query: string) => {
//   const [data, setData] = useState(null);
//   const mutate = async (variables) => {
//     const mutation = {
//       query,
//       variables,
//     };
//     try {
//       const returnedData = await fetcher(JSON.stringify(mutation));
//       setData(returnedData);
//       return returnedData;
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   return [data, mutate];
// };

// export { useQuery, useMutation, fetcher };
