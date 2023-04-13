// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

library Structure {
    enum State {
        Manufactured,
        PurchasedBywarehouse,
        ShippedByManufacturer,
        ReceivedBywarehouse,
        PurchasedByCustomer,
        ShippedBywarehouse,
        ReceivedByDeliveryHub,
        ShippedByDeliveryHub,
        ReceivedByCustomer
    }
    struct ManufactureDetails {
        address manufacturer;
        string manufacturerName;
        string manufacturerDetails;
        string manufacturerLongitude;
        string manufacturerLatitude;
        uint256 manufacturedDate;
    }
    struct ProductDetails {
        string productName;
        uint256 productCode;
        uint256 productPrice;
        string productCategory;
    }
    struct warehouseDetails {
        address warehouse;
        string warehouseLongitude;
        string warehouseLatitude;
    }
    struct DeliveryHubDetails {
        address deliveryHub;
        string deliveryHubLongitude;
        string deliveryHubLatitude;
    }
    struct Product {
        uint256 uid;
        uint256 sku;
        address owner;
        State productState;
        ManufactureDetails manufacturer;
        warehouseDetails warehouse;
        ProductDetails productdet;
        DeliveryHubDetails deliveryhub;
        address customer;
        string transaction;
    }

    struct ProductHistory {
        Product[] history;
    }

    struct Roles {
        bool Manufacturer;
        bool warehouse;
        bool DeliveryHub;
        bool Customer;
    }
}
