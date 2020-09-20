import React, { useState } from 'react';
import Datatable from '../../../../components/Datatable/Datatable';

const ViewReport = () => {
  const [dtOptions1] = useState({
    paging: true, // Table pagination
    ordering: false, // Column ordering
    info: true, // Bottom left status text
    responsive: true,
    sDom:
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
              <div className="row add-padding-btom">
                <div className="col-sm-12 col-md-6 ">
                  <h3 className="checklist-header">
                    Ogbeni Lagbaja Cases in the last 24 hours
                  </h3>
                </div>
                <div className="col-sm-12 col-md-6 align-end ">
                  {' '}
                  <button className="btn btn-success" type="submit">
                    <span>
                      <img
                        src="/images/png/file-download.png"
                        alt="file-download"
                      />
                    </span>{' '}
                    Download Table as PDF
                  </button>
                </div>
              </div>

              <Datatable options={dtOptions1}>
                <table className="hover">
                  <thead>
                    <tr className="table-header">
                      <th> CASE TYPE</th>
                      <th>MATTER NAME</th>
                      <th className="sort-numeric">PARTIES</th>
                      <th>CASE REP</th>
                      <th>CATEGORY</th>
                      <th style={{ width: '107px' }}>REF NO</th>
                      <th>ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody className=" table ">
                    <tr>
                      <td>Application</td>
                      <td>Access Bank Merger</td>
                      <td>Access Bank, Diamond Bank</td>
                      <td>T & A Legal</td>
                      <td>Regular</td>
                      <td>FCCPC/BC/M&A/ 00/20/VOLNo</td>
                      <td className="faded-gray">
                        <span>
                          <img
                            src="/images/png/document.png"
                            alt=""
                          />
                        </span>{' '}
                        Details
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
