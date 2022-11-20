const Form = ({ validateDecision }) => (
  <div className="input">
    <h1>Asistente de Decisiones</h1>
    <form>
      <div className="input__statements">
        <h3>
          <b>I. Ingresa los enunciados</b>
        </h3>
        Desactiva la caja de check si es falso.
        <div className="input__statements__1">
          <label htmlFor="statement-1">
            Ingresa el primer enunciado [A] :{" "}
          </label>
          <input
            type="text"
            className="input__statements__text"
            id="statement-1"
            width="100"
          />{" "}
          <input
            type="checkbox"
            className="input__statements__truth"
            id="statement-1-truth"
            defaultChecked
          />
          <label
            htmlFor="statement-1-truth"
            className="input__statements__toggle"
          ></label>
        </div>
        <div className="input__statements__1">
          <label htmlFor="statement-2">
            Ingresa el primer enunciado [B] :{" "}
          </label>
          <input
            type="text"
            className="input__statements__text"
            id="statement-2"
            width="100"
          />{" "}
          <input
            type="checkbox"
            className="input__statements__truth"
            id="statement-2-truth"
            defaultChecked
          />
          <label
            htmlFor="statement-2-truth"
            className="input__statements__toggle"
          ></label>
        </div>
      </div>
      <div className="input__operator">
        <h3>
          <b>II. Escoge el operador</b>
        </h3>
        <div className="input__operator__select">
          <div className="input__operator__select__options">
            <label
              htmlFor="conjunction"
              className="input__operator__select__option"
            >
              <b>Operador de conjunción:</b>{" "}
              <i>{"¿ Ambos enunciados son igual de importantes ?"}</i>
              <input
                type="radio"
                name="operator"
                id="conjunction"
                value="0"
                defaultChecked
              />
              <span className="checkmark">{"< >"}</span>
            </label>
          </div>
          <div className="input__operator__select__options">
            <label
              htmlFor="disjunction"
              className="input__operator__select__option"
            >
              <b>Operador de disjunción:</b>{" "}
              <i>{"¿ Estarías satisfecho con lograr cualquiera de los dos?"}</i>
              <input
                type="radio"
                name="operator"
                id="disjunction"
                value="0.25"
              />
              <span className="checkmark">{"< >"}</span>
            </label>
          </div>
          <div className="input__operator__select__options">
            <label
              htmlFor="implication"
              className="input__operator__select__option"
            >
              <b>Operador de implicación:</b>{" "}
              <i>{"¿ Si A sucede, B necesiariamente debería suceder ?"}</i>
              <input
                type="radio"
                name="operator"
                id="implication"
                value="0.50"
              />
              <span className="checkmark">{"< >"}</span>
            </label>
          </div>
          <div className="input__operator__select__options">
            <label
              htmlFor="replication"
              className="input__operator__select__option"
            >
              <b>Operador de replicación:</b>{" "}
              <i>{"¿ Si B sucede, A necesariamente debería suceder ?"}</i>
              <input
                type="radio"
                name="operator"
                id="replication"
                value="0.75"
              />
              <span className="checkmark">{"< >"}</span>
            </label>
          </div>
          <div className="input__operator__select__options">
            <label
              htmlFor="biconditional"
              className="input__operator__select__option"
            >
              <b>Operador bicondicional:</b>{" "}
              <i>{"¿ Lo ideal sería hacer ambos o no hacer ninguno ?"}</i>
              <input
                type="radio"
                name="operator"
                id="biconditional"
                value="1"
              />
              <span className="checkmark">{"< >"}</span>
            </label>
          </div>
        </div>
      </div>
      <button className="input__btn" onClick={validateDecision}>
        {"<- Validar decisión ->"}
      </button>
    </form>
  </div>
);

export default Form;
