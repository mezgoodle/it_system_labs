package com.example.hotline.model

import java.time.Instant

data class PriceModel(
    val date: Instant,
    val firmName: String,
    val firmId: Long,
    val rate: Long,
    val categories: List<Category>,
    val items: List<Item>
)

data class Category(
    var id: Long,
    var name: String
)

data class Item(
    var id: Long,
    var categoryId: Long,
    var vendor: String,
    var name: String,
    var description: String,
    var url: String,
    var priceRUAH: Long,
)
