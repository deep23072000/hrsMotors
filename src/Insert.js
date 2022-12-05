import {useState} from "react";
import axios from "axios";
const Insert=()=>
{
	const [input,setInput]=useState({});

	const handleInput=(e)=>
	{

		let name=e.target.name;
		let value=e.target.value;
		setInput(values=>({...values, [name]:value}));
	}

	const handleSubmit=(e)=>
	{
		e.preventDefault();
		axios.
		post("http://localhost:4000/hrsmotors", input).
		then((res)=>{alert("data save")});
	}
	return(
		<>
		<form onSubmit={handleSubmit}>
		Customer Need : <input name="cus_need" type="text" value={input.cus_need} onChange={handleInput}/>
		<br/>
		Status : <input name="status" type="text" value={input.status} onChange={handleInput}/>
		<br/>
		Contact : <input name="contact" type="text" value={input.contact} onChange={handleInput}/>
		<br/>
		<input type="submit" value="data save"/>
		</form>
		</>




		);
}

export default Insert;