import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Datatable from '../../../../components/Datatable/Datatable';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
import Modal from 'react-bootstrap/Modal';

const DropdownBox = (props) => {
  const [ddOpen, setDdopen] = useState(false);
  const [show, setShow] = useState(false);
  const toggle = () => setDdopen(!ddOpen);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Dropdown isOpen={ddOpen} toggle={toggle}>
        <DropdownToggle
          className="remove-border"
          tag="span"
          data-toggle="dropdown"
        >
          <Link to="/">
            <span>
              <img src="/images/png/more.png" alt="" />
            </span>{' '}
            &nbsp; More
          </Link>
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu">
          <Link className="dropdown-item " to="#">
            View more
          </Link>
          <hr />
          <Link
            className="dropdown-item respond "
            onClick={handleShow}
            to="#"
          >
            Activate
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
              <label>Full name</label>
              <input type="text" className="form-control " required />
            </div>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control "
                required
              />
            </div>
            <div className="form-group">
              <label>Phone number</label>
              <input type="text" className="form-control " required />
            </div>
            <div className="form-group">
              <label>Sex</label>
              <input type="text" className="form-control " required />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-success" onClick={handleClose}>
            Save & Continue
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
const CaseHandlersList = () => {
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
                  <h3 className="checklist-header">Case Handlers</h3>
                </div>
                <div className="col-sm-12 col-md-6 align-end ">
                  {' '}
                  <button
                    className="btn btn-success btn-no-bg"
                    type="submit"
                  >
                    <span>
                      <img
                        src="/images/png/add.png"
                        alt="file-download"
                      />
                    </span>{' '}
                    New Case Handler
                  </button>
                </div>
              </div>

              <Datatable options={dtOptions1}>
                <table className="hover">
                  <thead>
                    <tr className="table-header">
                      <th> NAME</th>
                      <th>APPROVED CASES</th>
                      <th className="sort-numeric">WORKING ON</th>
                      <th>CATEGORY</th>
                      <th>INCOME</th>
                      <th>ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody className=" table ">
                    <tr>
                      <td>Ogbeni Lagbaja</td>
                      <td>10</td>
                      <td>3</td>
                      <td>
                        <div className=" table-btn approved">
                          ACTIVE
                        </div>{' '}
                      </td>
                      <td>₦10,000.00</td>
                      <td className="faded-gray">
                        <DropdownBox />
                      </td>
                    </tr>
                    <tr>
                      <td>Ogbeni Lagbaja</td>
                      <td>10</td>
                      <td>3</td>
                      <td>
                        <div className=" table-btn rejected">
                          DEACTIVATED
                        </div>{' '}
                      </td>
                      <td>₦10,000.00</td>
                      <td className="faded-gray">
                        <DropdownBox />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Datatable>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseHandlersList;
