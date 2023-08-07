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
            <div className="absolute right-0 top-0 p-4">
                <div className="bg-senca p-1 rounded-xl">
                    <LogoSena className="fill-white" />
                </div>
                <p className="text-center text-senca uppercase font-bold text-xs">{currentDate}</p>
            </div>
        </>
    )
}