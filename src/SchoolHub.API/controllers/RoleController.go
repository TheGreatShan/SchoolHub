package controllers

import (
	"SchoolHubAPI/db"
	"SchoolHubAPI/models"
	"github.com/gin-gonic/gin"
	"net/http"
)

var table string = "Role"

func FindRoles(c *gin.Context) {
	var roles []models.Role
	db.DB.Table(table).Find(&roles)
	c.JSON(http.StatusOK, gin.H{"data": roles})
}
