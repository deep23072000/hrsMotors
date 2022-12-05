import {useState,useEffect} from "react";
import axios from "axios";


const Display=()=>
{
	const[mydata,setMydata]=useState([]);
	const loadData=()=>
	{
		axios
		.get("http://localhost:4000/hrsmotors")
		.then((res)=>{setMydata(res.data)});

	}

	useEffect(()=>{
		loadData();
         },[]);
	return(
		<>
		<h1>Display records</h1>
		{mydata.map((key)=>
			<>
		<tr>
		<td>ID</td>
		<td>{key.id}</td>
		</tr>
		<tr>
		<td>Customer need</td>
		<td>{key.cus_need}</td>
		</tr>
		<tr>
		<td>Satus</td>
		<td>{key.status}</td>
		</tr>
		<tr>
		<td>Contact</td>
		<td>{key.contact}</td>
		</tr>
		</>)}



		</>

		);

}

export default Display;