
const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="md:w-3/12 text-center py-4 md:py-14 mx-auto">
            <p className="text-md md:text-lg text-orange-600 pb-2">--- {subHeading} ---</p>
            <h1 className="text-2xl md:text-3xl text-slate-700 font-bold uppercase py-6 border-t-4 border-b-4">{heading}</h1>
        </div>
    );
};

export default SectionTitle;