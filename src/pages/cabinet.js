import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/cabinet.css"

const CabinetPage = () => (
  <Layout>
    <SEO title="Cabinet" />
    <div className="CabinetContainer">
      <p className="CabinetDesc">
        An assorted mix of illustrations, posters, and motion prototypes.
      </p>

      <div className="CabinetMasonry">
        <div className="CabinetItem">
          <img
            className="CabinetCardImage"
            src={require("../images/generative-machine.jpg")}
            alt="Generative Machine"
          />
          <p className="CabinetCardDesc">
            Generative Machine{" "}
            <span style={{ fontWeight: `normal` }}>
              (Ruth Lin's work implemented using composition)
            </span>
          </p>
        </div>

        <div className="CabinetItem">
          <img
            className="CabinetCardImage"
            src={require("../images/girhein.jpg")}
            alt="Indic typography poster"
          />
          <p className="CabinetCardDesc">Exploring indic types</p>
        </div>

        <div className="CabinetItem">
          <img
            className="CabinetCardImage"
            src={require("../images/Abstract-calli.jpg")}
            alt="Abstract calligraphy"
          />
          <p className="CabinetCardDesc">Abstract Calligraphy</p>
        </div>

        <div className="CabinetItem">
          <video
            controls
            className="CabinetCardImage"
            poster={require("../images/Onboarding-poster.jpg")}
            src={require("../videos/Onboarding.mp4")}
          />
          <p className="CabinetCardDesc">Onboarding GIF</p>
        </div>

        <div className="CabinetItem">
          <img
            className="CabinetCardImage"
            src={require("../images/Function.jpg")}
            alt="Function illustration"
          />
          <p className="CabinetCardDesc">Function</p>
        </div>

        <div className="CabinetItem">
          <img
            className="CabinetCardImage"
            src={require("../images/Decision-tree.jpg")}
            alt="Decision tree illustration"
          />
          <p className="CabinetCardDesc">Decision tree</p>
        </div>

        <div className="CabinetItem">
          <img
            className="CabinetCardImage"
            src={require("../images/delivery-illo.jpg")}
            alt="Pay on delivery illustration"
          />
          <p className="CabinetCardDesc">Pay on delivery illustration</p>
        </div>

        <div className="CabinetItem">
          <video
            controls
            className="CabinetCardImage"
            poster={require("../images/Mobile-checkout-poster.jpg")}
            src={require("../videos/Mobile-checkout.mp4")}
          />
          <p className="CabinetCardDesc">Mobile checkout</p>
        </div>

        <div className="CabinetItem">
          <video
            controls
            className="CabinetCardImage"
            src={require("../videos/framer-motion.mp4")}
          />
          <p className="CabinetCardDesc">Mobile-first animation in React</p>
        </div>

        <div className="CabinetItem">
          <img
            className="CabinetCardImage"
            src={require("../images/currying.jpg")}
            alt="Currying poster"
          />
          <p className="CabinetCardDesc">Currying poster</p>
        </div>

        <div className="CabinetItem">
          <video
            controls
            className="CabinetCardImage"
            poster={require("../images/Desktop-checkout-poster.jpg")}
            src={require("../videos/Desktop-checkout.mp4")}
          />
          <p className="CabinetCardDesc">Desktop checkout</p>
        </div>

        <div className="CabinetItem">
          <img
            className="CabinetCardImage"
            src={require("../images/Alien-illo.jpg")}
            alt="Mothership sketch"
          />
          <p className="CabinetCardDesc">Mothership</p>
        </div>

        <div className="CabinetItem">
          <img
            className="CabinetCardImage CabinetImageBorder"
            src={require("../images/functor.jpg")}
            alt="Functor poster"
          />
          <p className="CabinetCardDesc">Functor</p>
        </div>

        {/* <div className="CabinetItem">
          <img
            className="CabinetCardImage"
            src={require("../images/generative-arcs.jpg")}
          />
          <p className="CabinetCardDesc">Generative arcs</p>
        </div> */}

        <div className="CabinetItem">
          <img
            className="CabinetCardImage"
            src={require("../images/isometric.jpg")}
            alt="Isometric illustration"
          />
          <p className="CabinetCardDesc">Isometric illustration</p>
        </div>
      </div>
    </div>
  </Layout>
)

export default CabinetPage
