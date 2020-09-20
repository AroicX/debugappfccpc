import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Datatable from '../../../components/Datatable/Datatable';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
import swal from 'sweetalert';

const ViewReport = () => {
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
  const [ddOpen, setDdopen] = useState(false);

  const onApprove = () => {
    swal({
      title: 'Approved!',
      text: 'Check the case reveiw to see its status',
      icon: 'success',
      button: 'Back',
    });
  };

  const onReject = () => {
    swal({
      title: 'Rejected!',
      text: 'Check the case reveiw to see its status',
      icon: 'error',
      button: 'Back',
    });
  };

  const Dropdowntoggle = () => setDdopen(!ddOpen);
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
                  <h3 className="checklist-header">Request</h3>
                </div>
              </div>

              <Datatable options={dtOptions1}>
                <table className="hover">
                  <thead>
                    <tr className="table-header">
                      <th style={{ width: '107px' }}> REF NO</th>
                      <th>MATTER NAME</th>
                      <th className="sort-numeric">REQUEST TYPE</th>
                      <th>CATEGORY</th>
                      <th>HANDLER</th>
                      <th>REASON</th>
                      <th>ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody className=" table ">
                    <tr>
                      <td>FCCPC/BC/M&A/ 00/20/VOLNo</td>
                      <td>Access Bank Merger</td>
                      <td>Extension</td>
                      <td>Regular</td>
                      <td>Opeyemi Adegoroye</td>
                      <td>Lack of evidence</td>
                      <td className="faded-gray">
                        <Dropdown
                          isOpen={ddOpen}
                          toggle={Dropdowntoggle}
                        >
                          <DropdownToggle
                            className="remove-border"
                            tag="span"
                            data-toggle="dropdown"
                          >
                            <Link to="/">
                              <span>
                                <img
                                  src="/images/png/more.png"
                                  alt=""
                                />
                              </span>{' '}
                              &nbsp; More
                            </Link>
                          </DropdownToggle>
                          <DropdownMenu>
                            <Link
                              className="dropdown-item approve"
                              to="#"
                              onClick={onApprove}
                            >
                              Approve
                            </Link>
                            <hr />
                            <Link
                              className="dropdown-item reject"
                              to="#"
                              onClick={onReject}
                            >
                              Reject
                            </Link>
                          </DropdownMenu>
                        </Dropdown>
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

export default ViewReport;
