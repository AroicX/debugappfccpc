import React, { useEffect, useState } from 'react';
import Datatable from '../../../../components/Datatable/Datatable';
import ReadMoreReact from 'read-more-react';
import { Link } from 'react-router-dom';

import { GET_ALL_ASSIGNED_CASES } from '../../../../actions/supervisor/index';

const AssigneCases = () => {
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
  const [cases, setCases] = useState(null);

  useEffect(() => {
    getCases();
  }, []);

  const getCases = () => {
    const callback = (data) => {
      const { response } = data;
      if (data.message === 'success') {
        setCases(response.cases);

        // let tyb = response.cases;
        // Object.entries(tyb).map((item, i) => {
        //   console.log(item[1]);
        // });
      }
      // console.log();
    };
    const onError = (err) => {
      console.log('Assigned Cases:', err);
    };

    GET_ALL_ASSIGNED_CASES(callback, onError);
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card__box card__box__large  rmv-height add-mgbottom ">
            <div className="card__box__large-content rmv-padn">
              <h3 className="checklist-header">Assigned Cases</h3>
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

              {cases !== null ? (
                <Datatable options={dtOptions1}>
                  <table className="hover">
                    <thead>
                      <tr className="table-header">
                        <th style={{ width: '107px' }}> REF NO</th>
                        <th>MATTER NAME</th>
                        <th className="sort-numeric">CASE TYPE</th>
                        <th>CATEGORY</th>
                        <th>HANDLER</th>
                        <th>STATUS</th>
                        <th>ACTIONS</th>
                      </tr>
                    </thead>
                    <tbody className=" table ">
                      {Object.entries(cases).map((item) => {
                        return (
                          <tr key={item[0]}>
                            <td>{item[1].reference_number}</td>
                            <td>
                              {' '}
                              <ReadMoreReact
                                text={item[1].subject}
                                min={24}
                                ideal={26}
                                max={30}
                                readMoreText="view more..."
                              />
                            </td>
                            <td>{item[1].case_type}</td>
                            <td>{item[1].case_category}</td>
                            <td>{item[1].applicant_fullname}</td>
                            <td>
                              {' '}
                              <div className=" table-btn exceeded">
                                Exceeded
                              </div>{' '}
                            </td>
                            <td className="faded-gray">
                              <Link
                                to={`/supervisors/${item[1].id}/case-details`}
                              >
                                <span>
                                  <img
                                    src="/images/png/document.png"
                                    alt=""
                                  />
                                </span>{' '}
                                Details
                              </Link>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </Datatable>
              ) : (
                <p>No data found</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssigneCases;
