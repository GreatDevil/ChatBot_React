import React from 'react';
// import './App.css';

function answer(props, answ) {
    props.remove();
    // props.changeMsg(props.name);
    props.append(answ);
}


function Table (props) {

    if (props.name !== "") {
        return <table width="100%" id="answer">
            <tr>
                <td colspan="2" onClick={() => answer(props, "Да!")} className={props.defaultClass}>Да!</td>
                <td colspan="2" onClick={() => answer(props, "Да!")} className={props.defaultClass}>Да!</td>
            </tr>
            <tr>
                <td onClick={() => answer(props, "Да!")} className={props.defaultClass}>Да!</td>
                <td onClick={() => answer(props, "Да!")} className={props.defaultClass}>Да!</td>
                <td onClick={() => answer(props, "Да!")} className={props.defaultClass}>Да!</td>
                <td onClick={() => answer(props, "Да!")} className={props.defaultClass}>Да!</td>
            </tr>
            <tr>
                <td colspan="3" onClick={() => answer(props, "Да, везите скорей!")} className={props.defaultClass}>Да, везите скорей!</td>
                <td onClick={() => answer(props, "Да!")} className={props.defaultClass}>Да!</td>
            </tr>
        </table>;
    }
    return <div></div>;
}
export default Table;