module.exports = (sequelize, DataTypes) => {
	const posts = sequelize.define('Doctors', {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		departman: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	})

	return posts
}
