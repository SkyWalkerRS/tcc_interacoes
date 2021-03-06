import React, { setState, useEffect } from 'react';
import ChordDiagram from 'react-chord-diagram';
import BackButton from '../components/BackButton';
import { useSelector } from 'react-redux';

export default function Interacao() {
  const drugs = useSelector(state => (state.data))
  

  useEffect(() => { tratarDados() });

  function tratarDados (){
    for (var prop in drugs) {
      if( drugs.hasOwnProperty( prop ) ) {
        //console.log("obj." + prop + " = " + drugs[prop]);
        let a = drugs[prop]['name','interaction']
        console.log(a)
      } 
     
    }
    
    
  }
  // function olaDados(dados){
  //     return dados
  // }

  function criarMatriz() {

    let qtdMedicamentos = 20
    const matriz = Array(qtdMedicamentos).fill(0);

    for (let i in matriz) {
      matriz[i] = Array(qtdMedicamentos).fill(1);
    }


    return matriz;
  }

  function exibirMedicamentos() {
    let medicamentos = ['medicamento 1', 'medicamento 2', 'medicamento 3', 'medicamento 4', 'medicamento 5', 'medicamento 6', 'medicamento 7', 'medicamento 8', 'medicamento 9', 'medicamento 10', 'medicamento 11', 'medicamento 12', 'medicamento 13', 'medicamento 14', 'medicamento 15', 'medicamento 16', 'medicamento 17', 'medicamento 18', 'medicamento 19', 'medicamento 20']

    return medicamentos;
  }

  function selecionarCores() {
    var qtdMedicamentos = exibirMedicamentos()
    const arrayCores = ["#FFA500", "#FFDD89", "#957244", "#F26223", "#FFEBCD", "#FFE4C4", "#FFDAB9", "#FFE4B5", "#87CEEB", '#B0C4DE', "#FFA500", "#FFDD89", "#957244", "#F26223", "#FFEBCD", "	#FFE4C4", "#FFDAB9", "#FFE4B5", "#87CEEB", '#B0C4DE']
    let cor = arrayCores.sort(() => 0, 5 - Math.random());
    let cores = cor.slice(0, qtdMedicamentos.length);

    return cores
  }

  return (

    <section className="alignGraph">
      

      <div>
        <ChordDiagram
          height={700}
          width={700}
          outerRadius={200}
          matrix={criarMatriz()}
          componentId={1}
          groupLabels={exibirMedicamentos()}
          groupColors={selecionarCores()}
        />
      </div>
      <div className="alignButton">
        <BackButton>
        </BackButton>
      </div>
    </section>
  );

}
