"use client"
import React, { useState } from "react";
import { userData } from "../user-data/UserData";

export function User() {
    const [users] = useState(userData); 
    const [filteredSearchTerm,setFilteredSearchTerm] = useState(userData);
    const handleSearch  = (e:React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setFilteredSearchTerm(userData.filter(user=> Object.values(user).join(" ").toLocaleLowerCase().includes(value.toLowerCase())));
    }
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <form className="flex items-center max-w-sm mx-auto p-5">   
                <label className="sr-only">Search</label>
                <div className="relative w-full">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
                        </svg>
                    </div>
                    <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search branch name..." required onChange={(e)=>handleSearch(e)} />
                </div>
                <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                    <span className="sr-only">Search</span>
                </button>
            </form>
            <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md">
                <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                    <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-4 font-lg text-gray-900">User-List</th>
                    </tr>
                    </thead>
                    {filteredSearchTerm.length > 0 ? ( 
                    filteredSearchTerm.map((user, index) => (
                        <div key={index}>
                            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                                <tr className="hover:bg-gray-50">
                                    <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                                    <div className="relative h-10 w-10">
                                        <img className="h-full w-full rounded-full object-cover object-center" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                        <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                                    </div>
                                    <div className="text-sm">
                                        <div className="font-medium text-gray-700">{user.name}</div>
                                        <div className="text-gray-400">{user.email}</div>
                                    </div>
                                    </th>
                                    <td className="px-6 py-4">
                                    <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                                        <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                                        {user.age}
                                    </span>
                                    </td>
                                    <td className="px-6 py-4">{user.username}</td>
                                </tr>
                            </tbody>
                        </div>
                    ))):null}
                </table>
            </div>
        </div>
    );
  }
  