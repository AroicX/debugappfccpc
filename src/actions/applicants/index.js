import { fetcher } from '../index';

//
export async function LOGIN(dispatch, email, callback, onError) {
  try {
    let user = await fetcher.post(`/applicant/create`, email);

    if (user.data.message === 'success') {
      dispatch({
        type: 'APPLICANT_LOGIN',
        payload: {
          trackingID: user.data.response.tracking_id,
          // email: user.data.response.email,
        },
      });
      callback && callback(user.data);
    } else {
      throw user;
    }

    return user;
  } catch (err) {
    onError && onError(err);
    return false;
  }
}
//
export async function CONTIUNE(applicationId, callback, onError) {
  try {
    let user = await fetcher.post(`/applicant/track`, applicationId);

    if (user.data.message === 'success') {
      callback && callback(user.data);
    } else {
      throw user;
    }

    return user;
  } catch (err) {
    onError && onError(err);
    return false;
  }
}
//
export async function SAVE_CASE(tracking_id, req, callback, onError) {
  try {
    let res_case = await fetcher.post(
      `application/case-info/save/${tracking_id}`,
      req,
    );
    if (res_case.data.message === 'success') {
      callback && callback(res_case.data);
    } else {
      throw res_case;
    }

    return res_case;
  } catch (err) {
    onError && onError(err);
    return false;
  }
}
//
export async function SAVE_CONTACT(
  tracking_id,
  req,
  callback,
  onError,
) {
  try {
    let contact = await fetcher.post(
      `application/contact-info/save/${tracking_id}`,
      req,
    );
    if (contact.data.message === 'success') {
      callback && callback(contact.data);
    } else {
      throw contact;
    }

    return contact;
  } catch (err) {
    onError && onError(err);
    return false;
  }
}
//
export async function DOWNLOAD_DOCUMENT(
  document_id,
  callback,
  onError,
) {
  try {
    let document = await fetcher.get(
      `/application/document/download/${document_id}`,
    );
    if (document.data.message === 'success') {
      callback && callback(document.data);
    } else {
      throw document;
    }

    return document;
  } catch (err) {
    onError && onError(err);
    return false;
  }
}
//
export async function CASE_TYPE(callback, onError) {
  try {
    let case_type = await fetcher.get(`/application/case-types/all`);
    if (case_type.data.message === 'success') {
      callback && callback(case_type.data);
    } else {
      throw case_type;
    }

    return case_type;
  } catch (err) {
    onError && onError(err);
    return false;
  }
}
//
export async function GET_CHECKLIST_GROUPS(callback, onError) {
  try {
    let checklist = await fetcher.get(`/checklist/groups`);
    if (checklist.data.message === 'success') {
      callback && callback(checklist.data);
    } else {
      throw checklist;
    }

    return checklist;
  } catch (err) {
    onError && onError(err);
    return false;
  }
}

export async function GET_CHECKLIST_GROUPS_BY_ID(
  checklist_id,
  callback,
  onError,
) {
  try {
    let checklist = await fetcher.get(
      `checklist/all/${checklist_id}`,
    );
    if (checklist.data.message === 'success') {
      callback && callback(checklist.data);
    } else {
      throw checklist;
    }

    return checklist;
  } catch (err) {
    onError && onError(err);
    return false;
  }
}
//
export async function CASE_CATEGORY(callback, onError) {
  try {
    let case_category = await fetcher.get(
      `/application/case-categories/all`,
    );
    if (case_category.data.message === 'success') {
      callback && callback(case_category.data);
    } else {
      throw case_category;
    }

    return case_category;
  } catch (err) {
    onError && onError(err);
    return false;
  }
}
//
export async function SAVE_APPLICATION_CATEGORY(
  tracking_id,
  cat_key,
  callback,
  onError,
) {
  try {
    let res = await fetcher.get(
      `application/category/save/${tracking_id}/${cat_key}`,
    );
    if (res.data.message === 'success') {
      callback && callback(res.data);
    } else {
      throw res;
    }

    return res;
  } catch (err) {
    onError && onError(err);
    return false;
  }
}
//
//
export async function GET_APPLICATION(
  tracking_id,
  callback,
  onError,
) {
  try {
    let res = await fetcher.get(`application/${tracking_id}`);
    if (res.data.message === 'success') {
      callback && callback(res.data);
    } else {
      throw res;
    }

    return res;
  } catch (err) {
    onError && onError(err);
    return false;
  }
}
//
//
export async function SAVE_APPLICATION(
  tracking_id,
  callback,
  onError,
) {
  try {
    let res = await fetcher.post(`application/submit/${tracking_id}`);
    if (res.data.message === 'success') {
      callback && callback(res.data);
    } else {
      throw res;
    }

    return res;
  } catch (err) {
    onError && onError(err);
    return false;
  }
}
//
export async function SAVE_CHECKLIST_DOCUMENT(
  tracking_id,
  req,
  callback,
  onError,
) {
  try {
    let checklist_documents = await fetcher.post(
      `application/document/save/${tracking_id}`,
      req,
    );
    if (checklist_documents.data.message === 'success') {
      callback && callback(checklist_documents.data);
    } else {
      throw checklist_documents;
    }

    return checklist_documents;
  } catch (err) {
    onError && onError(err);
    return false;
  }
}
//
