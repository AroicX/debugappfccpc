import React from 'react';

export default function FFXChecklist(props) {
  return (
    <div>
      {/* <!-- header --> */}

      {/* <!-- body --> */}
      <div className="container py-5">
        <div className="row row-space">
          {/* <!-- col-md-8 --> */}
          <div className="col-md-8 col__8-center">
            <div
              className="card__box card__box__large "
              id="applications"
            >
              <button
                className="btn btn-success"
                onClick={() => props.history.goBack()}
              >
                Back
              </button>
              <div className="card__box__large-content">
                <h3 className="checklist-header">
                  FFX Expediated Document Checklist
                </h3>

                <li className="checklist-list">
                  Letter of intent to merge
                </li>
                <li className="checklist-list">
                  Information Memorandum
                </li>
                <li className="checklist-list-sub">
                  Background of the transaction, including any
                  preliminary and final studies (if available)
                  regarding the subject of consideration.
                </li>
                <li className="checklist-list-sub">
                  Background of the transaction, including any
                  preliminary and final studies (if available)
                  regarding the subject of consideration.
                </li>
                <li className="checklist-list-sub">
                  Background of the transaction, including any
                  preliminary and final studies (if available)
                  regarding the subject of consideration.
                </li>
                <li className="checklist-list-sub">
                  Background of the transaction, including any
                  preliminary and final studies (if available)
                  regarding the subject of consideration.
                </li>
                <li className="checklist-list-sub">
                  Background of the transaction, including any
                  preliminary and final studies (if available)
                  regarding the subject of consideration.
                </li>
                <li className="checklist-list-sub">
                  Background of the transaction, including any
                  preliminary and final studies (if available)
                  regarding the subject of consideration.
                </li>
                <li className="checklist-list-sub">
                  Background of the transaction, including any
                  preliminary and final studies (if available)
                  regarding the subject of consideration.
                </li>
                <li className="checklist-list-sub">
                  Background of the transaction, including any
                  preliminary and final studies (if available)
                  regarding the subject of consideration.
                </li>
                <li className="checklist-list-sub">
                  Background of the transaction, including any
                  preliminary and final studies (if available)
                  regarding the subject of consideration.
                </li>
                <li className="checklist-list-sub">
                  Background of the transaction, including any
                  preliminary and final studies (if available)
                  regarding the subject of consideration.
                </li>
                <li className="checklist-list-sub">
                  Background of the transaction, including any
                  preliminary and final studies (if available)
                  regarding the subject of consideration.
                </li>
                <li className="checklist-list-sub">
                  Background of the transaction, including any
                  preliminary and final studies (if available)
                  regarding the subject of consideration.
                </li>
                <li className="checklist-list-sub">
                  Background of the transaction, including any
                  preliminary and final studies (if available)
                  regarding the subject of consideration.
                </li>
                <li className="checklist-list-sub">
                  Background of the transaction, including any
                  preliminary and final studies (if available)
                  regarding the subject of consideration.
                </li>
                <li className="checklist-list-sub">
                  Background of the transaction, including any
                  preliminary and final studies (if available)
                  regarding the subject of consideration.
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
