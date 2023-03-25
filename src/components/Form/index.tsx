import React, { useState } from "react";
import ITarefa from "../../Types/tarefa";
import Button from "../Button";
import style from './Form.module.scss';
import { v4 as uuidv4 } from 'uuid';

interface Props{
    setDailyStudies: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

const Form = ({ setDailyStudies }: Props) => {
    const [tarefa, setTarefa] = useState("");
    const [tempo, setTempo] = useState("00:00");

    function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        setDailyStudies(tarefasAntigas => [...tarefasAntigas, {
            subject: tarefa,
            time: tempo,
            selecionado: false,
            completado: false,
            id: uuidv4()
        }]);
        setTarefa("");
        setTempo("00:00");
    }

    return (
        <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">Adicione um novo estudo</label>
                <input
                    type="text"
                    id="tarefa"
                    placeholder="O que você quer estudar"
                    value={tarefa}
                    onChange={evento => setTarefa(evento.target.value)}
                    required />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="time">Tempo</label>
                <input
                    type="time"
                    step="1"
                    name="tempo"
                    min="00:00:00"
                    max="01:30:00"
                    value={tempo}
                    onChange={evento => setTempo(evento.target.value)}
                    required />
            </div>
            <Button type="submit">
                Adicionar
            </Button>
        </form>
    )

}


class Form1 extends React.Component<{
    setDailyStudies: React.Dispatch<React.SetStateAction<ITarefa[]>>
}> {
    state = {
        subject: "",
        time: "00:00"
    }

    adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        this.props.setDailyStudies(tarefasAntigas => [...tarefasAntigas, {
            ...this.state,
            selecionado: false,
            completado: false,
            id: uuidv4()
        }]);
        this.setState({
            subject: "",
            time: "00:00"
        })
    }

    render() {
        return (
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">Adicione um novo estudo</label>
                    <input
                        type="text"
                        id="tarefa"
                        placeholder="O que você quer estudar"
                        value={this.state.subject}
                        onChange={evento => this.setState({ ...this.state, subject: evento.target.value })}
                        required />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="time">Tempo</label>
                    <input
                        type="time"
                        step="1"
                        name="tempo"
                        min="00:00:00"
                        max="01:30:00"
                        value={this.state.time}
                        onChange={evento => this.setState({ ...this.state, time: evento.target.value })}
                        required />
                </div>
                <Button type="submit">
                    Adicionar
                </Button>
            </form>
        )
    }
}

export default Form