import React, { useState } from 'react';
import Datatable from '../../../components/Datatable/Datatable';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
import Modal from 'react-bootstrap/Modal';
import swal from 'sweetalert';

const DropdownBox = props => {
  const [ddOpen, setDdopen] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const toggle = () => setDdopen(!ddOpen);

  const onDelete = () => {
    swal({
      title: ' FAQ Successfully Deleted!',
      icon: 'success',
      button: 'Back',
    });
  };

  return (
    <div>
      <Dropdown isOpen={ddOpen} toggle={toggle}>
        <DropdownToggle
          className="remove-border"
          tag="span"
          data-toggle="dropdown"
        >
          <Link>
            <span>
              <img src="/images/png/more.png" alt="" />
            </span>{' '}
            &nbsp; More
          </Link>
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu">
          <Link
            className="dropdown-item  "
            to="#"
            onClick={handleShow}
          >
            Edit
          </Link>
          <hr />
          <Link
            className="dropdown-item  reject "
            to="#"
            onClick={onDelete}
          >
            Delete
          </Link>
        </DropdownMenu>
      </Dropdown>
      <Modal
        show={show}
        onHide={handleClose}
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        dialogClassName="modal-90w"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="modal-container">
            <div className="form-group">
              <label>Question</label>
              <input
                type="text"
                className="form-control "
                required
                placeholder="Type in your question"
              />
            </div>
            <div className="form-group">
              <label>Answer</label>
              <input
                type="text"
                className="form-control "
                required
                placeholder="Type in your answer"
              />
            </div>
            <div className="form-group">
              <label>Upload Supporting Document (.pdf/.docx)</label>
              <div id="drop-area">
                <input
                  type="file"
                  id="fileElem"
                  onChange={e => {
                    this.setState({
                      file: e.target.files[0],
                    });
                  }}
                />

                <label className="drop-label" htmlFor="fileElem">
                  <img src="../images/svg/file.svg" alt="file" />
                  <br />
                  Drop file here or click to upload.
                </label>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-success" onClick={handleClose}>
            Save
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const Faqs = props => {
  const [dtOptions1] = useState({
    paging: true, // Table pagination
    ordering: false, // Column ordering
    info: true, // Bottom left status text
    responsive: true,
    sDom:
      "<'row'<'col-sm-3 md-12 'f>>" +
      "<'row'<'col-sm-12'tr>>" +
      "<'row'<'col-sm-12 col-md-6'p><'col-sm-12 col-md-3'l><'col-sm-12 col-md-3'i>>",

    // Text translation options
    // Note the required keywords between underscores (e.g _MENU_)
    oLanguage: {
      sSearch: '',
      sSearchPlaceholder: 'search',

      info: 'Showing page _PAGE_ of _PAGES_',
      zeroRecords: 'Nothing found - sorry',
      infoEmpty: 'No records available',
      infoFiltered: '(filtered from _MAX_ total records)',
      paginate: {
        first: 'First',
        last: 'Last',
        next: 'Next',
        previous: 'Previous',
      },
      oPaginate: {
        sNext: '<em class="las la-angle-double-right"></em>',
        sPrevious: '<em class="las la-angle-double-left"></em>',
      },
    },
  });

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-12 ">
          <div
            className="card__box card__box__large  rmv-height add-mgbottom "
            id="applications"
          >
            <div className="card__box__large-content rmv-padn">
              <div className="row ">
                <div className="col-sm-12 col-md-6 ">
                  <h3 className="checklist-header">Manage FAQs</h3>
                </div>
                <div className="col-sm-12 col-md-6 align-end ">
                  {' '}
                  <button
                    className="btn btn-success btn-no-bg"
                    type="submit"
                    onClick={handleShow}
                  >
                    <span>
                      <img
                        src="/images/png/add.png"
                        alt="file-download"
                      />
                    </span>{' '}
                    New FAQ
                  </button>
                </div>
              </div>

              <Datatable options={dtOptions1}>
                <table className="hover">
                  <thead>
                    <tr className="table-header">
                      <th style={{ width: '207px' }}> QUESTION</th>
                      <th style={{ width: '207px' }}>ANSWER</th>
                      <th className="sort-numeric">SUPPORTING DOC</th>
                      <th>ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody className=" table ">
                    <tr>
                      <td>
                        How do I add a new supporting document to my
                        application?
                      </td>
                      <td>
                        You can add a new supporting document to your
                        application.{' '}
                      </td>
                      <td>
                        {' '}
                        <img
                          src="/images/png/pdfsmall.png"
                          alt="pdf"
                        />{' '}
                        &nbsp;
                        <span>Analysis Document</span>{' '}
                      </td>
                      <td className="faded-gray">
                        <DropdownBox />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Datatable>
              <Modal
                show={show}
                onHide={handleClose}
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                dialogClassName="modal-90w"
              >
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                  <div className="modal-container">
                    <div className="form-group">
                      <label>Question</label>
                      <input
                        type="text"
                        className="form-control "
                        required
                        placeholder="Type in your question"
                      />
                    </div>
                    <div className="form-group">
                      <label>Answer</label>
                      <input
                        type="text"
                        className="form-control "
                        required
                        placeholder="Type in your answer"
                      />
                    </div>
                    <div className="form-group">
                      <label>
                        Upload Supporting Document (.pdf/.docx)
                      </label>
                      <div id="drop-area">
                        <input
                          type="file"
                          id="fileElem"
                          onChange={e => {
                            this.setState({
                              file: e.target.files[0],
                            });
                          }}
                        />

                        <label
                          className="drop-label"
                          htmlFor="fileElem"
                        >
                          <img
                            src="../images/svg/file.svg"
                            alt="file"
                          />
                          <br />
                          Drop file here or click to upload.
                        </label>
                      </div>
                    </div>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <button
                    className="btn btn-success"
                    onClick={handleClose}
                  >
                    Save
                  </button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
