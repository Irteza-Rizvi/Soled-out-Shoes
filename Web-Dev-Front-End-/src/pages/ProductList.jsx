import styled from "styled-components";
import Navbar from "../components/Navbar";

import Products from "../components/Products";

import Footer from "../components/Footer";
import { useState } from "react";
import { useLocation } from "react-router";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
  text-align: center;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
 
`;
const Option = styled.option``;

const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2] 

    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");
  
    const handleFilters = (e) => {
      const value = e.target.value;
      setFilters({
        ...filters,
        [e.target.name]: value,
      });
    };

    
  return (
    <Container>
      <Navbar />
      
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}> 
            <Option disabled>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select name="size" onChange={handleFilters}> 
            <Option disabled>
              Size
            </Option>
            <Option>42</Option>
            <Option>42.5</Option>
            <Option>43</Option>
            <Option>44</Option>
            <Option>45</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter> 
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort}/>
      
      <Footer />
    </Container>
  );
};

export default ProductList;