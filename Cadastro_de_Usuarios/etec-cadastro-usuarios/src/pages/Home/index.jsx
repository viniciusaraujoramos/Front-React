import './style.css'
import Lixeira from '../../assets/lixeira.png'

function Home() {
  const usuarios=[
    {
      id:"kwehjoq8",
      nome:"Cin",
      idade:15,
      email:"cin@gmail.com"
    },
    {
      id:"kdf43214o",
      nome:"Vini",
      idade:27,
      email:"vini@gmail.com"
    }
  ]
  return(
    <div className='container'>
      <form>
        <h1>Cadastro de usuarios</h1>
        <input name='nome' type="text" />
        <input name='idade' type="number" />
        <input name='email' type="email" />
        <button type='button'>Cadastrar</button>
      </form>

      {usuarios.map(usuario =>(
        <div key={usuario.id} className='card'>
          <div>
            <p>Nome: {usuario.nome}</p>
            <p>Idede: {usuario.idade}</p>
            <p>Email: {usuario.email}</p>
          </div>
          <button> 
            <img src={Lixeira} />
          </button>
        </div>
      ))}

    </div>
  )
}

export default Home
