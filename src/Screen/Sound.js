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
  getSound,
  getSoundNow,
  insertSound,
  updateSoundNow,
  updateSoundOld
} from "../Global/redux/actions/sound";

class Sound extends Component {
  state = {
    soundlist: [],
    modal: false,
    idktp: "",
    insertlist: []
  };

  componentDidMount = async () => {
    await this.props.dispatch(getSound());
    console.log("ini dari props", this.props);
    this.setState({
      soundlist: this.props.sound.soundList.result
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
  handleupdate = (id, status) => {
    if (status === 0) {
        this.props.dispatch(updateSoundNow(id)).then(() => {
            swal({
              title: "Sound Games has Ben Actived",
              icon: "success"
            });
          });
    } else {
        this.props.dispatch(updateSoundOld(id)).then(() => {
            swal({
              title: "Pattern Games has Ben Deactived",
              icon: "danger"
            });
          });
    }
    
  };
  render() {
    const insertList = () => {
      this.state.insertlist.push({
        sound_name: this.state.nama_kategori,
        sound_file: this.state.nama_rak
      });
      this.setState(prevState => ({
        modal: !prevState.modal
      }));
      console.log(this.state.insertlist);
      const data = this.state.insertlist;
      this.props.dispatch(insertSound(data));
    };
    const list = this.state.soundlist;
    console.log(list);
    return (
      <div className="container">
        <div className="row mt-5 justify-content-md-center">
          <h1>LIST SOUND EFFECT KuyMusik</h1>
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
                <th>Sound Name</th>
                <th> Sound File</th>
                {/* <th> Status</th> */}
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
                    <td>{val.sound_name}</td>
                    <td>{val.sound_file}</td>
                    <td>
                      {val.sound_status === 0 ? (
                        <Button
                          className="btn btn-danger btn-sm"
                          onClick={() => this.handleupdate(val.id_sound, val.sound_status)}
                        >
                          <i className="fa fa-trash" title="delete" />
                        </Button>
                      ) : (
                        <Button
                          className="btn btn-success btn-sm"
                          onClick={() => this.handleupdate(val.id_sound, val.sound_status)}
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
                  Sound Name
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
                  Sound File
                </label>
                <input
                  type="text"
                  name="nama_kategori"
                  className="form-control"
                  id="idKtp"
                  required
                  onChange={e => this.setState({ nama_rak: e.target.value })}
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
    sound: state.sound
  };
};

export default connect(mapStateToProps)(Sound);
