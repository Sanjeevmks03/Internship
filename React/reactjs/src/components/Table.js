import React, { Component } from 'react'

class Table extends Component {

    table(){
        // const arr=[1,2,3,4,5,6,7,8,9,10]
        const n=document.getElementById("number").value
        console.log(n)
        // document.getElementById("ans").innerHTML="<div>{arr.map(item=><h2>1 x {n} = {item*n}</h2>)}</div>"
        var list=""
        for(var i=1; i <= 10; i++)
        {
            list += ("<br>"+n+" x "+i+" = " +(n * i));  
        }
        document.getElementById("ans").innerHTML=list
    }
  render() {
    

    return (
      <div>
        <div>Q. Create a class component that renders a times table depending on the input “number” prop</div>
        <div><input type="number" id="number" ></input></div>
        <div><button onClick={()=>this.table()} className='btn btn-warning'>Table</button></div>
        <div id="ans"></div>
      </div>
    )
  }
}

export default Table