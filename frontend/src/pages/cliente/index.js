import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
import { toast } from "react-toastify";

import colors from "../../styles/colors";
import api from "../../services/api";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import HeaderActions from "../../store/ducks/header";
import Pagination from "../../components/Pagination";
import Button from "../../components/Button";

import FormClienteModal from "./formClienteModal";

import {
  Empty,
  Content,
  List,
  Linha,
  Item,
  ContentPagination,
  ContentButton,
  ItemButton,
  ModalTile
} from "./styles";

const customStyles = {
  content: {
    border: "0",
    borderRadius: "4px",
    bottom: "auto",
    minHeight: "10rem",
    left: "50%",
    padding: "2rem",
    position: "fixed",
    right: "auto",
    top: "50%",
    transform: "translate(-50%,-50%)",
    minWidth: "20rem",
    width: "80%",
    maxWidth: "60rem"
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.66)"
  }
};

class Cliente extends Component {
  static propTypes = {
    changeTitle: PropTypes.func.isRequired
  };

  state = {
    data: [],
    loading: true,
    modalIsOpen: false,
    initialData: {},
    pageInfo: {
      lastPage: 20,
      page: 0,
      perPage: 0,
      total: 0
    }
  };

  async componentDidMount() {
    this.props.changeTitle("Clientes");
    this.loadData();
  }

  openModal = async id => {
    this.setState({ initialData: {} });
    if (id) {
      const { data } = await api.get(`/clientes/${id}`);
      this.setState({ initialData: data });
    }
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  remover = async id => {
    await api.delete(`clientes\\${id}`);
    toast.success("Registro removido");
    this.loadData();
  };

  loadData = async (page = 1) => {
    const actualPage = page || 1;
    const { data: response } = await api.get(`/clientes?page=${actualPage}`);

    this.setState({
      data: response.docs,
      pageInfo: {
        lastPage: Number(response.lastPage),
        page: Number(response.page),
        perPage: response.perPage,
        total: response.total
      },
      loading: false
    });
  };

  handlePageChange = page => {
    this.setState({
      docs: [],
      loading: true
    });

    this.loadData(page);
  };

  renderContent = page => (
    <Fragment>
      <ContentButton>
        <Button type="button" color="default2" onClick={() => this.openModal()}>
          Novo cliente
        </Button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Cadastro"
          ariaHideApp={false}
        >
          <ModalTile>Cliente</ModalTile>
          <FormClienteModal
            refresh={this.loadData}
            initialData={this.state.initialData}
            closeModal={this.closeModal}
          />
        </Modal>
      </ContentButton>

      <Content>
        <List>
          {this.state.data.map(data => (
            <Linha key={data._id}>
              <Item width="200">{data.nome}</Item>
              <Item width="200">{data.contatos.email}</Item>
              <Item width="100">{data.contatos.telefone}</Item>
              <ItemButton>
                <Button
                  type="button"
                  size="small"
                  color="default"
                  onClick={() => this.openModal(data._id)}
                >
                  Editar
                </Button>
                <Button
                  type="button"
                  size="small"
                  color="default"
                  onClick={() => this.remover(data._id)}
                >
                  Remover
                </Button>
              </ItemButton>
            </Linha>
          ))}
        </List>
      </Content>

      <ContentPagination>
        <Pagination
          activePage={this.state.pageInfo.page}
          pageCount={this.state.pageInfo.lastPage}
          color={colors.primeira}
          onChange={page => this.handlePageChange(page)}
        />
      </ContentPagination>
    </Fragment>
  );

  render() {
    return (
      <Fragment>
        {this.state.loading ? (
          <Empty>Carregando...</Empty>
        ) : (
          this.renderContent()
        )}
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(HeaderActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Cliente);
