// import React, { Component } from 'react';
// import jQuery from 'jquery';
// import { connect } from 'react-redux';
// import { NavLink } from 'react-router-dom';

// import {
//   GET_CHECKLIST_GROUPS,
//   GET_CHECKLIST_GROUPS_BY_ID,
//   SAVE_APPLICATION,
//   GET_APPLICATION,
// } from '../../../actions/applicants';
// import Toastr from 'toastr';

// class Review extends Component {
//   render() {
//     return (
//       <div className="container py-5">
//         <div className="row">
//           <div className="col-md-12 ">
//             <div
//               className="card__box card__box__large  rmv-height add-mgbottom "
//               id="applications"
//             >
//               <div className="card__box__large-content">
//                 <h3 className="checklist-header">
//                   Summary of Application
//                 </h3>

//                 <p className="review-description">
//                   Review your entries for any kind of error. Kindly
//                   note that you cannot edit information once it has
//                   been submitted.
//                 </p>

//                 <p className="section-header">
//                   Application Case Information
//                 </p>

//                 <div className="grid-col-2">
//                   <div className="grid-row-2">
//                     <h4 className="info-title">Subject</h4>
//                     <h4>Access Bank Merger</h4>
//                   </div>
//                   <div className="grid-row-2">
//                     <h4 className="info-title">Filling Fees</h4>
//                     <h4>Paid</h4>
//                   </div>
//                   <div className="grid-row-2">
//                     <h4 className="info-title">Parties:</h4>
//                     <h4>Access Bank; Diamond Bank; GTBank;</h4>
//                   </div>
//                   <div className="grid-row-2">
//                     <h4 className="info-title">Processing Fees:</h4>
//                     <h4>Not Paid</h4>
//                   </div>
//                   <div className="grid-row-2">
//                     <h4 className="info-title">Transaction Type:</h4>
//                     <h4>Small</h4>
//                   </div>
//                 </div>

//                 <p className="section-header">Contact Information</p>
//                 <div className="grid-col-2">
//                   <div className="grid-row-2">
//                     <h4 className="info-title">
//                       Applicant/Representing Firm
//                     </h4>
//                     <h4>T&A Legal</h4>
//                   </div>
//                   <div className="grid-row-2">
//                     <h4 className="info-title">Contact Person</h4>
//                     <h4>Ogbeni Lagbaja</h4>
//                   </div>
//                   <div className="grid-row-2">
//                     <h4 className="info-title">Email address:</h4>
//                     <h4>ogbeni@talegal.com</h4>
//                   </div>
//                   <div className="grid-row-2">
//                     <h4 className="info-title">Phone number:</h4>
//                     <h4>08108765432</h4>
//                   </div>
//                   <div className="grid-row-2">
//                     <h4 className="info-title">Address:</h4>
//                     <h4>
//                       23 ABC street, off DOP road, Lekki Phase 1,
//                       Lagos Nigeria.
//                     </h4>
//                   </div>
//                 </div>

//                 <p className="section-header">Relevant Documents</p>
//                 <div className="grid-col-2">
//                   <div className="grid-col-2-files">
//                     <img src="/images/png/pdf.png" alt="pdf" />

//                     <h4> Letter of intent to merge</h4>
//                   </div>

//                   <div className="grid-col-2-files">
//                     <img src="/images/png/pdf.png" alt="pdf" />{' '}
//                     <h4>
//                       {' '}
//                       A copy of the letter appointing the Financial
//                       Adviser(s)
//                     </h4>
//                   </div>

//                   <div className="grid-row-2">
//                     <h4 className="info-title">
//                       Additional Information:
//                     </h4>
//                     <h4>gbas gbos</h4>
//                   </div>
//                 </div>
//                 <div className="grid-col-2-btn ">
//                   <div className="btn btn-success-pale width-100">
//                     Go back to edit
//                   </div>

//                   <button className="btn btn-success" type="submit">
//                     Submit
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Review;
