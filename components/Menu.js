import Link from 'next/Link'
import styles from '/styles/Menu.module.css'

export default function Menu(){
    return (
        <>
        <div className={styles.divMenu}>
            <ul>
                <Link className={styles.link} href='/'>
                    Inicio
                </Link>
                <Link href='/sobre'>
                    Sobre a ONU
                </Link>
            </ul>
            </div>
        </>

    )
}