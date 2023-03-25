import { useState } from 'react';
import { Cronometro } from '../components/Cronometro';
import Form from '../components/Form';
import List from '../components/List';
import ITarefa from '../Types/tarefa';
import style from './App.module.scss';

function App() {

  const [dailyStudies, setDailyStudies] = useState<ITarefa[]>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);
    setDailyStudies(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }

  function FinalizarTarefa() {
    if (selecionado) {
      setSelecionado(undefined);
      setDailyStudies(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if (tarefa.id === selecionado.id) {
          return {
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }
        return tarefa;
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setDailyStudies={setDailyStudies} />
      <List
        studiesList={dailyStudies}
        selecionaTarefa={selecionaTarefa}
      />
      <Cronometro
        selecionado={selecionado} 
        FinalizarTarefa={FinalizarTarefa}/>
    </div>
  );
}

export default App;
