import Sidebar from "./Sidebar"
import Header from "./Header"

export default function Layout() {

    return (
        <>
            <div className="flex flex-col w-full min-h-screen" >
                <Header/>
                <div>
                    <main></main>
                </div>
            </div>
        </>
    )
}