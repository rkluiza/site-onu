import Cabecalho from '../components/cabecalho.js'
import Footer from '../components/Footer.js'
import Menu from '../components/Menu.js'
import styles from '/styles/Sobre.module.css'


export default function Sobre(){
    return(
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col'>     
                        <Cabecalho></Cabecalho>        
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>     
                        <Menu></Menu>
                    </div>
                </div>
                <div className={styles.div}>
                <div className='row'>
                    <div className='col'>
                        <h1>Sobre a ONU</h1>
                        <br></br>
                        <p>As Nações Unidas têm representação fixa no Brasil desde 1947. A presença da ONU em cada país varia de acordo com as demandas apresentadas pelos respectivos governos ante a Organização. No Brasil, o Sistema das Nações Unidas está representado por agências especializadas, fundos e programas que desenvolvem suas atividades em função de seus mandatos específicos. A Equipe de País (conhecida por sua sigla em inglês, UNCT) está conformada pelos Representantes desses organismos, sob a liderança do Coordenador Residente. </p>
                        <p>Seu principal objetivo é maximizar, de maneira coordenada, o trabalho da ONU, para que o Sistema possa proporcionar uma resposta coletiva, coerente e integrada às prioridades e necessidades nacionais, no marco dos Objetivos de Desenvolvimento Sustentável (ODS) e dos demais compromissos internacionais.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aut quasi eaque sed voluptatem praesentium dignissimos ut totam pariatur voluptas inventore, dolorum distinctio nesciunt optio esse quibusdam quidem. Nesciunt, architecto?</p>
                    </div>
                </div>
                </div>
            </div>
            <Footer></Footer>
        
        </>
    )
}