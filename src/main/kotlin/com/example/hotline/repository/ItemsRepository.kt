package com.example.hotline.repository

import com.example.hotline.entity.ItemsEntity
import org.springframework.data.jpa.repository.JpaRepository

interface ItemsRepository : JpaRepository<ItemsEntity, Long> {
    fun findByFirmId(firmId: Long): List<ItemsEntity>
}