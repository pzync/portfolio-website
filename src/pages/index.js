import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />  
    <div className="MainContainer">
      
      
        <div className="H1AndSocialLinkLogos">
        <p className="SmallH1">Designer & PM who loves <br /></p><h1 className="HugeH1">crafting humane products.</h1>
        
        <div className="SocialLinkLogosContainer">
          <a href="https://twitter.com/ShekharGurav" target="_blank" rel="noopener noreferrer">
            <img 
            className="SocialLinkLogo"
            src={require("../images/twitter-logo.svg")}
            alt="Twitter" 
            />
          </a>

          <a href="https://in.linkedin.com/in/ShekharGurav" target="_blank" rel="noopener noreferrer">
            <img 
            className="SocialLinkLogo"
            src={require("../images/linkedin-logo.svg")}
            alt="LinkedIn" 
            />
          </a>

        <a href="https://medium.com/@ShekharGurav" target="_blank" rel="noopener noreferrer">
          <img 
          className="SocialLinkLogo"
          src={require("../images/medium-logo.svg")}
          alt="Medium" 
          />
        </a>
        </div>
        </div>
        
        <div className="HelloAndStatsAtBottom">
          <p className="HelloAtBottom">Hello! I’m a designer and product manager with 10+ years of experience across product creation, user experience (UI/UX) & creative direction. Currently, I head design at Juspay. Stats about some of my work:</p>
          <div className="StatsContainer">
            <div className="Stat">
              <p className="StatNumber"><span className="StatNumberBold">5</span><span className="StatNumberLight">Bn</span></p>
              <p className="StatDesc">INR per month done by BHIM</p>
            </div>
            <div className="Stat">
              <p className="StatNumber"><span className="StatNumberBold">100</span><span className="StatNumberLight">Mn</span></p>
              <p className="StatDesc">installs of UPI Common Library</p>
            </div>
            <div className="Stat">
              <p className="StatNumber"><span className="StatNumberBold">40</span><span className="StatNumberLight">Mn+</span></p>
              <p className="StatDesc">daily users of Juspay products</p>
            </div>    
          </div>
        </div>
      
      

      <div className="GrayJacketBg" />
    
    </div>
  </Layout>
)

export default IndexPage
