import "../Button/Button.scss"

export default function Button(props) {

    const styleBtn = {
      backgroundColor: props.color,
    };
  
    return (
      <button className="button" onClick={props.onClick} style={styleBtn}>
        {props.children}
      </button>
    );
  }
