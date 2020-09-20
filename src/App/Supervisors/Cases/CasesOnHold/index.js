import React, { useState } from 'react';
import Datatable from '../../../../components/Datatable/Datatable';

const CasesOnHold = () => {
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
              <h3 className="checklist-header">Cases On Hold</h3>
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
                      <th className="sort-numeric">CASE TYPE</th>
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
                      <td>Application</td>
                      <td>Regular</td>
                      <td>Opeyemi Adegoroye</td>
                      <td>Lack of evidence</td>
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

export default CasesOnHold;
