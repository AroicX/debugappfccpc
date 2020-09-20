import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const NewApplication = React.lazy(() =>
  import('./App/Applicants/NewApplication'),
);
const Regular = React.lazy(() => import('./App/Applicants/Regular'));

const Checklistreg = React.lazy(() =>
  import('./App/Applicants/Regular/checklist'),
);

const Ffm = React.lazy(() => import('./App/Applicants/Ffm'));

const Checklistffm = React.lazy(() =>
  import('./App/Applicants/Ffm/checklist'),
);

const FfmExpediated = React.lazy(() =>
  import('./App/Applicants/FfmExpediated'),
);

const Checklistffe = React.lazy(() =>
  import('./App/Applicants/FfmExpediated/checklist'),
);

const FollowUp = React.lazy(() =>
  import('./App/Applicants/FollowUp'),
);
const successflp = React.lazy(() =>
  import('./App/Applicants/FollowUp/successflp'),
);

const ApplicantReview = React.lazy(() =>
  import('./App/Applicants/Review/reviewPage'),
);

const ApplicationSuccess = React.lazy(() =>
  import('./App/Applicants/Review/success'),
);

const waitFor = Tag => props => <Tag {...props} />;

//
// Supervisor screens temporarily here till cors bug is fixed
const SupervisorNagivation = React.lazy(() =>
  import(
    './components/layout/AdminLayout/Navigation/Supervisor/SupervisorNavigation'
  ),
);
const AssignedCases = React.lazy(() =>
  import('./App/Supervisors/Cases/AssignedCases'),
);
const ApprovedCases = React.lazy(() =>
  import('./App/Supervisors/Cases/ApprovedCases'),
);
const CasesOnHold = React.lazy(() =>
  import('./App/Supervisors/Cases/CasesOnHold'),
);
const NewCases = React.lazy(() =>
  import('./App/Supervisors/Cases/NewCases'),
);

const ViewReport = React.lazy(() =>
  import('./App/Supervisors/GenerateReport/ViewReport'),
);

const Request = React.lazy(() =>
  import('./App/Supervisors/Requests'),
);

const ViewQueries = React.lazy(() =>
  import('./App/Supervisors/Queries/ViewQuery'),
);
const ViewMatter = React.lazy(() =>
  import('./App/Supervisors/Queries/ViewMatter'),
);

const CaseHandlersList = React.lazy(() =>
  import('./App/Supervisors/CaseHandlers/List'),
);

const UsersList = React.lazy(() =>
  import('./App/Supervisors/Users/UsersList'),
);
const TemplateList = React.lazy(() =>
  import('./App/Supervisors/Templates/TemplatesLists'),
);
const Checklists = React.lazy(() =>
  import('./App/Supervisors/Checklists'),
);
const Fees = React.lazy(() => import('./App/Supervisors/Fees'));
const Faqs = React.lazy(() => import('./App/Supervisors/Faqs'));

const CaseDetails = React.lazy(() =>
  import('./App/Supervisors/Cases/CaseDetails'),
);

/* supervisors */

const routes = [
  //applicants
  {
    path: '/',
    exact: true,
    name: 'New Application',
    breadcrumb: '',
    component: NewApplication,
  },
  //applicants
  {
    path: '/applicants',
    exact: true,
    name: 'New Application',
    breadcrumb: 'Applicant',
    component: NewApplication,
  },

  //applicants
  {
    path: '/applicants/regular',
    exact: true,
    name: 'Regular',

    component: Regular,
  },

  {
    path: '/applicants/regular-checklist',
    exact: true,
    name: 'Checklistreg',
    breadcrumb: 'Regular Checklist',
    component: Checklistreg,
  },

  {
    path: '/applicants/ffm',
    exact: true,
    name: 'Ffm',
    breadcrumb: 'FFM',
    component: Ffm,
  },

  {
    path: '/applicants/ffm-checklist',
    exact: true,
    name: 'Checklistffm',
    breadcrumb: 'FFM Checklist',
    component: Checklistffm,
  },

  {
    path: '/applicants/ffm-expediated',
    exact: true,
    name: 'FfmExpediated',
    breadcrumb: 'FFM Expediated',
    component: FfmExpediated,
  },

  {
    path: '/applicants/ffm-expediated-checklist',
    exact: true,
    name: 'Checklistffe',
    breadcrumb: 'FFM Expediated Checklist',
    component: Checklistffe,
  },
  //applicants

  {
    path: '/applicants/follow-up',
    exact: true,
    name: 'FollowUp',
    breadcrumb: 'Follow Up',
    component: FollowUp,
  },
  //applicants

  //applicants
  {
    path: '/follow-up/success',
    exact: true,
    name: 'successflp',
    breadcrumb: 'Follow Up Success',
    component: successflp,
  },
  //applicants success
  {
    path: '/applicants/:query/application-success',
    exact: true,
    name: 'Success',
    breadcrumb: 'Application Saved',
    component: ApplicationSuccess,
  },
  //applicants review

  {
    path: '/applicants/:query/review',
    exact: true,
    name: 'review',
    breadcrumb: 'Applicant Review',
    component: ApplicantReview,
  },

  // supervisor

  //Supervisors
  {
    path: '/supervisors',
    exact: true,
    name: 'SupervisorNagivation',
    component: waitFor(SupervisorNagivation),
  },
  {
    path: '/supervisors/assigned-cases',
    exact: true,
    name: 'AssignedCases',
    component: waitFor(AssignedCases),
  },
  {
    path: '/supervisors/approved-cases',
    exact: true,
    name: 'ApprovedCases',
    component: waitFor(ApprovedCases),
  },
  {
    path: '/supervisors/cases-on-hold',
    exact: true,
    name: 'CasesOnHold',
    component: waitFor(CasesOnHold),
  },
  {
    path: '/supervisors/new-cases',
    exact: true,
    name: 'NewCases',
    component: waitFor(NewCases),
  },
  {
    path: '/supervisors/generate-report/view',
    exact: true,
    name: 'ViewReport',
    component: waitFor(ViewReport),
  },
  {
    path: '/supervisors/request',
    exact: true,
    name: 'Request',
    component: waitFor(Request),
  },
  {
    path: '/supervisors/queries/view',
    exact: true,
    name: 'ViewQueries',
    component: waitFor(ViewQueries),
  },
  {
    path: '/supervisors/queries/view-matter',
    exact: true,
    name: 'ViewMatter',
    component: waitFor(ViewMatter),
  },
  {
    path: '/supervisors/case-handlers/list',
    exact: true,
    name: 'CaseHandlersList',
    component: waitFor(CaseHandlersList),
  },
  {
    path: '/supervisors/users/user-list',
    exact: true,
    name: 'UsersList',
    component: waitFor(UsersList),
  },
  {
    path: '/supervisors/templates/template-list',
    exact: true,
    name: 'TemplateList',
    component: waitFor(TemplateList),
  },
  {
    path: '/supervisors/checklists',
    exact: true,
    name: 'Checklists',
    component: waitFor(Checklists),
  },
  {
    path: '/supervisors/fees',
    exact: true,
    name: 'Fees',
    component: waitFor(Fees),
  },
  {
    path: '/supervisors/faqs',
    exact: true,
    name: 'Faqs',
    component: waitFor(Faqs),
  },

  {
    path: '/supervisors/:query/case-details',
    exact: true,
    name: 'CaseDetails',
    component: waitFor(CaseDetails),
  },
  // supervisor
];

export default routes;
