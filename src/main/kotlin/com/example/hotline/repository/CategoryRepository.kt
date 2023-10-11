package com.example.hotline.repository

import com.example.hotline.entity.CategoryEntity
import org.springframework.data.jpa.repository.JpaRepository

interface CategoryRepository : JpaRepository<CategoryEntity, Long> {
    fun findByFirmId(firmId: Long): List<CategoryEntity>
}