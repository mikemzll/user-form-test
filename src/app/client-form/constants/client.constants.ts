const genderOptionList = [{
  name: 'Чоловіча',
  type: 'male'
}, {
  name: 'Жіноча',
  type: 'female'
}];

const genders = {
  male: 'Чоловіча',
  female: 'Жіноча'
};

const clientGroupOptionList = [{
  name: 'VIP клієнти',
  type: 'vip'
}, {
  name: 'Постійні клієнти',
  type: 'regular'
}, {
  name: 'Нові клієнти',
  type: 'new'
}];

const clientGroups = {
  vip: 'VIP клієнти',
  regular: 'Постійні клієнти',
  new: 'Нові клієнти',
}

export const CLIENT = {
  genderOptionList,
  genders,
  clientGroupOptionList,
  clientGroups
}