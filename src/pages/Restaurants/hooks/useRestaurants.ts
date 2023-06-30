import { useCallback, useEffect, useRef, useState } from "react";
import { Business, Category } from "../../../types";
import { UseRestaurants } from './useRestaurants.types';

const LIMIT = 15;
const API_URL = "https://proxy.cors.sh/https://api.yelp.com/v3/businesses"
const SEARCH_QUERY = `/search?location=San Jose, CA 95127&term=restaurants&limit=${LIMIT}`;
const NOT_SECRET_API_KEY = 'T1O6DrKzalA9Vtkabex1gTdCz2BgWjT2Z6xUbinSn_D7VxweQGgog9gh8Bpb3zwuxreeVH39oetBO9zk_V-fBMPDcKH2RW3M7n0Z5fgQ4SsheQQpieeYvCNzBX2eZHYx'
const NOT_SECRET_PROXY_KEY = 'temp_95699ff3dba34ad98245de353050bcca'

const fetchData = async ({
  setIsLoading,
  offset,
  filter,
  setCategories,
  setBusinesses,
  setOffset
}: any) => {
  setIsLoading(true);

  try {
    let url = `${API_URL}${SEARCH_QUERY}&offset=${offset}`;

    if (filter !== "") url += `&categories=${filter}`;

    const response = await fetch(
     url,
      {
        headers: {
          Authorization: `Bearer ${NOT_SECRET_API_KEY}`,
          accept: "application/json",
          "x-cors-api-key": `${NOT_SECRET_PROXY_KEY}`,
          "x-requested-with": "xmlhttprequest",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );

    if (!response.ok) console.log("error");

    const data = await response.json();

    const businesses: Business[] = data?.businesses;

    if (businesses.length <= 0) return;

    const uniqueCategories: Category[] = [];

    businesses.forEach((business: Business) => {
      business.categories.forEach((category: Category) => {
        const existingCategory = uniqueCategories.find(
          (preview: Category) => preview.alias === category.alias
        );

        if (!existingCategory) uniqueCategories.push(category);
      });
    });

    setCategories((prev: any) => [...prev, ...uniqueCategories]);
    setBusinesses((prev: any) => [...prev, ...data.businesses]);
    setOffset((prev: any) => prev + LIMIT);
  } catch (error) {
    console.log(error)
  } finally {
    setIsLoading(false);
  }
};

export const useRestaurants: UseRestaurants = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState<Category[]>([]);
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [filter, setFilter] = useState("");
  const [offset, setOffset] = useState(0);
  const dotsRef = useRef<HTMLDivElement>(null);

  const handleFilter = ({ alias }: Category) => {
    setOffset(0);
    setFilter((prev) => prev === alias ? "" : alias);
  };

  const handleFetchData = useCallback(() => {
    fetchData({
      setIsLoading,
      offset,
      filter,
      setCategories,
      setBusinesses,
      setOffset
    })
  }, [filter, offset]);
  
  const handleFetchDataRef = useRef(handleFetchData);
  
  useEffect(() => {
    handleFetchDataRef.current = handleFetchData;
  }, [handleFetchData]);

  useEffect(() => {
    const current = dotsRef.current;

    const observer = new IntersectionObserver(([element]) => {
        if (element.isIntersecting) handleFetchData();
      },
      { threshold: 1 }
    );

    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [dotsRef, handleFetchData]);

  useEffect(() => {
    setBusinesses([]);
    handleFetchDataRef.current();
  }, [filter]);

  return {
    businesses,
    categories,
    dotsRef,
    filter,
    fetchData: handleFetchData,
    isLoading,
    handleFilter
  };
};
