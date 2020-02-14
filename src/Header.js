import React from 'react';
import face from "./face.png";
// import PreTable from "./PreTable";
import './widget.scss';

function PreTable (props) {
    return <div id="pre">
        <div className={"hello"}>Привет,<br/>я онлайн</div>
        <div className={"ask"}>Есть вопросы? Спрашивай!<br/>Я с ними обязательно справлюсь</div>
    </div>
}

function Header (props) {
    if (props.name === "-dialog")
        return <div className={`widget-header${props.name}`}>
            <img src={face} className={"face"}/>
            <div className={`widget-header-title${props.name}`}>
                Бот
            </div>
            <div className={"onlinePoint"}></div>
            <div className={"online"}>online</div>
        </div>

    return <div className={"widget-header"}>
        <div className={"widget-header-title"}>
            Бот
        </div>
        <PreTable/>
        <img src={face} className={"face"}/>
    </div>
}

export default Header;