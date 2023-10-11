package com.example.hotline.service.impl

import com.example.hotline.model.PriceModel
import com.example.hotline.model.ResponseContent
import com.example.hotline.repository.CategoryRepository
import com.example.hotline.repository.ItemsRepository
import com.example.hotline.repository.StoreRepository
import com.example.hotline.service.XmlService
import jakarta.annotation.PostConstruct
import org.springframework.stereotype.Service
import org.w3c.dom.Document
import org.w3c.dom.Element
import java.io.StringWriter
import java.time.Instant
import javax.xml.parsers.DocumentBuilder
import javax.xml.parsers.DocumentBuilderFactory
import javax.xml.transform.OutputKeys
import javax.xml.transform.TransformerFactory
import javax.xml.transform.dom.DOMSource
import javax.xml.transform.stream.StreamResult

@Service
class XmlServiceImpl(
    private val storeRepository: StoreRepository,
    private val itemsRepository: ItemsRepository,
    private val categoryRepository: CategoryRepository
) : XmlService {

    override fun getXml(firmId: Long): ResponseContent {
        val price =
            storeRepository.findByFirmid(firmId)
                ?.createPrice(categoryRepository.findByFirmId(firmId), itemsRepository.findByFirmId(firmId))

        return ResponseContent(firmId, generateXML(price))

    }

    private fun generateXML(price: PriceModel?): String {
        val documentBuilderFactory = DocumentBuilderFactory.newInstance()
        val documentBuilder = documentBuilderFactory.newDocumentBuilder()
        val document = generateXMLContent(documentBuilder, price)

        val transformerFactory = TransformerFactory.newInstance()
        val transformer = transformerFactory.newTransformer()
        transformer.setOutputProperty(OutputKeys.INDENT, "yes")

        val stringWriter = StringWriter()
        val source = DOMSource(document)
        val result = StreamResult(stringWriter)
        transformer.transform(source, result)

        return stringWriter.toString()
    }

    private fun generateXMLContent(
        documentBuilder: DocumentBuilder,
        price: PriceModel?
    ): Document? {
        val document = documentBuilder.newDocument()

        // Create the root element
        val rootElement = document.createElement("price")
        document.appendChild(rootElement)
        // Create and add child elements
        val date = document.createElement("date")
        date.appendChild(document.createTextNode(Instant.now().toString()))
        rootElement.appendChild(date)

        val firmName = document.createElement("firmName")
        firmName.appendChild(document.createTextNode(price?.firmName))
        rootElement.appendChild(firmName)
        val firmId = document.createElement("firmId")
        firmId.appendChild(document.createTextNode(price?.firmId.toString()))
        rootElement.appendChild(firmId)
        val rate = document.createElement("rate")
        rate.appendChild(document.createTextNode(price?.rate.toString()))
        rootElement.appendChild(rate)
        rootElement.appendChild(generateCategories(document, price))
        rootElement.appendChild(generateItems(document, price))
        return document
    }

    private fun generateCategories(
        document: Document,
        price: PriceModel?
    ): Element? {
        val categories = document.createElement("categories")
        price?.categories?.forEach {
            document.createElement("category").apply {
                val id = document.createElement("id")
                id.appendChild(document.createTextNode(it.id.toString()))
                val name = document.createElement("name")
                name.appendChild(document.createTextNode(it.name))

                categories.appendChild(id)
                categories.appendChild(name)
            }
        }
        return categories
    }

    private fun generateItems(
        document: Document,
        price: PriceModel?
    ): Element? {
        val items = document.createElement("items")
        price?.items?.forEach {
            document.createElement("category").apply {
                val id = document.createElement("id")
                id.appendChild(document.createTextNode(it.id.toString()))
                val categoryId = document.createElement("categoryId")
                categoryId.appendChild(document.createTextNode(it.categoryId.toString()))
                val vendor = document.createElement("vendor")
                vendor.appendChild(document.createTextNode(it.vendor))
                val name = document.createElement("name")
                name.appendChild(document.createTextNode(it.name))
                val description = document.createElement("description")
                description.appendChild(document.createTextNode(it.description))

                val url = document.createElement("url")
                url.appendChild(document.createTextNode(it.url))
                items.appendChild(url)

                val priceRUAH = document.createElement("priceRUAH")
                priceRUAH.appendChild(document.createTextNode(it.priceRUAH.toString()))
                items.appendChild(id)
                items.appendChild(categoryId)
                items.appendChild(vendor)
                items.appendChild(name)
                items.appendChild(description)
                items.appendChild(priceRUAH)
            }
        }
        return items
    }
}