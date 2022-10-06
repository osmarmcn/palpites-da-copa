

const Home = () =>{
    return(
        <div className="h-screen bg-red-700 text-white p-4 flex flex-col items-center space-y-10">
            <header className="container flex justify-center max-w-5xl p-4">
                <img src="/imagem/logo-fundo-vinho.svg" alt="" className="w-40"/>
            </header>
            <div className="container max-w-5xl flex flex-col p-4 items-center md:flex-row space-y-6 md:space-y-0 md:space-x-6">
                    <div className="md:flex-1 flex justify-center">
                        <img src="imagem/photo1.png" alt=""className="w-full max-w-sm"/>
                    </div>
                    <div className="md:flex-1 flex flex-col space-y-6">
                        <h1 className="text-3xl text-center md:text-left font-bold">Dê seu palpite na copa do mundo do Catar 2022!</h1>
        
                        <a href="/singup" className=" text-center text-red-700 border border-white bg-white text-xl px-8 py-4 rounded-2xl">
                             Criar minha conta
                        </a>
                        <a href="/Login" className=" text-center text-red-700 border border-white bg-white text-xl px-8 py-4 rounded-2xl">
                            Fazer Login
                        </a>
                    </div>
                </div>
        </div>  
    )
}

export default Home