const Header = ({ query, category }) => {
    if (query && category) {
        return (
            <h1 className="my-4 font-bold sm:text-[32px] sm:leading-[33.6px] text-[28px] leading-[40px] tracking-[-0.25%] self-start text-white">
                Search results for "{query}" in <span className="capitalize">{category}</span>
            </h1>
        )
    }

    if (query) {
        return (
            <h1 className="my-4 font-bold sm:text-[32px] sm:leading-[33.6px] text-[28px] leading-[40px] tracking-[-0.25%] self-start text-white">
                Search results for "{query}"
            </h1>
        )
    }

    if (category) {
        return (
            <h1 className="my-4 font-bold sm:text-[32px] sm:leading-[33.6px] text-[28px] leading-[40px] tracking-[-0.25%] self-start text-white">
                <span className="capitalize">{category}</span>
            </h1>
        )
    }

    return (
        <h1 className="my-4 font-bold sm:text-[32px] sm:leading-[33.6px] text-[28px] leading-[40px] tracking-[-0.25%] self-start text-white">No Results</h1>
    )
}

export default Header