


function App() {
  

  return (
     
      <div className="container p-6 h-screen bg-red-700 text-white flex-col items:center md:flex-row space-y-6 md:space-y-0 md:space-x-6">
        <div className="md:flex-1">
          <img src="/imagem/img.png" alt="" className="w-full"/>
        </div>

        <div className="md:flex-1 flex flex-col space-y-6">
          <h1 className="text-3xl text-center text-left font-bold">Dê seu palpite na copa do mundo do Catar 2022!</h1>

          <button className="text-red-700 bg-white text-xl p-10 py-4 rounded-3xl">
            Criar minha conta
          </button>

          <button className="text-red-700 border border-white bg-white text-xl p-10 py-4 rounded-3xl">
            Criar minha conta

          </button>
        </div>
      </div>
    
    
  )
}

export default App
