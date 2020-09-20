import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Datatable from '../../../../components/Datatable/Datatable';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';

const ViewQueries = () => {
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
                  <h3 className="checklist-header">Queries</h3>
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
                    New Query
                  </button>
                </div>
              </div>

              <Datatable options={dtOptions1}>
                <table className="hover">
                  <thead>
                    <tr className="table-header">
                      <th style={{ width: '107px' }}> REF NO</th>
                      <th>MATTER NAME</th>
                      <th className="sort-numeric">CASE TYPE</th>
                      <th>CATEGORY</th>
                      <th>HANDLER</th>
                      <th>CASE REP</th>
                      <th>ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody className=" table ">
                    <tr>
                      <td>FCCPC/BC/M&A/ 00/20/VOLNo</td>
                      <td>Access Bank Merger</td>
                      <td>Application</td>
                      <td>Regular</td>
                      <td>Opeyemi Adegoroye</td>
                      <td>T&A Legal</td>
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
                            <Link>
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
                            <Link className="dropdown-item " to="#">
                              View matter
                            </Link>
                            <hr />
                            <Link
                              className="dropdown-item respond"
                              to="#"
                            >
                              Respond
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

export default ViewQueries;
