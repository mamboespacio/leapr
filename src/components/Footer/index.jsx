import { Instagram, Linkedin, Medium, Twitter, Youtube } from "react-bootstrap-icons";
import React, {useState, useEffect} from "react";

const Footer = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [social, setSocial] = useState();

  useEffect(() => {
    if (isLoading) {
      async function fetchData() {
        try {
          const response = await fetch(
            'https://leapr-cms.herokuapp.com/api/social?populate=*&sort=id:asc'
          );
          const json = await response.json();
          console.log(json.data)
          setSocial(json.data);
          setIsLoading(false);
        } catch (error) {
          console.log(error);
        }
      }
      fetchData();
    }
  }, [isLoading]);

  if (isLoading) {
    return (<p>loading...</p>)
  }
  else{

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
                <a className="me-3 d-inline-block text-light" href={social.attributes.twitter}><Twitter size={24}></Twitter></a>
                <a className="me-3 d-inline-block text-light" href={social.attributes.linkedin}><Linkedin size={24}></Linkedin></a>
                <a className="me-3 d-inline-block text-light" href={social.attributes.instagram}><Instagram size={24}></Instagram></a>
                <a className="me-3 d-inline-block text-light" href={social.attributes.youtube}><Youtube size={24}></Youtube></a>
                <a className="me-3 d-inline-block text-light" href={social.attributes.medium}><Medium size={24}></Medium></a>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default Footer;