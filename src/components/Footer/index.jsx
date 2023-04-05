import { CloudHaze2Fill, Instagram, Linkedin, Medium, Twitter, Youtube } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <section id="footer" style={{height:'100%'}}>
      <div className="row align-items-center h-100">
        <div className="col-md-3">
          <img className="w-100" src="/images/leapr-logo-footer.gif" alt="Leapr Logo"/>
        </div>
        <div className="col-md-9">
          <div className="row">
            <h2>
              <span className="text-highlight">Leapr Studio</span><br/>
              Buenos Aires, Argentina<br/>
              info@leapr.studio
            </h2>
          </div>
          <div className="row mt-5">
            <div className="col-12">
              <a className="me-3 d-inline-block text-light" href=""><Twitter size={24}></Twitter></a>
              <a className="me-3 d-inline-block text-light" href=""><Linkedin size={24}></Linkedin></a>
              <a className="me-3 d-inline-block text-light" href=""><Instagram size={24}></Instagram></a>
              <a className="me-3 d-inline-block text-light" href=""><Youtube size={24}></Youtube></a>
              <a className="me-3 d-inline-block text-light" href=""><Medium size={24}></Medium></a>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}
export default Footer;