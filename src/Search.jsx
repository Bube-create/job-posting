import React from "react";
import styled from "styled-components";


const Search = ({search, setSearch})=>{

	function removeFromSearch(item, setSearch, search) {
		setSearch([...search].filter(ele => ele !== item));
	}
	return <StyledDiv> 
		<div>
			{search.map((item, id)=> <SearchItem key={id}><span className="item">{item}</span> <span onClick={() => removeFromSearch(item,setSearch,  search)} className = "delete" ><img src="./images/icon-remove.svg" alt=""/> </span> </SearchItem>)}
		</div>
		<button onClick={()=>setSearch([])}>Clear</button>
	</StyledDiv>
}
 
export default  Search;

const StyledDiv = styled.div`
background: white;
display: flex;
justify-content: space-between;
margin-top: -38px;
margin-bottom: 64px;
padding:  16px 32px;
box-shadow: rgba(91, 164, 164, 0.22) 0px 4px 15px;
 & > div{
	display: flex;
	gap: 8px;
	flex-wrap: wrap;
 }

 button {
	 border: 0;
	 background-color: white; 
	 cursor: pointer;
	 color :inherit;
	 font-weight: 500;
	 padding: 0 6px;
	 &:hover{
		border-bottom: 2px solid hsl(180, 29%, 50%);
	 }
 }
`

const SearchItem = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
background-color: hsl(180, 52%, 96%);
font-weight: 500;
border-radius: 8px;
overflow: hidden;
 

.item {padding: 6px;}
.delete {
	padding: 6px;
	background-color: hsl(180, 29%, 50%);
	align-self: stretch;
	display: flex;
	align-items: center;
	cursor: pointer;

	img {
		width: 100%;
	}
	&:hover{
		background-color: hsl(180, 14%, 20%);
	}
}
`