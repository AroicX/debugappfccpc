import React from 'react';
import { NavLink } from 'react-router-dom';
const FollowUp = () => {
  return (
    <div>
      <div className="container py-5">
        <div className="row row-space">
          {/* <!-- col-md-4 --> */}
          <div className="col-md-4">
            {/* <!--  --> */}
            <div className="card__box card__box-stack card__box-stack-active">
              <img
                className="card__box-stack-img"
                src="../images/svg/folder.svg"
                alt="folder"
              />

              <div className="card__box--content">
                <p>Follow Up Documents</p>
                <span>Provide all requested documents</span>
              </div>
            </div>
            {/* <!--  --> */}
          </div>
          {/* <!-- col-md-4 --> */}

          {/* <!-- col-md-8 --> */}
          <div className="col-md-8">
            {/* <!-- documents --> */}
            <div className="card__box card__box__large ">
              <div className="card__box__large-content">
                <div className="card__box__large-content--intro">
                  <p>
                    Kindly check boxes of documents being submitted
                    and in cases where document is not available,
                    please state in additional information section.
                  </p>

                  <NavLink to="/applicants/checklist">
                    View the Regular Application Document Checklist to
                    see what is required.
                  </NavLink>
                </div>

                <div className="form-group">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input custom-checkbox"
                      type="checkbox"
                      value=""
                      checked="true"
                    />
                    <label
                      className="form-check-label"
                      for="inlineCheckbox1"
                    >
                      Letter of intent to merge. (.pdf/.docx)
                    </label>
                  </div>

                  <div id="drop-area">
                    <form className="my-form">
                      <input
                        type="file"
                        id="fileElem"
                        multiple
                        accept="image/*"
                        onchange="handleFiles(this.files)"
                      />

                      <label className="drop-label" for="fileElem">
                        {' '}
                        <img
                          src="../images/svg/file.svg"
                          alt="file"
                        />
                        <br />
                        Drop file here or click to upload.
                      </label>
                    </form>
                    <progress id="progress-bar" max="100" value="0">
                      {' '}
                    </progress>
                  </div>
                  <div id="gallery" />
                </div>
              </div>
              <div className="form-group">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input custom-checkbox"
                    type="checkbox"
                    value=""
                  />
                  <label
                    className="form-check-label"
                    for="inlineCheckbox1"
                  >
                    Information Memorandum. (.pdf/.docx)
                  </label>
                </div>
                <div className="form-check form-check-inline my-4">
                  <input
                    className="form-check-input custom-checkbox"
                    type="checkbox"
                    value=""
                  />
                  <label
                    className="form-check-label"
                    for="inlineCheckbox1"
                  >
                    Extract of Board Resolutions of the Merging
                  </label>
                </div>
                <div className="form-check form-check-inline my-4">
                  <input
                    className="form-check-input custom-checkbox"
                    type="checkbox"
                    value=""
                    checked="true"
                  />
                  <label
                    className="form-check-label"
                    for="inlineCheckbox1"
                  >
                    <span>
                      A copy of the letter appointing the Financial
                      Adviser(s). (.pdf/.docx)
                    </span>
                  </label>
                </div>
              </div>

              <div id="drop-area">
                <form className="my-form">
                  <input
                    type="file"
                    id="fileElem"
                    multiple
                    accept="image/*"
                    onchange="handleFiles(this.files)"
                  />

                  <label className="drop-label" for="fileElem">
                    {' '}
                    <img src="../images/svg/file.svg" alt="file" />
                    <br />
                    Drop file here or click to upload.
                  </label>
                </form>
              </div>
            </div>

            <div className="form-group ">
              <label>Additional Information</label>
              <textarea
                type="text"
                className="form-control"
                cols="50"
                rows="50"
              >
                Kindly provide additional information
              </textarea>
            </div>
            <NavLink to ="/follow-up/success">
            <div className="form-group right btn-group">
              <div className="btn btn-success">Save & Contiune</div>
            </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowUp;
