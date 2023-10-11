package com.example.hotline.service

import com.example.hotline.model.ResponseContent

interface XmlService {

    fun getXml(firmId: Long): ResponseContent
}