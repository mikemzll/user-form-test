const documentOptionList = [{
  name: 'Паспорт',
  type: 'passport'
}, {
  name: 'Cвідоцтво про народження',
  type: 'birth_certificate'
}, {
  name: 'Вод. посвідчення',
  type: 'driver_license'
}];

const documentTypes = {
  passport: 'Паспорт',
  birth_certificate: 'Cвідоцтво про народження',
  driver_license: 'Вод. посвідчення',
}

export const IDENTITY = {
  documentOptionList,
  documentTypes,
}