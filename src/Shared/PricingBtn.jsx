const PricingBtn = ({ children, className, onClick, ...props }) => {
    return (
        <button
            onClick={onClick}
            className={`active:scale-95 duration-300 border border-[#D5E1E3] rounded-md w-full text-[#161616] font-bold text-lg py-2 hover:bg-[#3E00F6] hover:text-white ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default PricingBtn;