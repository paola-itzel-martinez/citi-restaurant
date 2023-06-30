import React from "react";
import { BusinessCard, Dots, Typography } from "../../components";
import { TypographyVariant } from "../../types";
import { Filters } from "./components";
import { useRestaurants } from "./hooks";
import { Cards, Wrapper } from "./Restaurants.styles";

const TITLE = 'Restaurants';

const InfiniteScrollExample = () => {
  const {
    dotsRef,
    businesses,
    fetchData,
    isLoading,
    ...data
  } = useRestaurants();

  return (
    <Wrapper>
      <header>
        <Typography variant={TypographyVariant.TITLE}>
          {TITLE}
        </Typography>
      </header>

      <Filters {...data} />
    
      <Cards>
        {businesses?.map((item: any, index: number) => {
          return (
            <BusinessCard
              key={index}
              index={index}
              total={businesses.length}
              fetchData={fetchData}
              {...item}
            />
          );
        })}
      </Cards>

      <Dots ref={dotsRef} />
    </Wrapper>
  );
};

export default InfiniteScrollExample;
