import Button from "../Button";
import Relogio from "./Relogio";
import style from './Cronometro.module.scss'
import { TempoToSeconds } from "../../common/utils/time";
import ITarefa from "../../Types/tarefa";
import { useEffect, useState } from "react";

interface Props {
    selecionado: ITarefa | undefined
    FinalizarTarefa: () => void
}

export function Cronometro({ selecionado, FinalizarTarefa }: Props) {
    const [tempo, setTempo] = useState<number>(TempoToSeconds(String(selecionado?.time)));

    useEffect(() => {
        if (selecionado?.time) {
            setTempo(TempoToSeconds(String(selecionado.time)))
        }
        else
            setTempo(0);

    }, [selecionado]);

    function regressiva(contador: number = 0) {
        setTimeout(() =>{
            if(contador > 0){
                setTempo(contador - 1);
                return regressiva(contador - 1);
            }
            FinalizarTarefa();
        }, 1000)
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronometro</p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo} />
            </div>
            <Button onClick={() => regressiva(tempo)}>
                Começar
            </Button>
        </div>
    )
}