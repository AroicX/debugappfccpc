import React, { useState } from 'react';
import Datatable from '../../../../components/Datatable/Datatable';
import Modal from 'react-bootstrap/Modal';
const NewCases = props => {
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
              <h3 className="checklist-header">New Cases</h3>
              <div className="row my-select">
                <div className="col-sm-12 col-md-4 ">
                  Transaction Category
                  <select className="form-control form-control-table">
                    <option>Regular</option>
                  </select>
                </div>
                <div className="col-sm-12 col-md-4 ">
                  Case Type
                  <select className="form-control form-control-table ">
                    <option>Regular</option>
                  </select>
                </div>
                <div className="col-sm-12 col-md-4 ">
                  Handlers
                  <select className="form-control form-control-table">
                    <option>Regular</option>
                  </select>
                </div>
              </div>

              <Datatable options={dtOptions1}>
                <table className="hover">
                  <thead>
                    <tr className="table-header">
                      <th style={{ width: '107px' }}> REF NO</th>
                      <th>MATTER NAME</th>
                      <th className="sort-numeric">PARTIES</th>
                      <th>CASE REP</th>
                      <th>CATEGORY</th>
                      <th>CASE TYPE</th>
                      <th>ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody className=" table ">
                    <tr>
                      <td>FCCPC/BC/M&A/ 00/20/VOLNo</td>
                      <td>Access Bank Merger</td>
                      <td>Access Bank, Diamond Bank</td>
                      <td>T & A Legal</td>
                      <td>Regular</td>
                      <td>Application</td>
                      <td className="faded-gray">
                        <div className="hover" onClick={handleShow}>
                          <span>
                            <img
                              src="/images/png/vector.png"
                              alt=""
                            />
                          </span>{' '}
                          Assign
                        </div>
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
                  <div className="modal-container-sm">
                    <div className="form-group">
                      <label className="modal-title">
                        {' '}
                        Add Case Handler
                      </label>
                      <input
                        type="text"
                        className="form-control "
                        required
                      />
                    </div>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <button
                    className="btn btn-success"
                    onClick={handleClose}
                  >
                    Send
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

export default NewCases;
