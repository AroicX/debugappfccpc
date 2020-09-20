import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
import Modal from 'react-bootstrap/Modal';
import { GET_CASE_DETAILS } from '../../../actions/supervisor';

export default function CaseDetails(props) {
  const [ddOpen, setDdopen] = useState(false);
  const [show, setShow] = useState(false);
  const [showCreateQuery, setShowCreateQuery] = useState(false);
  const [showReassignCase, setShowReassignCase] = useState(false);
  const [cases, setCases] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseCreateQuery = () => setShowCreateQuery(false);
  const handleShowCreateQuery = () => setShowCreateQuery(true);

  const handleCloseReassignCase = () => setShowReassignCase(false);
  const handleShowReassignCase = () => setShowReassignCase(true);

  const toggle = () => setDdopen(!ddOpen);

  useEffect(() => {
    getCaseDetails(props.match.params.query);
  }, [props.match.params.query]);

  const getCaseDetails = (query) => {
    const callback = (data) => {
      const { response } = data;

      setCases(response.case);
    };
    const onError = (err) => {
      console.log(err);
    };
    GET_CASE_DETAILS(query, callback, onError);
  };

  return (
    <div>
      <div className="container py-5">
        {' '}
        <div className="row">
          <div className="col-md-12 align-end add-padding-btom">
            <Dropdown isOpen={ddOpen} toggle={toggle}>
              <DropdownToggle
                caret
                className="remove-border"
                tag="span"
                data-toggle="dropdown"
              >
                <button
                  className="btn btn-success btn-no-bg "
                  type="submit"
                >
                  More Actions
                </button>
              </DropdownToggle>
              <DropdownMenu>
                <Link
                  className="dropdown-item"
                  to="#"
                  onClick={handleShowCreateQuery}
                >
                  Create Query
                </Link>
                <hr />
                <Link
                  className="dropdown-item"
                  to="#"
                  onClick={handleShowReassignCase}
                >
                  Re-assign case
                </Link>
                <hr />
                <Link className="dropdown-item" to="#">
                  View evidence
                </Link>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 ">
            <div className="card__box card__box__large  rmv-height  no-padding align-center">
              <div className="row">
                <div className="col-sm-12 col-md-3 eta-bar eta-bar-active ">
                  <div className="row active-info">
                    <div className="col-md-6 shrink-width  ">
                      <img src="/images/png/Position.png" alt="" />
                    </div>
                    <div className="col-md-6 eta-info ">
                      Documentation
                      <div className="duration">
                        Duration: 10 days
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-3 eta-bar  eta-bar-non-active ">
                  <div className="row">
                    <div className="col-md-6 shrink-width">
                      <img src="/images/png/Position2.png" alt="" />
                    </div>
                    <div className="col-md-6 eta-info">
                      Case Review
                      <div className="duration duration-non-active">
                        Duration: 30 days
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-3 eta-bar  eta-bar-non-active ">
                  <div className="row">
                    <div className="col-md-6 shrink-width">
                      <img src="/images/png/Position2.png" alt="" />
                    </div>
                    <div className="col-md-6 eta-info">
                      Approval
                      <div className="duration duration-non-active">
                        Duration: 10 days
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-3 eta-bar  eta-bar-non-active ">
                  <div className="row">
                    <div className="col-md-6 shrink-width">
                      <img src="/images/png/Position2.png" alt="" />
                    </div>
                    <div className="col-md-6 eta-info">
                      Publication
                      <div className="duration duration-non-active">
                        Duration: 10 days
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row add-mgbottom align-end">
          <div className="col-md-12 total ">
            Total Duration: 60 days
          </div>
        </div>
        <div className="row">
          {' '}
          <div className="col-md-12 ">
            {' '}
            <div
              className="card__box card__box__large  rmv-height add-mgbottom "
              id="applications"
            >
              <div className="card__box__large-content">
                <h3 className="checklist-header">Case Information</h3>

                <div>
                  <div className="row case-details">
                    <div className="col-md-4">
                      <div className="col">
                        <div className="row-md-12 case-details-title">
                          REF NO:
                        </div>
                        <div className="row-md-12 case-details-content ">
                          FCCPC/BC/M&A/00/20/VOLNo
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="col">
                        <div className="row-md-12 case-details-title">
                          CASE TYPE:
                        </div>
                        <div className="row-md-12 case-details-content">
                          Application
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="col">
                        <div className="row-md-12 case-details-title">
                          CASE REP:
                        </div>
                        <div className="row-md-12 case-details-content">
                          T & A Legal
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="col">
                        <div className="row-md-12 case-details-title">
                          STATUS
                        </div>
                        <div className="row-md-12 in-prog">
                          <h3> IN-PROGRESS</h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row case-details">
                    <div className="col-md-4">
                      <div className="col">
                        <div className="row-md-12 case-details-title">
                          MATTER NAME:
                        </div>
                        <div className="row-md-12 case-details-content  ">
                          Access Bank Merger
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="col">
                        <div className="row-md-12 case-details-title">
                          PARTIES:
                        </div>
                        <div className="row-md-12 case-details-content">
                          Access Bank, Diamond Bank, Central Bank of
                          Nigeria
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="col">
                        <div className="row-md-12 case-details-title">
                          CATEGORY:
                        </div>
                        <div className="row-md-12 case-details-content">
                          FFM Expediated
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="col">
                        <div className="row-md-12 case-details-title">
                          PAID/NOT PAID:
                        </div>
                        <div className="row-md-12 not-paid">
                          <h3>NOT PAID</h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row case-details">
                    <div className="col-md-7">
                      <div className="col">
                        <div className="row-md-12 case-details-title">
                          CONTACT REP INFO:
                        </div>
                        <div className="row-md-12 case-details-content  ">
                          Olusegun Aribido
                          <br />
                          segunaribido@gmail.com,
                          <br />
                          09048374824
                        </div>
                      </div>
                    </div>

                    <div className="col-md-5 align-end case-details-btn">
                      <div className="col">
                        <button
                          className="btn btn-success btn-medium"
                          type="submit"
                        >
                          View Document Checklist
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 ">
            {' '}
            <div
              className="card__box card__box__large  rmv-height add-mgbottom "
              id="applications"
            >
              <div className="card__box__large-content">
                <h3 className="checklist-header">
                  Analysis Document & Recommendation
                </h3>
                <div className="row">
                  <div className="col-md-5">
                    <div className="doc-card">
                      <div className="row">
                        <div className="col-md-2">
                          <img src="/images/png/pdf.png" alt="pdf" />
                        </div>
                        <div className="col-md-4">
                          <div className="doc-name">
                            Analysis document
                          </div>
                        </div>
                        <div className="col-md-6 align-center">
                          <button
                            className="btn btn-success btn-small"
                            type="submit"
                          >
                            Download
                          </button>
                          <div className="view-doc-link">
                            <Link to="#">View</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7 ">
                    <div className="case-details-title">
                      REASON/RECOMMENDATION:
                    </div>
                    <div className="case-details-content width-fc ">
                      Lorem Ipsum is simply dummy text of the printing
                      and typesetting industry. Lorem Ipsum has been
                      the industry's standard dummy text ever since
                      the 1500s, when an unknown printer took a galley
                      of type and scrambled it to make a type specimen
                      book.
                      <br />
                      <br />
                      It has survived not only five centuries.
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group right btn-group">
                      <div
                        className="btn btn-decline"
                        onClick={handleShow}
                      >
                        Decline
                      </div>
                      <button
                        className="btn btn-success btn-medium "
                        onClick={handleShow}
                        type="submit"
                      >
                        Approve
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* modals */}
      {/* approve/decline modal */}

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
          <div className="align-center">
            <h1>Are you sure?</h1>
            <h4>You wont be able to revert this!</h4>
            <div className="form-group btn-group">
              <div className="btn btn-decline btn-approve">
                Yes! I'm sure
              </div>
              <button
                className="btn btn-success btn-medium btn-disabled "
                type="submit"
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* reassign case modal */}

      <Modal
        show={showReassignCase}
        onHide={handleCloseReassignCase}
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
              <label>Matter Name</label>
              <input type="text" className="form-control " required />
            </div>
            <div className="form-group">
              <label>Remove Handler</label>
              <input type="text" className="form-control " required />
            </div>
            <div className="form-group">
              <label>Add Case Handler</label>
              <input type="text" className="form-control " required />
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className=" btn-group flex">
                  <div className="btn btn-decline btn-cancel">
                    Cancel
                  </div>
                  <button
                    className="btn btn-success btn-medium btn-group-lg "
                    type="submit"
                  >
                    Assign Case
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* create query modal */}

      <Modal
        show={showCreateQuery}
        onHide={handleCloseCreateQuery}
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
              <label>Matter Name</label>
              <input type="text" className="form-control " required />
            </div>
            <div className="form-group">
              <label>Case Handler</label>
              <input type="text" className="form-control " required />
            </div>
            <div className="form-group">
              <label>Query</label>
              <textarea
                type="text"
                className="form-control"
                cols="50"
                rows="50"
                placeholder="Type in your query"
              ></textarea>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-success"
            onClick={handleCloseCreateQuery}
          >
            Send Query
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
