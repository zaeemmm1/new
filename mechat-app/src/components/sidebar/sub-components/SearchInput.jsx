import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaArrowLeftLong } from "react-icons/fa6";

const SearchInput = () => {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <>
            <form className="bg-[#202c33] flex gap-1 px-4 py-2 rounded-lg  overflow-hidden items-center m-2 ">
                {isFocused ? (<FaArrowLeftLong className=" text-green-300 text-xl mr-3 "/>) : (<IoIosSearch className=" text-2xl mr-3 " />)}
                <input type="text" placeholder="Search" className="w-full outline-none bg-transparent text-white" onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)} />
            </form>
        </>
    )
}

export default SearchInput


// font-size: 15px;
// font-weight: 400;
// line-height: 20px;
// /* color: var(--filters-item-color); */
// color: #8696a0;