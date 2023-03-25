import React from "react";
import style from './Button.module.scss'

interface IProps {
    children?: React.ReactNode;
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void
}

//function component
const Button = ({ children, type, onClick }: IProps) => {
    return (
        <button
            className={style.botao}
            type={type}
            onClick={onClick}>
            {children}
        </button>
    )
}

//class component
class Button1 extends React.Component<IProps> {
    render() {
        const { type = "button", onClick } = this.props;
        return (
            <button className={style.botao} type={type} onClick={onClick}>
                {this.props.children}
            </button>
        )
    }
}

export default Button