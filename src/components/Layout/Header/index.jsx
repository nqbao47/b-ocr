import React from "react"


export default function Header () {

    return (
        <>
        <div className="header">
            <div className="grid_container">
                <div className="header_headerInner">
                    <button className="HamburgerButton_hamburger"></button>
                    <input className="border-2 rounded-md border-rose-500 p-1 w-full" required placeholder="find your medicine"/>
                </div>
            </div>

        </div>
        </>
    )
}