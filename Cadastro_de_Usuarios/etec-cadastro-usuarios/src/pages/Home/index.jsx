import { useEffect, useState, useRef } from 'react'
import './style.css'
import Lixeira from '../../assets/lixeira.png'
import api from '../../services/api'
import { Link } from 'react-router-dom';

function Home() {
  const [usuarios, setUsuarios] = useState([])
  //let usuarios=[]

  const inputEmail = useRef()
  const inputNome = useRef()
  const inputIdade = useRef()
  
  async function getUsuarios(){
    const usuariosDaApi = await api.get('/cadastro')
    setUsuarios(usuariosDaApi.data)
    console.log (usuarios)
  }

  async function createUsuarios(){
    await api.post('/cadastro',{
      email: inputEmail.current.value,
      nome: inputNome.current.value,
      idade: inputIdade.current.value
    })
    getUsuarios()
  }

  async function deleteUsuarios(id){
    await api.delete(`/cadastro/${id}`)
    getUsuarios()
  }

  useEffect(()=>{
    getUsuarios()
    // eslint-dasable-nest-line react-hooks/exhaustive-deps
  },[])

  return(
    <div className='container'>
      <form>
        <h1>Cadastro de usuarios</h1>
        <input placeholder = 'Digite seu nome' name='nome' type="text" ref={inputNome} />
        <input placeholder = 'Digite sua idade' name='idade' type="number" ref={inputIdade} />
        <input placeholder ='Digite o seu email' name='email' type="email" ref={inputEmail} />
        <button type='button' onClick={createUsuarios}>Cadastrar</button>
      </form>

      {usuarios.map(usuario =>(
        <div key={usuario.id} className='card'>
          <div>
            <p>Nome: {usuario.nome}</p>
            <p>Idede: {usuario.idade}</p>
            <p>Email: {usuario.email}</p>
          </div >
          <div className='UP'>
            <Link to={`/update/${usuario.id}`}>
              <button>Update</button>
            </Link>
          </div>
          <button onClick={ ()=> deleteUsuarios(usuario.id)}> 
            <img src={Lixeira} />
          </button>
          
        </div>
      ))}

      

    </div>
  )
}

export default Home
