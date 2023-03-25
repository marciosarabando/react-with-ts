export function TempoToSeconds(tempo: string){
    const [horas = "0", minutos, segundos = "0"] = tempo.split(':');

    const horasEmSegundos = Number(horas) * 3600;
    const minutosEmSegundos = Number(minutos) * 60;
    return horasEmSegundos + minutosEmSegundos + Number(segundos);
}