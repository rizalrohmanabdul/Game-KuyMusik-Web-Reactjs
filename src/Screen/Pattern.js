import React, { Component, Fragment } from "react";
import {
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import swal from "sweetalert";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import {
  patternALL,
  insertpattern,
  updatepatternaktif
} from "../Global/redux/actions/pattern";

class Pattern extends Component {
  state = {
    patternlist: [],
    modal: false,
    idktp: "",
    insertlist: []
  };

  componentDidMount = async () => {
    await this.props.dispatch(patternALL());
    console.log("ini dari props", this.props);
    this.setState({
      patternlist: this.props.pattern.patternList.result
    });
  };
  toggle = this.toggle.bind(this);
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  toggleedit = this.toggleedit.bind(this);
  toggleedit() {
    this.setState(prevState => ({
      modaledit: !prevState.modal
    }));
  }
  handleupdate = id => {
    this.props.dispatch(updatepatternaktif(id)).then(() => {
      swal({
        title: "Pattern Games has Ben Actived",
        icon: "warning"
      });
    });
  };
  render() {
    const insertList = () => {
      this.state.insertlist.push({
        pattern_type: this.state.nama_kategori,
        combo_lengt: this.state.nama_rak
      });
      this.setState(prevState => ({
        modal: !prevState.modal
      }));
      console.log(this.state.insertlist);
      const data = this.state.insertlist;
      this.props.dispatch(insertpattern(data));
    };
    const list = this.state.patternlist;
    console.log(list);
    return (
      <div className="container">
        <div className="row mt-5 justify-content-md-center">
          <h1>LIST PATTERN AND COMBO GAMES KuyMusik</h1>
        </div>
        <Button className="btn btn-info btn-sm" onClick={this.toggle}>
          {" "}
          <i className="fa fa-plus" title="add">
            {" "}
            Tambah Data
          </i>
        </Button>
        <div className="row mt-5 justify-content-md-center">
          <Table hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Pattern</th>
                <th>Combo</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {list.map((val, index) => {
                let no = 1;
                return (
                  <tr>
                    <th key={index} scope="row">
                      {no++}
                    </th>
                    <td>{val.pattern_type}</td>
                    <td>{val.combo_lengt}</td>
                    <td>
                      {val.status === 0 ? (
                        <Button
                          className="btn btn-danger btn-sm"
                          onClick={() => this.handleupdate(val.id_pattern)}
                        >
                          <i className="fa fa-trash" title="delete" />
                        </Button>
                      ) : (
                        <Button
                          className="btn btn-success btn-sm"
                          onClick={() => this.handleupdate(val.id_pattern)}
                        >
                          <i className="fa fa-edit" title="edit" />
                        </Button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
        <Fragment>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggle}>Tambah Data </ModalHeader>
            <ModalBody>
              <div className="form-group">
                <label className="control-label" htmlFor="idKtp">
                  Pattern Type 
                </label>
                <input
                  type="text"
                  name="nama_kategori"
                  className="form-control"
                  id="idKtp"
                  required
                  onChange={e =>
                    this.setState({ nama_kategori: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label className="control-label" htmlFor="idKtp">
                  Combo Lengt 
                </label>
                <input
                  type="text"
                  name="nama_kategori"
                  className="form-control"
                  id="idKtp"
                  required
                  onChange={e =>
                    this.setState({ nama_rak: e.target.value })
                  }
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={insertList.bind(this)}>
                Simpan
              </Button>{" "}
            </ModalFooter>
          </Modal>
        </Fragment>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    pattern: state.pattern
  };
};

export default connect(mapStateToProps)(Pattern);
