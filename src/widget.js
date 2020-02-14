import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import './widget.scss';
import Form from "./Form";
import Table from "./Table";
import Header from "./Header";
import chak from "./ChatIcon.png";
import close from "./ChatIcon_close.png";
import { Link, animateScroll as scroll } from "react-scroll";

class Widget extends Component {
    constructor(props) {
        super(props);
        this.append = this.append.bind(this);
        this.refo = React.createRef();
    }

    append(value) {
        const {text} = this.state
        return this.setState({
            text: text.concat({msg: value, class: "msg_client"},this.scrollToBottom),
        });

    }
    state = {
        opened: false,
        showDock: true,
        msg: "",
        answ: "",
        text: [],
        header: "",
        botMsg: "",
    }

    handleToggleOpen = () => {
        this.setState((prev) => {
            let { showDock } = prev;
            if (!prev.opened) {
                showDock = false;
            }
            return {
                showDock,
                opened: !prev.opened,
            };
        });
    }


    handleWidgetExit = () => {
        this.setState({
            showDock: true,
        });
    }

    renderBody = () => {
        const { showDock } = this.state;

        if (!showDock) return '';

        return (
            <img
                src={chak}
                className="widget-footer-msg"
                onClick={this.handleToggleOpen}
                onKeyPress={this.handleToggleOpen}
            />
        );
    }

    scrollToBottom() {
        scroll.scrollToBottom({
            containerId: "scrolledBlock"
        });
    }

    message = (msg) => {
        let str = "Вы сможете принять наш пробник в понедельник утром?";
        if (msg !== "")
            this.setState({header: "-dialog", botMsg: "2",
                text: this.state.text.concat({msg:msg,class: "msg_client"}).concat({msg: str,class: "msg_bot"})});
    }

    removeBotMsg = () => {
        this.setState({botMsg: "", });
    }

    render() {
        this.setState(this.scrollToBottom);
        const { opened } = this.state;
        const body = this.renderBody();
        const { bodyText, headerText, footerText } = this.props;

        return (
            <div className="docked-widget">
                <Transition in={opened} timeout={10} onExited={this.handleWidgetExit}>
                    {status => (
                        <div className={`widget widget-${status}`}>
                            <Header name = {this.state.header}/>
                            <div className="widget-body" id={"scrolledBlock"}>
                                <div>
                                    {this.state.text.map(x => (<div className={x.class}>{x.msg}</div>))}
                                </div>
                                <Table
                                    name={this.state.botMsg}
                                    changeMsg = {this.message}
                                    append = {this.append}
                                    remove = {this.removeBotMsg}
                                    defaultClass = {this.state.defaultClass}
                                />
                            </div>
                            <div className="widget-footer">
                                <Form
                                    changeMsg = {this.message}
                                />
                                <img
                                    src={close}
                                    className="widget-footer-shift"
                                    onClick={this.handleToggleOpen}
                                    onKeyPress={this.handleToggleOpen}
                                />
                            </div>
                        </div>
                    )}
                </Transition>
                {body}
            </div>
        );
    }
}

Widget.propTypes = {
    headerText: PropTypes.string,
    bodyText: PropTypes.string,
    footerText: PropTypes.string,
};

Widget.defaultProps = {
    headerText: "widget-header",
    bodyText: "Я онлайн",
    footerText: 'Footer',
};

export default Widget;