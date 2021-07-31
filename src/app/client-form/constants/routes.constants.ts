const CLIENT = 'client-form/client',
      ADDRESS = 'client-form/address',
      IDENTITY = 'client-form/identity',
      CREATED_CLIENT = 'client-form/created-client';

export const ROUTES = {
	CLIENT,
  ADDRESS,
  IDENTITY,
  CREATED_CLIENT
}

export const REQUIRED_PARAMS = {
  client: ['firstName', 'lastName', 'birthDate', 'phoneNumber'],
  address: ['country', 'city'],
  identity: ['documentType', 'serialNumber', 'dateOfIssue']
}