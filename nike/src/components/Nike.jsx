const NikeSection = () => {
  return (
    <main className="nike container">
      <div className="nike-content">
        <h1> YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
          YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
        </p>
        <br/>
        <div className="nike-btn">
          <button>Shop Now</button> 
          <button>Category</button>
        </div> <br/>
        <div className="Shopping">
          <p> Also Available</p>
          <div className="brand-icon">
            <img
              src="https://www.freepnglogos.com/uploads/flipkart-logo-png/flipkart-logo-transparent-png-download-0.png"
              height={32}
              width={32}
              alt=""
            />
            <img
              src="https://www.pngmart.com/files/Amazon-Logo-PNG-Image.png"
              height={32}
              width={32}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="nike-img">
        <img
          src="./images/Ns.png"
        height={650}
          width={700}
          alt=""
        />
      </div>
    </main>
  );
};
export default NikeSection;
