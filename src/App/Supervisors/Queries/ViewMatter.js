import React from 'react';

const ViewMatter = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6">
          <div
            className="card__box card__box__large  rmv-height add-mgbottom "
            id="applications"
          >
            <div className="card__box__small-content">
              {' '}
              <h3 className="checklist-header">Case Information</h3>
              <div>
                <div className="row case-details case-details-small">
                  <div className="col-md-6">
                    <div className="col">
                      <div className="row-md-12 case-details-title">
                        REF NO:
                      </div>
                      <div className="row-md-12 case-details-content ">
                        FCCPC/BC/M&A/00/20/VOLNo
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 align-end">
                    <div className="col">
                      <div className="row-md-12 case-details-title">
                        CASE REP:
                      </div>
                      <div className="row-md-12 case-details-content ">
                        T & A LEGAL
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">hello</div>
      </div>
    </div>
  );
};

export default ViewMatter;
