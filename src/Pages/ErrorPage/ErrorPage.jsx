import errorPageImage from '../../assets/404Page.png'

const ErrorPage = () => {
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <img className='h-full w-full' src={errorPageImage} alt="" />
        </div>
    );
};

export default ErrorPage;