import React, { useState } from "react";
import { userData } from "./user-data/UserData";
import { User } from "./Components/User";

export default function Layout({
    children,
}: { children: React.ReactNode }) {
    return (
        <div>
            <h1>hello akash</h1>
            {children}
            <User/>
        </div>
    );
}


