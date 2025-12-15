# **Networking Basics: IP Address, Client–Server, Ports**

## **1. IP Address**

### **What is an IP Address?**

An **IP address** uniquely identifies a device on a network.
In IPv4, an IP address is **32 bits long**, divided into **4 octets** (8 bits each).

**Example (IPv4):**

```
192.168.1.10
```

Each number ranges from `0–255`.

---

### **Why 32 Bits?**

* 32 bits allow approximately **4.3 billion unique addresses**
* Written in **dotted decimal notation**
* Used for **routing and identification** on a network

---

### **Types of IP Addresses**

| Type       | Description                        |
| ---------- | ---------------------------------- |
| Public IP  | Identifies device on the internet  |
| Private IP | Used within local networks (LAN)   |
| Static IP  | Fixed, does not change             |
| Dynamic IP | Assigned automatically, may change |

---

## **2. Client and Server**

### **Client**

A **client** is a device or software that **requests services**.

**Common Client Example**

* Web browser (Chrome, Firefox, Edge)

```text
Browser → sends request
```

---

### **Server**

A **server** is a system that **responds to client requests**.

**Examples**

* Web server
* Database server
* Application server

Popular local server stacks:

| Stack | Components                               |
| ----- | ---------------------------------------- |
| LAMP  | Linux, Apache, MySQL, PHP                |
| WAMP  | Windows, Apache, MySQL, PHP              |
| XAMPP | Cross-platform, Apache, MySQL, PHP, Perl |

```text
Client (Browser) → Server (Apache + PHP)
```

---

## **Client–Server Flow**

1. Client sends request (URL)
2. Request reaches server IP + port
3. Server processes request
4. Response sent back to client

---

## **3. Same Machine, Same IP, Different Ports**

### **How Multiple Services Run on One Machine**

A single machine has **one IP address**, but it can run **multiple services** using **different port numbers**.

**Example**

```
IP Address: 127.0.0.1 (localhost)

Web Server  → Port 80
Database    → Port 3306
Node App    → Port 3000
```

---

### **Why Ports Are Needed**

Ports differentiate services on the **same IP**.

```
IP + Port = Unique Network Endpoint
```

**Example URLs**

```
http://localhost:80
http://localhost:3000
```

---

## **4. Port Numbers**

### **What is a Port?**

A **port number** identifies a **specific process or service** running on a machine.

Port numbers range from:

```
0 → 65535
```

---

### **Port Number Categories**

| Range         | Name             | Description                    |
| ------------- | ---------------- | ------------------------------ |
| 0 – 1023      | Well-known ports | Reserved for standard services |
| 1024 – 49151  | Registered ports | Assigned to applications       |
| 49152 – 65535 | Dynamic ports    | Temporary / private use        |

---

### **Reserved Ports (≤ 1023)**

> Ports **below 1024** are reserved and usually require admin/root privileges.

| Port | Service |
| ---- | ------- |
| 80   | HTTP    |
| 443  | HTTPS   |
| 21   | FTP     |
| 22   | SSH     |
| 25   | SMTP    |

---

## **5. Key Takeaways**

* IP address is **32 bits** in IPv4
* Client is usually a **browser**
* Server can be **LAMP / WAMP / XAMPP**
* Same machine can host multiple services using **different ports**
* Ports identify services on the same IP
* Ports **0–1023** are reserved for standard services

```
Client → IP Address + Port → Server → Response
```
