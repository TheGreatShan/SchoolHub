package models

import "github.com/google/uuid"

type User struct {
    Id uuid.UUID `json:"id" gorm:"primary_key"`
    Username string `json:"username"`
    Password string `json:"password"`
    Email string `json:"email"`
    RoleId uuid.UUID `json:"role_id"`
}