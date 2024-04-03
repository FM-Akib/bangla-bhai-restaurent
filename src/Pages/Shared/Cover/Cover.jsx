
const Cover = ({img,title,subtitle}) => {
    return (
        <div className="hero h-[700px]" style={{backgroundImage: `url(${img})`}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md text-white">
                <h1 className="mb-5 text-6xl font-bold ">{title}</h1>
                <p className="mb-5">{subtitle}</p>
                
                </div>
            </div>
    </div>
    );
};

export default Cover;