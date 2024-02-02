import { Link } from "react-router-dom"
import Logo from "../Logo"

const Footer = () => {
    return (
        <section className="relative overflow-hidden py-10 bg-yellow-300 border border-t-2 border-t-black">
    <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
            <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                <div className="flex h-full flex-col justify-between">
                    <div className="mb-4 inline-flex items-center">
                        <Logo width="100px" />
                    </div>
                    <div>
                        <p className="text-sm text-white">
                            &copy; Copyright 2023. All Rights Reserved by DevUI.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                <div className="h-full">
                    <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-white">
                        Company
                    </h3>
                    <ul>
                        {/* ... your list items here */}
                    </ul>
                </div>
            </div>
            <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                <div className="h-full">
                    <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-white">
                        Support
                    </h3>
                    <ul>
                        {/* ... your list items here */}
                    </ul>
                </div>
            </div>
            <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                <div className="h-full">
                    <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-white">
                        Legals
                    </h3>
                    <ul>
                        {/* ... your list items here */}
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

    )
}

export default Footer