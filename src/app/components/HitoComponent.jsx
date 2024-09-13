import Link from 'next/link';
import styles from './HitoComponent.module.css';

export default function HitoComponent({ hito }) {
  // Determine the image source based on the 'hito' value
  const imgSrc = hito === '1' 
    ? '/primerHito.jpg' 
    : hito === '2' 
    ? '/segundoHito.jpg' 
    : hito === '3' 
    ? '/tercerHito.jpg' 
    : '/cuartoHito.png';

  return (
    <section className={styles.hitoBlock}>
        <Link className={styles.backButton} href="/bendicionsj">&nbsp;&nbsp;&lt;</Link>
        <img src={imgSrc} alt={`Hito ${hito}`} className={styles.imgHito} style={{ width: '100%' }} />
        {hito === '1' &&
        <div className={styles.textBlock}>
            <h2 className={styles.titleHito}>1° Hito 18/10/1914</h2>
            <p className={styles.bodyHito}>El padre José Kentenich como director espiritual de un grupo de jóvenes
            seminaristas da una charla en la que les propone un plan osado: Hacer un
            pacto, una Alianza con María. En esta Alianza, el padre José y los jóvenes, le
            piden a María que Ella se establezca en el Santuario y desde allí transforme los
            corazones de quienes acudan a este lugar, iniciando así un Movimiento de
            renovación religioso y moral. Para que esto se haga posible, le ofrecen el
            esfuerzo por la santidad de la vida diaria, lo que llaman contribuciones al
            Capital de Gracias. Su amor demostrado en obras.
            Este primer hito se conoce como: “Estar en la luz divina” Se lo llama así
            aludiendo a que fue un paso dado en la FE, en el que este grupo de jóvenes
            sellaron su Alianza de Amor con la Virgen María, que transformó su vida para
            siempre. Así el 18 de octubre de 1914, se convirtió en el día de la fundación de
            Schoenstatt.
            Jesús, la "luz del mundo", nos llama a ser también "luz del mundo", a irradiar la
            luz de Dios a toda la humanidad.</p>
            <h3 className={styles.subtitleHito}>Consignas</h3>
            <p className={styles.questionsHito}> ¿Cómo puedo ser luz en mi entorno? <br/>
            ¿Qué es la Alianza de Amor para mí?<br/> ¿Permito que la Mater se establezca en mi vida?<br/>
            ¿Cómo estoy viviendo mi Alianza de Amor con María?</p>
            <Link href='/bendicionsj/telefono' className={styles.buttonHito}>Teléfono PK</Link>
        </div>}
        {hito === '2' &&
        <div className={styles.textBlock}>
            <h2 className={styles.titleHito}>2° Hito 20/1/1942 <br/>“Estar en la Confianza Divina”</h2>
            <p className={styles.bodyHito}>El padre Kentenich, (perseguido por el régimen Nazi) decide voluntariamente y
            por amor a los suyos, renunciar a las posibilidades de liberación que se le
            ofrecía y prefirió ser llevado al campo de concentración de Dachau.
            Cree que esta es la voluntad de Dios: Ofrecer su libertad exterior para
            conquistar la libertad interior de los hijos de Schoenstatt.
            Con este paso llama a la familia a profundizar la Alianza de Amor en el
            sentido del Amor a la Cruz, para alcanzar la verdadera libertad de quien se
            sabe, hijo de Dios.
            “Estoy cobijado en el corazón de Dios, allí en la cárcel me he sentido
            plenamente en su corazón, quiero estar siempre donde Él me quiera, me siento
            tan contento en un calabozo oscuro como en mi cama. Mi lugar es el lugar que
            me señale la voluntad de Dios”.
            La acción apostólica del padre José en el campo de concentración fue enorme
            y muy fecunda. Primero a nivel personal con laicos y sacerdotes; y
            paulatinamente contó con gran número de discípulos a quienes les predicaba y
            les daba charlas que hacían crecer su esperanza y que preparaba para que
            sean libres de espíritu ofreciendo cada dolor, injusticia y todas las carencias
            que sufrían.
            Durante su permanencia en el campo de concentración el padre José realizó
            tres fundaciones:
            <br/>- La Obra Familiar “Si queremos renovar la sociedad, necesitamos empezar
            por una renovación de la familia”,
            <br/>- el Instituto de los Hermanos de María,
            <br/>- la internacional con prisioneros de diversas nacionalidades que se habían
            hecho Schoenstattianos.</p>
            <h3 className={styles.subtitleHito}>Consignas</h3>
            <p className={styles.questionsHito}> ¿Qué cruz quiero Ofrecer hoy? <br/>¿Por qué entrego esta peregrinación?<br/><br/><br/>
            Te invitamos que en esta cruz dejes tu huella como entrega.</p>
        </div>}
        {hito === '3' &&
        <div className={styles.textBlock}>
            <h2 className={styles.titleHito}>3° Hito 31/5/1949 <br/>“Estar en la Fuerza Divina”</h2>
            <p className={styles.bodyHito}>“Al regresar de Dachau, el Padre se daba cuenta que la Iglesia carecía de la
            vitalidad suficiente para enfrentar los grandes desafíos de la época y
            Schoenstatt, según su convencimiento, poseía un don para el tiempo de
            cambio histórico. A raíz de esto, el Padre José busca entregar la Obra de
            Schoenstatt a la Iglesia, entonces escribe una carta en respuesta a los Obispos
            de Alemania, dónde explica en profundidad el sentido de Schoenstatt. Coloca
            esta carta sobre el altar del Santuario de Bella vista Chile, el 31 de mayo de
            1949.
            A continuación, celebra la Santa Misa y en su homilía el Padre proclama y
            convoca a una cruzada por el “pensar, amar y vivir orgánicos”
            Esta cruzada supone luchar contra el individualismo que tiende a separar la fe
            y la vida, lo divino y lo natural, Cristo y María. Es una forma de concebir la
            realidad en forma fragmentada, que divide. Una cosa o la otra.
            A cambio propone el amar, pensar y vivir orgánicos, que contempla la realidad
            como un organismo. En un organismo no hay separación, hay asociación,
            unión, armonía.
            El padre Kentenich va a afirmar: “El amor a María regala siempre de por sí esta
            manera de pensar orgánica”.
            María desde el Santuario de Schoenstatt, quiere educarnos a vivir, pensar y
            amar en forma orgánica. Ella como Inmaculada fue la persona totalmente
            armónica, no fraccionada, ni dividida.</p>
            <h3 className={styles.subtitleHito}>Consignas</h3>
            <p className={styles.questionsHito}> Encuentra a un amigo en el camino. Inicia una conversación
            con alguien nuevo <br/><br/>¿Qué actitud o virtud del padre Kentenich nos
            gustaría adoptar en la vida cotidiana? <br/>¿Cómo podemos fortalecer
            nuestras relaciones humanas para profundizar nuestra Fé?</p>
        </div>}
        {hito === '4' &&
        <div className={styles.textBlock}>
            <h2 className={styles.titleHito}>4° Hito <br/>“Estar en la Victoriosidad Divina”</h2>
            <p className={styles.bodyHito}>La carta que el Padre José colocó el 31 de mayo sobre el altar de Bellavista
            encomendándole a María la misión de Schoenstatt para la Iglesia, no fue
            comprendida por la jerarquía eclesiástica. Esto condujo a que el Padre fuese
            mandado al exilio, que duró 14 años, este número es símbolo de que se trató
            de un vía crucis a semejanza de Cristo, el Padre José sufrió y se entregó por la
            misión de Schoenstatt para la Iglesia.
            Estos años fueron muy difíciles y de intensas luchas para la obra de
            Schoenstatt, verdaderas pruebas de fortaleza y fidelidad para los hijos del
            Padre.
            El Padre permanece catorce años en Milwaukee. Durante ese tiempo se
            desenvuelve como párroco de la comunidad alemana, y lejos de sentirse
            amargado o de tener sentimientos de rencor hacia la Iglesia dada su situación
            de desterrado, reflejaba cada vez más la bondad de Dios.
            Durante el tiempo del Exilio se desarrolla en la Iglesia el Concilio Vaticano II,
            que trae un espíritu de renovación en la Iglesia, se comprende más la
            espiritualidad de Schoenstatt.
            Todo esto hace que el caso de la Obra de Schoenstatt sea revisado
            nuevamente. Así finalmente el Padre Kentenich tiene una audiencia privada
            con el papa Pablo VI quien confirma que queda liberado del exilio y la Obra de
            Schoenstatt recibe su aprobación pontificia.
            Finalmente el 24 de diciembre vuelve a Schoenstatt y comprueba que María se
            manifiesta como la Victoriosa!!
            <br/><b>Vamos llegando al predio del Santuario<br/>¡¡Allí María nos regalará su poder
            de educadora y nos formará para entregarnos con fidelidad como
            instrumentos en sus manos!!</b></p>
            <h3 className={styles.subtitleHito}>Consignas</h3>
            <p className={styles.questionsHito}> ¿Cómo puedo ser luz en mi entorno? <br/>
            ¿Qué es la Alianza de Amor para mí?<br/> ¿Permito que la Mater se establezca en mi vida?<br/>
            ¿Cómo estoy viviendo mi Alianza de Amor con María?</p>
            <Link href='/bendicionsj/agradecimientos' className={styles.buttonHito}>Agradecimientos</Link>
        </div>}
        
    </section>
  );
}