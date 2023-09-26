import styles from '/styles/Footer.module.css'

export default function Footer(){
    return(
        <>
        <div className= {styles.divFooter}> 
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img className={styles.img}src='/logo_footer.png'></img>
                </div>
                <div className="col-md-6">
                    <p>
                        Casa ONU Brasil - Complexo Sérgio Vieira de Mello<br/>
                        Setor de Embaixadas Norte, Quadra 802, Conjunto C, Lote 17<br/>
                        CEP: 70800-400, Brasília, DF, Brasil, +55 (61) 3038-9300<br/>
                    </p>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}