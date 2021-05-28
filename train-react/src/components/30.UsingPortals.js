/**
 * @since 2019-05-10 07:30
 * @author vivaxy
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.createElement('div');
modalRoot.id = 'modal-root';
document.body.appendChild(modalRoot);

function Modal(props) {
  console.log(props);
  return ReactDOM.createPortal(props.children, modalRoot);
}

export default class UsingPortals extends Component {
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {
      modalOpen: false,
    };
  }

  toggleModal() {
    this.setState({ modalOpen: !this.state.modalOpen });
  }

  render() {
    const { modalOpen } = this.state;
    return (
      <div>
        <button onClick={this.toggleModal}>
          {modalOpen ? '关闭' : '打开'}弹窗
        </button>
        {modalOpen && <Modal className='fun' value='a'>弹窗内容</Modal>}
      </div>
    );
  }
}
