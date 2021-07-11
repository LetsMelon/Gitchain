const Yup = require('yup');

const Tags = Yup.object().shape({
  key: Yup.string().required().min(1),
  value: Yup.string().required().min(1),
});

const Profiles = Yup.object().shape({
  name: Yup.string().required(),
  tags: Yup.array().of(Tags),
});

const Config = Yup.object().shape({
  profiles: Yup.array().of(Profiles),
});

module.exports = { Tags, Profiles, Config };
