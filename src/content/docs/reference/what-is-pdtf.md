---
title: Property Transactions 
description: Learn how to use use the PDTF schemas for property transactions
---

The Property Data Trust Framework (PDTF) is a structured framework designed to streamline and enhance property transactions by providing a standardised schema for managing and exchanging property-related data. This framework proves to be highly efficient and time-saving, primarily because it accommodates a wide range of data sets commonly used throughout the lifecycle of property transactions. Below, we'll delve into a more detailed explanation of how the PDTF Schema can be effectively utilised for managing property transactions.

What follows is a brief outline of how the schema could be used for storing property transactions. This will not cover authentication and languages used as these are most likely unique to your organisation.

#### Schema for Property Transactions:
The PDTF Schema serves as a robust foundation for managing property transactions. It is a pre-defined structure that encompasses various data elements relevant to property transactions, ensuring consistency and uniformity in data representation. By adhering to this schema, organisations can simplify the process of handling property-related information.

####  Time-Saving Benefits:
Employing the PDTF Schema significantly reduces the time and effort required for handling property transactions. This is achieved by eliminating the need to reinvent data structures or formats, as the schema already caters to the diverse data needs of property transactions. This standardisation enhances efficiency and reduces the risk of data inconsistencies.
Connecting and Sharing Data:
Once property transactions are generated using the PDTF Schema, they can seamlessly connect with other data hosts that adhere to the PDTF standards. This interoperability enables organisations to effortlessly share and retrieve property transaction data in a standardised and open manner. It facilitates collaboration among different entities involved in property transactions.

#### Methods for Data Retrieval and Storage:
Implementing the PDTF Schema involves employing several essential methods to manage property transaction data effectively. These methods include:
* Checking for Active Status Transactions by UPRN
* Creating a Transaction
* Creating Claims within Transactions
* Retrieving Claims for a Transaction
* Checking for Active Status Transactions by UPRN:
* Before creating a new transaction, organisations should check for the existence of an active status transaction for a property using its Unique Property Reference Number (UPRN). This step helps avoid duplicate transactions.

#### Creating a Transaction:
If no active transaction is found for a property, organisations can create a new transaction. This involves generating a unique transaction ID and setting the transaction status to "active."

#### Creating Claims within Transactions:
Claims represent specific pieces of information within a transaction. Organisations can create claims using the PDTF Schema's predefined structure to ensure data consistency.

#### Retrieving Claims for a Transaction:
To access and view relevant data and claims associated with a specific transaction, organisations can use the PDTF Schema to retrieve all claims related to that transaction. This step allows for easy access to transaction details within an application.

#### Transaction States:
Property transactions managed through the PDTF Schema can have various states, including "active," "completed," or "cancelled." These states provide insights into the progress and status of a transaction, allowing for effective tracking and management.

In summary, the Property Data Trust Framework (PDTF) offers a standardised schema that greatly simplifies property transactions by providing a common data structure. It promotes efficiency, data consistency, and interoperability among organisations involved in property transactions. By following the PDTF Schema and employing the specified methods, organisations can enhance their property transaction management processes, save time, and facilitate seamless data sharing. Please note that authentication and specific language preferences are typically organisation-specific and may not be covered by the PDTF Schema.
