package com.example.hotline.controller

import com.example.hotline.model.ResponseContent
import com.example.hotline.service.XmlService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
class XmlResource(private val xmlService: XmlService) {

    @GetMapping("/xml")
    fun getXml(@RequestParam("firmId", required = false) firmId: Long?): ResponseEntity<ResponseContent> {
        return ResponseEntity.ok(xmlService.getXml(firmId ?: 74290))
    }
}