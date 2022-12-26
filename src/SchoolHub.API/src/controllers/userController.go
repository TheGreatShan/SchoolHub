package controllers

import (
	"SchoolHubAPI/src/db"
	"SchoolHubAPI/src/models"
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
	"golang.org/x/crypto/bcrypt"
	"net/http"
)

var tableName string = "User"

func SignUp(c *gin.Context) {
	var body struct {
		Username string
		Email    string
		Password string
		RoleId   uuid.UUID
	}

	if c.Bind(&body) != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Failed to read body"})
		return
	}

	hash, err := bcrypt.GenerateFromPassword([]byte(body.Password), 10)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Failed to hash password"})
		return

	}

	user := models.User{Id: uuid.New(), Username: body.Username, Password: string(hash), Email: body.Email, RoleId: body.RoleId}
	result := db.DB.Table(tableName).Create(&user)



	if result.Error != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Failed to create the user"})
		return
	}

    c.JSON(http.StatusOK, gin.H{})
}
