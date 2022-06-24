import Sequelize from "sequelize";

const sequelize = new Sequelize(
  "postgres://iljbrizz:SuF1Hu-KlwN_7gNeJNqe8kfHdEIzZPM2@jelani.db.elephantsql.com/iljbrizz",
  {
    dialiect: "postgres",
    define: {
      timestamps: false,
    },
  }
);

export default sequelize;
