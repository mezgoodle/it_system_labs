
-- Table price
CREATE TABLE IF NOT EXISTS price
(
    firmId   INT PRIMARY KEY,
    date     TIMESTAMP    NULL,
    firmName VARCHAR(225) NULL,
    rate     FLOAT        NULL
    );

-- Table category
CREATE TABLE IF NOT EXISTS category
(
    category_Id   SERIAL PRIMARY KEY,
    category_name VARCHAR(225) NULL,
    firm_id       INT          NULL,
    CONSTRAINT CtFid FOREIGN KEY (firm_id)
    REFERENCES price (firmId)
    ON DELETE CASCADE
    ON UPDATE CASCADE
    );

-- Table items
CREATE TABLE IF NOT EXISTS items
(
    item_id     SERIAL PRIMARY KEY,
    category_Id INT          NULL,
    vendor      VARCHAR(225) NULL,
    name        VARCHAR(225) NULL,
    description TEXT         NULL,
    url         VARCHAR(225) NULL,
    priceRUAH   FLOAT        NULL,
    firm_id     INT          NULL,
    CONSTRAINT Cid FOREIGN KEY (category_Id)
    REFERENCES category (category_Id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
    CONSTRAINT ItFid FOREIGN KEY (firm_id)
    REFERENCES price (firmId)
    ON DELETE CASCADE
    ON UPDATE CASCADE
    );
