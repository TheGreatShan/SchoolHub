package db

import (
    "SchoolHubAPI/models"
    "gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectDatabase() {
    // CHANGE Credentials in production
    database, err := gorm.Open(mysql.Open("root:root@tcp(127.0.0.1:3306)/hub"), &gorm.Config{})

	if err != nil {
		panic("Failed to connect the database!")
	}

    err = database.AutoMigrate(&models.Role{})
    if err != nil {
        return
    }

    DB = database
}
