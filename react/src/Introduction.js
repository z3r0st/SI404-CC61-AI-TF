const Introduction = () => (
  <div className="introduction">
    <div className="introduction__title">
      <h1>
        Bienvenido al asistente de decisiones basado en Lógica Proposicional
      </h1>
      <h4>
        Esta aplicación usa un modelo de Machine Learning que ha sido entrenado
        para <b>aprender</b> la tabla de verdad de cada uno de los principales
        conectores de la Lógica Proposicional.
      </h4>
    </div>
    <div className="introduction__overview">
      <h2>¿ El propósito ?</h2>
      <div className="introduction__overview__list">
        <ol>
          <li>
            Proveer de una aplicación interactiva que permita ayudar a tomar
            decisiones simples del día a día.
          </li>
          <li>
            Facilitar y hacer más didáctico el aprendizaje de la lógica
            proposicional mediante una aplicación que la implementa de forma
            intuitiva con un enfoque netamente aplicativo.
          </li>
          <li>
            Entretener, así es, también puedes usar la aplicación en algún
            momento de aburrimiento, solo para pasar el rato.
          </li>
        </ol>
      </div>
    </div>
    <div className="introduction__instructions">
      <h2>¿ En qúe consiste ?</h2>
      <h4>
        Para explicar el funcionamiento, nada mejor que una lista de
        instrucciones:
      </h4>
      <div className="introduction__instructions__list">
        <ol>
          <li>
            Ingresa un primer enunciado [A], e.g. <i>Hace frío</i>.
          </li>
          <li>
            Ingresa un segundo enunciado [B], e.g. <i>Ir a la playa</i>.
          </li>
          <li>
            Indica mediante el switch de activación respectivo si cada enunciado
            es verdadero o falso <br />
            <b>Tip:</b> Solo presiona el switch si el enunciado es falso (Por{" "}
            <i>default</i> es verdadero).
          </li>
          <li>
            Revisa la lista de conectores de Lógica Proposicional y su
            descripción.
          </li>
          <li>
            Elige el conector [~] que mejor describa la relación entre los dos
            enunciados ingresados.
          </li>
          <li>Haz click en el botón "Validar decisión".</li>
          <li>
            Recibe como respuesta si la decisión es buena (el resultado de A ~ B
            es verdadero).
          </li>
        </ol>
        <h4>
          Puedes repetir el proceso cuantas veces sea necesario, hasta encontrar
          una combinación satisfactoria que sea recomendada por la aplicación.
        </h4>
      </div>
    </div>
  </div>
);

export default Introduction;
