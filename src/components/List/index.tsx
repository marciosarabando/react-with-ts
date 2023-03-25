import ITarefa from '../../Types/tarefa';
import style from './List.module.scss';
import ListItem from './ListItem';

interface Props{
    studiesList: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

const List = ({studiesList, selecionaTarefa} : Props) => {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do Dia</h2>
            <ul>
                {studiesList.map((item) => (
                    <ListItem
                        selecionaTarefa={selecionaTarefa}
                        key={item.id}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;