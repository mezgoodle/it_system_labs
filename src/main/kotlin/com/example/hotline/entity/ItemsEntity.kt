package com.example.hotline.entity

import jakarta.persistence.*

@Entity
@Table(name = "items")
class ItemsEntity(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val itemId: Long? = null,
    val categoryId: Long,
    val vendor: String,
    val name: String,
    val description: String,
    val url: String,
    val priceruah: Long,
    val firmId: Long
)