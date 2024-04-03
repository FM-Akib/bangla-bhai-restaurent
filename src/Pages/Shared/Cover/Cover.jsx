import { Parallax } from 'react-parallax';

const Cover = ({img,title,subtitle}) => {
    return (
        <Parallax
        blur={{ min: -80, max: 80 }}
        bgImage={img}
        bgImageAlt="cover"
        strength={-200}
    >
        <div className="hero h-[700px]">
          <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md text-white">
                <h1 className="mb-5 text-6xl font-bold uppercase">{title}</h1>
                <p className="mb-5 text-2xl">{subtitle}</p>
                
                </div>
            </div>
        </div>
    </Parallax>

    );
};

export default Cover;