/**
 * @since 2019-05-10 07:42
 * @author vivaxy
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.createElement('div');
modalRoot.id = 'modal-root';
document.body.appendChild(modalRoot);

function Modal(props) {
  return ReactDOM.createPortal(props.children, modalRoot);
}

export default class UsingPortals extends Component {
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      modalOpen: false,
    };
  }

  toggleModal(e) {
    // e.stopPropagation();
    this.setState({ modalOpen: !this.state.modalOpen });
  }

  handleClick() {
    console.log('handleClick 执行了');
  }

  render() {
    const { modalOpen } = this.state;
    return (
      <div onClick={this.handleClick}>
        <button onClick={this.toggleModal}>
          {modalOpen ? '关闭' : '打开'}弹窗
        </button>
        {modalOpen && (
          <Modal>
            <button>弹窗内的按钮</button>
          </Modal>
        )}
      </div>
    );
  }
}
