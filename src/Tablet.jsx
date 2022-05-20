import React from "react";
import styled from "styled-components";
 
const Tablet = ({children, search , setSearch})=>{

	function addSearch(setSearch, children){
		if(!search.includes(children)){
			setSearch([...search, children])
		}
	}


	return <StyledDiv onClick={()=> addSearch(setSearch, children)}>{children}</StyledDiv>
}
 
export default Tablet;

const StyledDiv = styled.div` 
display: inline-block;
padding: 8px;
background-color: hsl(180, 52%, 96%);
cursor: pointer;
border-radius: 4px; 
font-weight: 500;

&:active {
	color: hsl(180, 31%, 95%);
	background-color: hsl(180, 14%, 20%);
}
`