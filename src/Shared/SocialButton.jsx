

const SocialButton = ({ children, className, onClick, ...props }) => {
    return (
        <button
            onClick={onClick}
            className={`active:scale-95 duration-300 border rounded-md ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default SocialButton;