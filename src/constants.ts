type urlPath = '/' | '/employees' | '/upload';
export type loggedFlag = Boolean;

export const BaseurlPath: urlPath = '/';
export const EmployeesurlPath: urlPath = '/employees';
export const UploadurlPath: urlPath = '/upload';

export const domain: string = process.env.REACT_APP_DOMAIN || '';