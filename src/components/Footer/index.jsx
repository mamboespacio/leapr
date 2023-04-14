import { CloudHaze2Fill, Instagram, Linkedin, Medium, Twitter, Youtube } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <section id="footer" style={{height:'100%'}}>
      <div className="row align-items-center h-100 g-0">
        <div className="col-12 col-md-3 justify-content-center align-items-center d-none  d-md-flex">
          <img className="w-75 d-none d-md-block" src="/images/leapr-logo-footer.gif" alt="Leapr Logo"/>
        </div>
        <div className="col-8 col-md-9">
          <div className="row">
            <div className="col-6">
              <img className="w-100 d-block d-md-none" src="/images/leapr-logo-footer.gif" alt="Leapr Logo"/>
            </div> 
          </div>
          <div className="row">
            <h2>
              <span className="text-highlight">Leapr Studio</span><br/>
              <span className="text-highlight-3">Buenos Aires, Argentina</span><br/>
              <span className="text-highlight-3">info@leapr.studio</span>
            </h2>
          </div>
          <div className="row mt-5">
            <div className="col-12">
              <a className="me-3 d-inline-block text-light" href="https://twitter.com/leapr_studio"><Twitter size={24}></Twitter></a>
              <a className="me-3 d-inline-block text-light" href="https://linkedin.com/company/leapr-studio"><Linkedin size={24}></Linkedin></a>
              <a className="me-3 d-inline-block text-light" href="https://instagram.com/leapr.studio"><Instagram size={24}></Instagram></a>
              <a className="me-3 d-inline-block text-light" href="https://www.youtube.com/@Leaprstudio"><Youtube size={24}></Youtube></a>
              <a className="me-3 d-inline-block text-light" href="https://medium.com/@LEAPRSTUDIO"><Medium size={24}></Medium></a>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}
export default Footer;