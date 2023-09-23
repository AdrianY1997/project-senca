"use client";

import { useState } from "react";
import LogoSena from "./general/logoSena";

export default function SenaDate() {
    function getFormattedDate() {
        const date = new Date();
        const day = date.getDate();
        const month = date.toLocaleString("default", { month: "short" });
        return `${day} ${month}`;
    }

    const currentDate = getFormattedDate();

    return (
        <>
            <div className="fixed container">
                <div className="p-4 absolute right-0 w-fit">
                    <div className="bg-senca p-1 rounded-xl">
                        <LogoSena className="fill-white" />
                    </div>
                    <p className="text-center text-senca uppercase font-bold text-xs">{currentDate}</p>
                </div>
            </div>
        </>
    )
}