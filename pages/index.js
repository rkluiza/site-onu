import Cabecalho from '../components/cabecalho.js'
import Footer from '../components/Footer.js'
import Menu from '../components/Menu.js'
import styles from '/styles/Home.module.css'

export default function Home() {
  return ( 
    <>
    <div className='container'>

      <div className='row'>
        <div className='col'>     
          <Cabecalho/>
        </div>
      </div>

        <div className='row'>
          <div className='col'>  
            <Menu></Menu>
          </div>    
        </div>


        <div className='row'>
          <div className='col-md-3'>
            <div className={styles.div}>
              <img className={styles.img} src="/imagem_1.jpg"></img>
               <div className={styles.p}> 
                <p>13 de setembro</p>
                <p>Relatório Anual das Nações Unidas no Brasil 2022</p>
                </div> 
            </div>
          </div>

          <div className='col-md-3'>
            <div className={styles.div}>
              <img className={styles.img} src="/imagem_2.jpeg"></img>
              <div className={styles.p}> 
                  <p>15 de setembro</p>
                  <p>Equilibrio Delicado para A Amazonia Legal Brasileira: Um memorando econônimico</p>
              </div>
            </div>
          </div>

            <div className='col-md-6'>
              <div className={styles.div}>
                <div className={`${styles.p} ${styles.pdiv3}`}>
                    <h1>ONU assina marco de cooperação com o Brasil</h1>
                    <br></br><p>
                    As Nações Unidas e o governo brasileiro assinaram, nesta terça-feira (1), o Novo Marco de Cooperação Brasil-ONU 2023-2027, no âmbito da visita da vice-secretária-geral da ONU, Amina J. Mohammed, ao país. O Marco de Cooperação das Nações Unidas para o Desenvolvimento Sustentável (UNSDCF) guiará a parceria Brasil-ONU até 2027. Trata-se do principal documento de planejamento, implementação e monitoramento das ações do Sistema ONU no país.
                    </p>
                </div>
              </div>
            </div>
          </div>

    </div>

    <Footer></Footer>
    </>
  )
}
