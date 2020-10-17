package com.danilo.todo.angular.todoangular.entity

import java.time.LocalDateTime
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id

@Entity
data class Todo(
        @Id
        @GeneratedValue
        val id: Long = 0,
        @Column(length = 100)
        val title: String,
        @Column(name = "description")
        val desc: String,
        @Column(name = "created_at")
        val createdAt: LocalDateTime
)
