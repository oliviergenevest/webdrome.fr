import React from 'react'
/*import { Link } from 'gatsby'
import Img from 'gatsby-image'*/
import ScrollDownAnimation from '../ScrollDownAnimation/ScrollDownAnimation'
/*import { Slug } from 'mauerwerk'*/
import { Fade } from "react-reveal"
import styles from './Grid1.module.scss'




const Grid1 = ({image, text1, heroText, text3}) => (
   
      <div className= {styles.gridContainer} >
	        
	       <div className= {styles.hero}>
	         <Fade up  delay={300} distance="50px">
	          <span className= {styles.title}>{ heroText.text }</span>
	         </Fade>
	       </div>

	       <div className= {styles.subTitle} >
	          <Fade up  delay={800} distance="50px">
	         <h2>{ text1.text }</h2>
	           </Fade>
	       </div>
	
	       <div className= {styles.image} > 
	      {image} 
	       </div>

       	  
      </div>
 
)

export default Grid1