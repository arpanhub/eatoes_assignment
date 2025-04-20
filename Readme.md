# The Digital Diner

Welcome to **The Digital Diner**: a simple restaurant ordering system built using the MERN stack and PostgreSQL. 

## Live Demo

Visit the live application here: [The Digital Diner](https://eatoes-dinner.netlify.app/)

## Description

The Digital Diner allows users to:
- View categorized menu items
- Add items to a shopping cart
- Place pickup orders by providing their name and phone number
- View past orders associated with their phone number

## Technology Stack

- **Frontend**: React.js
- **Backend**: Node.js with Express.js
- **Database**:
  - **MongoDB**: Used to store menu items because of its flexible schema design, allowing us to easily add, update, or remove menu items without complex database migrations.
  - **PostgreSQL**: Used for storing user and order information. Its relational database capabilities help in managing structured data, especially for queries related to past orders and tracking order details.

## Setup Instructions

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/digital-diner.git
   cd digital-diner/server