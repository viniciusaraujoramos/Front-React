import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';

function Update() {
  const { id } = useParams(); // pega o ID da URL
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nome: '',
    idade: '',
    email: ''
  });

  // Buscar dados do usuário pelo ID
  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await api.get(`/cadastro/${id}`);
        setFormData(res.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchUser();
  }, [id]);

  // Atualizar estado dos inputs
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  // Enviar PUT para atualizar
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await api.put(`/cadastro/${id}`, formData);
      alert('Usuário atualizado com sucesso!');
      navigate('/'); // redireciona de volta para a Home
    } catch (error) {
      console.error(error);
      alert('Erro ao atualizar usuário');
    }
  }

  return (
    <div className="container">
      <h1>Atualizar Usuário</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          placeholder="Nome"
        />
        <input
          type="number"
          name="idade"
          value={formData.idade}
          onChange={handleChange}
          placeholder="Idade"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <button type="submit">Salvar Alterações</button>
      </form>
    </div>
  );
}

export default Update;