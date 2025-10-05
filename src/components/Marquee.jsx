
const Marquee = ({ logoSrcs }) => {
    return (
        <div className="marquee">
            <div className="marquee-content">
                {logoSrcs.map((src, index) => (
                    <div className="marquee-logo" key={index}>
                        <img key={index} src={src} alt={`Logo ${index + 1}`} />
                    </div>
                ))}
                {logoSrcs.map((src, index) => (
                    <div className="marquee-logo" key={`set2-${index}`}>
                        <img src={src} alt={`Logo ${index + 1}`} />
                    </div>
                ))}
                {logoSrcs.map((src, index) => (
                    <div className="marquee-logo" key={`set3-${index}`}>
                        <img src={src} alt={`Logo ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Marquee;