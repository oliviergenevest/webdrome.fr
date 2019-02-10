import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Container from '../components/Container/Container'
import { StaticQuery, graphql } from 'gatsby'
import SEO from '../components/seo'
import Grid1 from '../components/Grid/Grid1'

const ImageHomepageSection1 = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "lavande.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={ data => <Img 
    fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
)




const IndexPage = () => {
 
   return (
      <Layout >
          <SEO title="Accueil" keywords={[`solutions numériques`, `website`, `react`]} />
          <Grid1 
            image = { <ImageHomepageSection1 /> } 
            heroText = {{text:'WEB Drôme'}} 
            text1= {{text:'Experts en communication digitale, Artisans du web, Créateurs numériques'}} 
          />
          <Container text> 
          <h1>WEB Drôme : khaLi402</h1>
          <p>La rencontre de 2 spécialistes</p>
          <p>Nous vous aidons à mener à bien votre projet web. Technologiquement ouverts, nous nous efforçons d'utiliser de l'open source et nous sommes adeptes des méthodes 'Agiles' (faire lien), nos clients sont au centre du processus de création.</p>
          <p></p>
          <p>Références sur demande.</p>
          </Container>
          <Container text>
            <h2>Cyril Crespeau</h2>
            <p>Photographe - Graphiste - Designer</p>
            <p><a href="mailto:contact@crespeauphoto.fr">contact@crespeauphoto.fr</a></p>
            <h2>Olivier Genevest</h2>
            <p>Ingénieur - Concepteur - Développeur</p>
            <p><a href="mailto:contact@oliviergenevest.info">contact@oliviergenevest.info</a></p>

          </Container>
      </Layout>
)
}

export default IndexPage