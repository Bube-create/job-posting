import React from "react"
import styled from "styled-components";
import Tablet from "./Tablet";
const JobCard = ({data, search, setSearch})=>{
	return <StyledDiv>
		<img src={data.logo} alt=""/>
 
		<JobInfo> 

			<div><span className="company">{data.company}</span> {data.new ? <span className="new">NEW!</span>  : ""} {data.featured ? <span className="featured">FEATURED</span>  : ""}</div>
			<p className="position">{data.position}</p>

			<div style={{fontWeight: 500}}>{data.postedAt} . {data.contract} . {data.location}</div>
		</JobInfo>
		
		
		<JobSkills>
			<Tablet search={search} setSearch={setSearch}>{data.role}</Tablet><Tablet  search={search} setSearch={setSearch} >{data.level}</Tablet>
			{data.languages.map((item, id)=> <Tablet key={id} search={search} setSearch={setSearch} >{item}</Tablet>)}
			{data.tools.map((item, id)=> <Tablet key={id} search={search} setSearch={setSearch} >{item}</Tablet>)}
		</JobSkills>
	</StyledDiv>
} 

export default JobCard;
  

const StyledDiv = styled.div`
	display: flex;
	flex-direction: column;
	padding: 16px;
	margin: 64px 0 ;
	position: relative;
	border-radius: 8px;
	box-shadow: rgba(91, 164, 164, 0.22) 0px 4px 15px;

	&:hover {
		border-left: 8px solid hsl(180, 29%, 50%);
		
	}
	 
	img {
		width: 60px; 
		position: absolute;
		top: -30px;
		left: 16px;
		
	}
	span {
		display: inline-block;
	}
	@media (min-width: 900px){
		flex-direction: row;
		align-items: center;
		img {
			position: revert;
		}
	}
`

const JobInfo = styled.div`
	border-bottom: 1px solid hsl(180, 29%, 50%);

	div:first-of-type {
		margin-top: 24px;
		margin-bottom: 12px;
		display: flex;
		align-items: center;

	}

	div:nth-of-type(2){
		
		margin: 8px 0 12px 0 ;
	}

.company {
	margin-right: 16px;
}

.position {
	color :hsl(180, 14%, 20%);
	font-weight: 700;   
}
.new{
	background-color: hsl(180, 29%, 50%);
	color: white;
	
	padding: 4px 8px;
	border-radius: 16px;

	margin-right: 8px;

}

.featured {
	background-color: hsl(180, 14%, 20%);
	padding: 4px 8px;
	color: white;
	border-radius: 16px;

 
}

@media (min-width: 900px){
	margin-right: auto;
	border: 0; 
	margin-left: 16px; 
	div:first-of-type {
		margin: 0;
	
		display: flex;
		align-items: center;

	}
}

`

const JobSkills = styled.div`
padding-top: 12px;
display: flex;
flex-wrap: wrap;
gap: 8px;

`