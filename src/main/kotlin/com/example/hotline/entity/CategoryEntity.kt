package com.example.hotline.entity

import jakarta.persistence.*

@Entity
@Table(name = "category")
class CategoryEntity(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val categoryId: Long? = null,
    val categoryName: String,
    val firmId: Long
)