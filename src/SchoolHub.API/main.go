package main

import (
	"SchoolHubAPI/controllers"
	"SchoolHubAPI/db"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	db.ConnectDatabase()
	r.GET("/roles", controllers.FindRoles)
	r.POST("/signup", controllers.SignUp)
	r.POST("/login", controllers.Login)
	r.Run()
}
