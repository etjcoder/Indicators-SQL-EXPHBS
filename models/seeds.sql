DROP DATABASE IF EXISTS indicators_db;
CREATE DATABASE indicators_db;
USE indicators_db;

INSERT INTO proteges (
    name, 
    dials, 
    prospect_dials, cashflow_prospect_dials, businessowner_prospect_dials, 
    client_dials, cashflow_client_dials, businessowner_client_dials, 
    contacts, prospect_contacts, client_contacts, 
    scheduled_appointments, prospect_appointments, client_appointments,
    image
    ) 
VALUES (
    "Evan",
    100, 
    50, 30, 20,
    50, 30, 20,
    15, 7, 8,
    5, 3, 2,
    "https://picsum.photos/id/1005/200/200"
);

INSERT INTO proteges (
    name, 
    dials, 
    prospect_dials, cashflow_prospect_dials, businessowner_prospect_dials, 
    client_dials, cashflow_client_dials, businessowner_client_dials, 
    contacts, prospect_contacts, client_contacts, 
    scheduled_appointments, prospect_appointments, client_appointments,
    image
    ) 
VALUES (
    "Jon",
    120, 
    60, 35, 25,
    40, 15, 25,
    13, 5, 8,
    6, 3, 3,
    "https://picsum.photos/id/1012/200/200"
);

INSERT INTO proteges (
    name, 
    dials, 
    prospect_dials, cashflow_prospect_dials, businessowner_prospect_dials, 
    client_dials, cashflow_client_dials, businessowner_client_dials, 
    contacts, prospect_contacts, client_contacts, 
    scheduled_appointments, prospect_appointments, client_appointments,
    image
    ) 
VALUES (
    "Kyle",
    140, 
    73, 40, 33,
    37, 15, 12,
    12, 5, 7,
    8, 3, 5,
    "https://picsum.photos/id/338/200/200"
);

SELECT * FROM proteges