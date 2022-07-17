import Head from 'next/head'
import Image from 'next/image'
import Nav from '../compts/Nav'
import styles from '../styles/Home.module.css'
import 'rsuite/dist/rsuite.min.css'
import {Panel, FlexboxGrid} from 'rsuite'
import Footer from '../compts/Footer'
import Counter from '../compts/Counter'





export default function Home() {
  return (
    <div>
      <Head> 
        <title>Project τέλος</title>
      </Head>

      <Nav />
      <div  className= {styles.center}>
     
      <Panel bordered shaded style={{backgroundColor: "whitesmoke", opacity: "0.8"}}  >
      <h1 style={{color: "black"}}>
             Project <span style={{color:"purple"}}> Télos </span>
      </h1>
          <h4>
            <p className= {styles.textPara}>
            <em>“the good in things is the end (τέλος teleos). The end may be that at which <span style={{color: "purple"}}>everything</span> aimed”  - <i>Aristotle</i></em>.
            </p>
          </h4>
          <Counter date={new Date("2022-08-15")} />
          Status: <span style={{color: "purple"}}>🟣 In Development</span>
      </Panel>
      </div>
    </div>
  )
}
