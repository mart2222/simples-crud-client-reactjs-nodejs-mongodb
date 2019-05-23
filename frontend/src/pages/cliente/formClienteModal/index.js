import React, { Component } from "react";
import Button from "../../../components/Button";
import api from "../../../services/api";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

import { Group, Buttons } from "./styles";

const FormStyles = {
  flexDirection: "column",
  display: "flex",
  minWidth: "80%"
};

const InputStyles = {
  borderRadius: "5px",
  border: "1px solid #444",
  padding: "2px"
};

export default class FormClienteModal extends Component {
  static propTypes = {
    _id: PropTypes.string,
    nome: PropTypes.string,
    cnpj: PropTypes.string,
    cpf: PropTypes.string,
    tipo: PropTypes.bool,
    contatos: PropTypes.shape({
      celular: PropTypes.string,
      email: PropTypes.string,
      telefone: PropTypes.string
    })
  };

  state = {
    _id: null,
    nome: "",
    cnpj: "",
    cpf: "",
    tipo: false,
    contatos: {
      celular: "",
      email: "",
      telefone: ""
    }
  };

  componentDidMount() {
    this.setState(this.props.initialData);
  }

  handleSubmit = async e => {
    e.preventDefault();

    const { nome } = this.state;

    if (nome.trim().length === 0) {
      toast.error("É necessário informar nome!");
      return;
    }

    await api.postOrPut("clientes", this.state._id, this.state);
    toast.success("Registro salvo");

    this.props.closeModal();
    this.props.refresh();
  };

  handleChange = e => {
    const name = e.target.name.split(".");

    if (name[1] === undefined) {
      this.setState({ [name[0]]: e.target.value });
    } else {
      this.setState({
        [name[0]]: { ...this.state[name[0]], [name[1]]: e.target.value }
      });
    }
  };

  checkboxHandler = e => {
    const { checked } = e.target;
    this.setState({
      tipo: checked
    });

    if (checked) {
      this.setState({ cpf: "" });
      return;
    }
    this.setState({ cnpj: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={FormStyles}>
        <Group width="100">
          <label htmlFor="nome">Nome</label>
          <input
            name="nome"
            id="nome"
            value={this.state.nome}
            onChange={this.handleChange}
            style={InputStyles}
          />
        </Group>

        <Group>
          <label>Pesso jurídica: </label>
          <input
            if="box"
            type="checkbox"
            name="tipo"
            checked={this.state.tipo}
            onChange={this.checkboxHandler}
          />
        </Group>

        {this.state.tipo ? (
          <Group width="100">
            <label htmlFor="cnpj">CNPJ</label>
            <input
              name="cnpj"
              id="cnpj"
              value={this.state.cnpj}
              onChange={this.handleChange}
              style={InputStyles}
            />
          </Group>
        ) : (
          <Group width="100">
            <label htmlFor="cpf">CPF</label>
            <input
              name="cpf"
              id="cpf"
              value={this.state.cpf}
              onChange={this.handleChange}
              style={InputStyles}
            />
          </Group>
        )}

        <Group width="100">
          <label htmlFor="telefone">Telefone</label>
          <input
            name="contatos.telefone"
            id="telefone"
            value={this.state.contatos.telefone}
            onChange={this.handleChange}
            style={InputStyles}
          />
        </Group>

        <Group width="100">
          <label htmlFor="email">E-mail</label>
          <input
            name="contatos.email"
            id="email"
            value={this.state.contatos.email}
            onChange={this.handleChange}
            style={InputStyles}
          />
        </Group>

        <Group width="100">
          <label htmlFor="celular">Celular</label>
          <input
            name="contatos.celular"
            id="celular"
            value={this.state.contatos.celular}
            onChange={this.handleChange}
            style={InputStyles}
          />
        </Group>

        <Buttons>
          <Button type="submit" color="default2">
            Salvar
          </Button>

          <Button
            type="button"
            color="cancel"
            onClick={() => this.props.closeModal()}
          >
            Cancelar
          </Button>
        </Buttons>
      </form>
    );
  }
}
