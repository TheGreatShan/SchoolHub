package controllers

import (
	"SchoolHubAPI/src/db"
	"SchoolHubAPI/src/models"
    "github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt"
	"github.com/google/uuid"
	"golang.org/x/crypto/bcrypt"
	"net/http"
	"os"
	"time"
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

func Login(c *gin.Context) {
	var body struct {
		Email    string
		Password string
	}

	if c.Bind(&body) != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Failed to read body"})
		return
	}
	var user models.User
	db.DB.Table(tableName).First(&user, "email = ?", body.Email)

	err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(body.Password))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid email or password"})
		return
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"sub": user.Id,
		"exp": time.Now().Add(time.Hour * 24 * 30).Unix(),
	})
    
    tokenString, err := token.SignedString([]byte(os.Getenv("SECRET")))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Cannot to create token"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"token": tokenString, "user" : user})
}
