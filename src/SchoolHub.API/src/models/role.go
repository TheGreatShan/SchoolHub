package models

import (
	"github.com/google/uuid"
)

type Role struct {
	Id   uuid.UUID `json:"id" gorm:"primary_key"`
	Role string    `json:"role"`
}
