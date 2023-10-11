package com.example.hotline.repository

import com.example.hotline.entity.StoreEntity
import org.springframework.data.jpa.repository.JpaRepository

interface StoreRepository : JpaRepository<StoreEntity, Long> {
    fun findByFirmid(firmId: Long): StoreEntity?
}