import React from 'react';

export default function Filter(props) {

  return (
    
    <div>
      <form>
        {/* Book type: 
        <select>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>  */}
        <input id="isEbook" type="checkbox" onChange={props.handleFilterIsEbook} />E-Book
        <input id="isFree" type="checkbox" onChange={props.handleFilterIsBookFree} />Free
        
      </form> 
    </div>
      
  )
}