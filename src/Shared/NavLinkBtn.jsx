

const NavLinkBtn = ({ children, className, onClick, ...props }) => {
    return (
        <button
            onClick={onClick}
            className={`active:scale-95 duration-300 w-full text-[#EBE3FF] font-medium text-[15px] py-2 hover:text-white ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default NavLinkBtn;