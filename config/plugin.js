'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  sequelize: {
    enable: false,
    package: 'egg-sequelize',
  },
  validate : {
    enable: true,
    package: 'egg-validate',
  },
  routerPlus : {
    enable: true,
    package: 'egg-router-plus',
  },
  redis : {
    enable: false,
    package: 'egg-redis',
  },
  jwt: {
    enable: true,
    package: "egg-jwt"
  },
  swaggerdoc : {
    enable: true,
    package: "egg-swagger-doc"
  },
};
