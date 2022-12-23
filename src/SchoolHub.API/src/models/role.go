package models

import (
	"fmt"
	"github.com/google/uuid"
)

type Role struct {
	Id   uuid.UUID  `json:"id" gorm:"primary_key"`
	Role string `json:"role"`
}

func Hello1(msg string) {
	fmt.Println("msg:", msg)
}
