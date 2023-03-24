import { Instagram, Linkedin, Twitter, Youtube } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <section id="footer" style={{height:'100%'}}>
      <div className="row align-items-center h-100">
        <div className="col-3">
          <video
            autoPlay={true}
            controls={false}
            loop
            muted
            playsInline
            src='videos/logo.webm'
            type="video/webm"
            style={{width: '100%'}}
          />
        </div>
        <div className="col-9">
          <div className="row">
            <h1>
              <span className="text-highlight">Leapr Studio</span><br/>
              Buenos Aires, Argentina<br/>
              +5411 4782929<br/>
              jump@leapr.studio
            </h1>
          </div>
          <div className="row mt-5">
            <div className="col-12">
              <a className="me-3 d-inline-block text-light" href=""><Twitter size={24}></Twitter></a>
              <a className="me-3 d-inline-block text-light" href=""><Linkedin size={24}></Linkedin></a>
              <a className="me-3 d-inline-block text-light" href=""><Instagram size={24}></Instagram></a>
              <a className="me-3 d-inline-block text-light" href=""><Youtube size={24}></Youtube></a>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}
export default Footer;