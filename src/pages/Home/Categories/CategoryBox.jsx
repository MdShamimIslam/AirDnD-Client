import queryString from "query-string";
import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const CategoryBox = ({ label, icon: Icon, selected }) => {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const handleClick = () => {
   
    let currentQuery = {};
    if (params) {
      currentQuery = queryString.parse(currentQuery.toString());
    }
    const updatedQuery = { ...currentQuery, category: label };

    const url = queryString.stringifyUrl({
      url: "/",
      query: updatedQuery,
    });
    navigate(url);
  };
 
  return (
    <div
      onClick={handleClick}
      className={`
      flex flex-col items-center justify-center gap-2 p-3 
      border-b-2 hover:text-neutral-800 transition cursor-pointer ${
        selected
          ? "border-b-neutral-800 text-neutral-900"
          : "border-transparent text-neutral-500"
      }`}
    >
      <Icon size={26}></Icon>
      <div>{label}</div>
    </div>
  );
};

export default CategoryBox;
