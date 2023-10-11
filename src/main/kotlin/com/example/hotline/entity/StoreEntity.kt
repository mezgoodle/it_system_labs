package com.example.hotline.entity

import com.example.hotline.model.Category
import com.example.hotline.model.Item
import com.example.hotline.model.PriceModel
import jakarta.persistence.*
import java.time.Instant

@Entity
@Table(name = "price")
data class StoreEntity(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val firmid: Long? = null,
    val date: Instant,
    val firmname: String,
    val rate: Long
) {
    fun createPrice(categories: List<CategoryEntity>, items: List<ItemsEntity>): PriceModel {
        return PriceModel(
            date,
            firmname,
            firmid!!,
            rate,
            categories.map { Category(it.categoryId!!, it.categoryName) },
            items.map { Item(it.itemId!!, it.categoryId, it.vendor, it.name, it.description, it.url, it.priceruah) }
        )
    }
}
