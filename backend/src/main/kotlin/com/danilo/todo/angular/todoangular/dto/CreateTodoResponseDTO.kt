package com.danilo.todo.angular.todoangular.dto

import java.time.LocalDateTime

//TODO: Possivelmente nao vou precisar pois vou poder simplesmente retornar o todo
data class CreateTodoResponseDTO(
        val id: Long,
        val title: String,
        val desc: String,
        val createdAt: LocalDateTime
)
