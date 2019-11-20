import React, { Component, fragment } from 'react'
import Header from './components/Header'
import ListaNoticias from './components/ListaNoticias'
import Formulario from './components/Formulario'



 class App extends Component {
   state= {
     noticias:[]

   }

  componentDidMount(){
    this.consultarNoticias();
  }

   consultarNoticias = async (categoria = 'general') => {
    const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=cbf15a7cbf944bd58aca002a9a92f34f`;
    const respuesta = await fetch(url);
    const noticias = await respuesta.json();

    this.setState({
      noticias: noticias.articles
    })
  }

  render() {
    return ( 
      <fragment>
        <Header
        titulo='Noticias React API'
        />
        <div className="container white contenedor-noticias">
              <Formulario
                consultarNoticias={this.consultarNoticias}
              />
              
              <ListaNoticias
                noticias={this.state.noticias}
              />
        </div>
        
      </fragment>
    )
  }
}
export default App