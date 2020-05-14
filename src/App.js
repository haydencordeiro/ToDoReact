import React, { Component } from "react";
import "./index.css";
class App extends Component {
	state = {
		toDo: [
			{ id: 1, value: "Clean Room" },
			{ id: 2, value: "Clean Other Room" },
		],
		id:2,
		inputValue:''
	};
	render() {
		return (
			
			<h1 className="badge badge-primary m-2">
				<div algin='center'>
					<input class="form-control" onChange={this.updateInputValue}></input>
					<button className='btn btn-dark m-2'
					onClick={this.addItem}
					>ADD</button>
					{this.state.toDo.map((i) => (
						<div  key={i.id} id={i.id}>
						
						<h1>{i.value}</h1>
						<button className='btn btn-danger m-2'
						onClick={()=>this.onDelete(i.id)}
						
						>Delete</button>
						</div>
					))}
				</div>
			</h1>
		);


	}
	 onDelete(id)
	{
		let temp=this.state.toDo.filter(i=>i.id!==id);
		console.log(temp)
		this.setState({toDo:temp})
	}
	addItem=()=>
	{
		if(this.state.inputValue!=='')
		{

		
	let nval=this.state.inputValue
	let nid=this.state.id+1;
	let toDo=this.state.toDo
	const newItem={
		id:nid,
		value:nval
	}
	toDo.push(newItem)
	this.setState({
		toDo:toDo,
		id:nid,
		inputValue:''
		
	})
	console.log(this.state.toDo,this.state.id)
		}
		else
		{
  
		  alert('Input is Empty')
		}
	}
	updateInputValue=(evt)=>{
		this.setState({
		  inputValue: evt.target.value
		});
	  }



}

export default App;
