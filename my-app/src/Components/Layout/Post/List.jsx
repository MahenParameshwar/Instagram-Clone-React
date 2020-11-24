import React from "react"
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';

class List extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <>
        <Button type="primary" onClick={this.showModal}>
          ...
        </Button>
        <Modal
          title=""
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>report</p>
          <p>Unfollow</p>
          <p>Go to Post</p>
        </Modal>
      </>
    );
  }
}

export {List}