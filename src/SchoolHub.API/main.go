package main

import (
	"SchoolHubAPI/src/controllers"
	"SchoolHubAPI/src/db"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	db.ConnectDatabase()
	r.GET("/roles", controllers.FindRoles)
	r.POST("/signup", controllers.SignUp)
	r.Run()
}
