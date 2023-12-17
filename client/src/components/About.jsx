import Footer from "./Footer";
const About = () => {
  return (
    <div className="font-general-sans flex items-center flex-col w-full h-full py-10">
      <h1 className="w-auto text-3xl font-bold py-10">About Us</h1>
      <div className="w-[40%] flex flex-col items-start gap-8">
        <div>
          <h4 className="font-semibold">Shipments in Argentina</h4>
          <div className="text-sm">
            <p>Shipments can take up to 7 working days.</p>
            <p>We work with ViaCargo logistics service.</p>
            <p>
              Once the shipment has been processed, you will receive an email
              with the tracking of the package.
            </p>
            <p>
              You will receive an email with the tracking of your package (not
              immediately after purchase).
            </p>
          </div>
        </div>
        <div>
          <h4 className="font-semibold">International shipments:</h4>
          <div className="text-sm">
            <p>We ship worldwide.</p>
            <p>
              The delivery time may vary depending on the country of destination
              and the logistics service chosen.
            </p>
            <p>
              By choosing country and zip code, you will be able to select from
              the available carriers (please note that some locations may not be
              available).
            </p>
            <p>
              Please be sure to contact us for any questions via our Whatsapp.
            </p>
          </div>
        </div>
        <div>
          <h4 className="font-semibold">National payments:</h4>
          <div className="text-sm">
            <p>We accept all methods of payment.</p>
          </div>
          <h4 className="font-semibold">International payments:</h4>
          <div className="text-sm">
            <p>We only accept bank transfers in USD.</p>
            <p>
              Once you have made your purchase (having chosen the transfer
              method), be sure to contact us to arrange payment.
            </p>
          </div>
        </div>
        <div>
          <h4 className="font-semibold ">Returns and exchanges:</h4>
          <div className="text-sm">
            <p>
              Domestic shipments may be returned or exchanged. International
              shipments are subject to the country and courier company used. Do
              not hesitate to contact us.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
