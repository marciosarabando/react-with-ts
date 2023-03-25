import ITarefa from '../../../Types/tarefa';
import style from './Item.module.scss'

interface Props extends ITarefa {
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

const ListItem = ({ subject, time, selecionado, completado, id, selecionaTarefa }: Props) => {
    return (
        <li className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${completado ? style.itemCompletado : ''}`}
            onClick={() => !completado && selecionaTarefa({
                subject,
                time,
                selecionado,
                completado,
                id
            })}>
            <h3>
                {subject}
            </h3>
            <span>
                {time}
            </span>
            {completado && <span className={style.concluido} aria-label="tarefa completada"></span>}
        </li>
    )
}

export default ListItem;