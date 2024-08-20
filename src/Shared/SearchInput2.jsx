

const SearchInput2 = ({ className = "", ...props }) => {
    return (
        <input
            className={`w-full rounded-md border pl-4 text-gray-500 relative flex justify-between items-center focus:outline-none ${className}`}
            {...props}
        />
    );
};

export default SearchInput2;