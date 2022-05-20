import globalData from './data.json'
import JobCard from './JobCard'
import styled from "styled-components";
import { useEffect, useState } from 'react';
import Search from './Search';




function App() {
 

  const [datas, setData] = useState(globalData);
  const [search, setSearch] = useState([]);
  const [filteredSearch, setFilteredSearch] = useState([])
  
  function compareSearchAndLanguage(search, languages){

    for(let i = 0; i< search.length; i++){
      if(!languages.includes(search[i])) return false
    }
    return true
  }


  function dataToDisplay(datas){
    setFilteredSearch([...datas.filter(item =>{      
      if(compareSearchAndLanguage(search, [...item.languages, item.role , item.level, ...item.tools])){
        return item;
      }}
      
      )]);
     
  }

  useEffect(()=>{
    dataToDisplay(datas);
  }, [search])
  return (
     
    <div>
      <StyledHeader></StyledHeader>


      <Wrapper className="App">

     {search.length >= 1 ? <Search search={search} setSearch={setSearch} /> : null} 
      {filteredSearch.length >= 1 ?  filteredSearch.map((item)=> <JobCard data={item} key={item.id} search={search} setSearch={setSearch}/>)
      :
     datas.map((item)=> <JobCard data={item} key={item.id} search={search } setSearch={setSearch}/>)}
    </Wrapper>
    
</div>
  ) 
} 

export default App;
  
const StyledHeader = styled.div`
background: url(./images/bg-header-mobile.svg);
height: 15vh;
background-color: hsl(180, 29%, 50%);
background-repeat: no-repeat;
background-size: cover;

@media (min-width: 900px){
  background: url(./images/bg-header-desktop.svg);
  height: 20vh;
  background-color: hsl(180, 29%, 50%);
}

`
const Wrapper = styled.div`

margin: 0 24px; 

@media (min-width: 900px){
  max-width: 900px;
  margin: 0 auto; 
}

`    