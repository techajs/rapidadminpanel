import { ChangeStatus } from "@/services/joinrequest/join.";
import Link from "next/link";
import { useState } from "react";

export default function ActionButtion({onChange,role,status,ext_id,reason}){
    const [error,setError]=useState(null)
    const [successmessage,setSuccessmessage]=useState(null)
    const submitHandler = async (e) =>{
        e.preventDefault()
        try {
            const response =await ChangeStatus(role,status,ext_id,reason)
            setSuccessmessage(response)
        } catch (error) {
            setError(error.message)
        }
        
    }
    return (
        <>
        <div className="flex justify-between mt-6">
        <button onClick={submitHandler} className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition">
          Accept
        </button>
        <div className="flex space-x-4">
          <Link href="/joinrequest" className="bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded hover:bg-gray-400 transition">
            Ignore
          </Link>
          <button
            onClick={onChange}
            className="bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-600 transition"
          >
            Reject
          </button>
        </div>
        <div className="flex items-center justify-center">
            {successmessage}
        </div>
      </div>
        </>
    )
}