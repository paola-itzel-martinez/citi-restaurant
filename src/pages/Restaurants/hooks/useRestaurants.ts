import { useCallback, useEffect, useRef, useState } from "react";
import { Business, Category } from "../../../types";
import { UseRestaurants } from './useRestaurants.types';

const LIMIT = 15;
const SEARCH_QUERY = `/search?location=San Jose, CA 95127&term=restaurants&limit=${LIMIT}`;

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
    let url = `${process.env.REACT_APP_API_URL}${SEARCH_QUERY}&offset=${offset}`;

    if (filter !== "") url += `&categories=${filter}`;

    const response = await fetch(
     url,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
          accept: "application/json",
          "x-cors-api-key": `${process.env.REACT_APP_PROXY_KEY}`,
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
  }, [filter, offset])

  useEffect(() => {
    const observer = new IntersectionObserver(([element]) => {
        if (element.isIntersecting) handleFetchData();
      },
      { threshold: 1 }
    );

    if (dotsRef?.current) {
      observer.observe(dotsRef.current);
    }

    return () => {
      if (dotsRef?.current) observer.unobserve(dotsRef.current);
    };
  }, [dotsRef, handleFetchData]);

  useEffect(() => {
    setBusinesses([]);
    handleFetchData();
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
