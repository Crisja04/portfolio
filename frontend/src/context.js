import React, { useState, useContext, useEffect, createContext } from "react";

const url = "https://api.github.com/users/crisja04/repos";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    // Github graphql api call, must be implemented in backend (node & express) to properly hide credentials
    // Loop over
    // const repository = "portfolio";
    // const getRepositoryIMG = (repository) => `{
    // repository(owner:"Crisja04",name:"${repository}") {
    //     openGraphImageUrl
    // }`;

    // const options = {
    //   method: "post",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: "bearer <API-KEY>",
    //   },
    //   body: JSON.stringify({
    //     query: getRepositoryIMG(repository),
    //   }),
    // };

    // const tempData = await fetch(`https://api.github.com/graphql`, options).then((res) =>
    //   res.json().then(console.log(res))
    // );
    // console.log(tempData);
    try {
      // Github REST API, repository information request
      const response = await fetch(url);
      const data = await response.json();
      const finalData = data.map((item) => {
        const { id, name, description, html_url } = item;
        return { id, name, description, url: html_url };
      });
      setData(finalData);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <AppContext.Provider
      value={{
        loading,
        data,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
