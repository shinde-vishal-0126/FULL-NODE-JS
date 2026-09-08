/*
@ DNS

Q. What is DNS ?

  - DNS stands for DOMAIN NAME SYSTEM.
  - DNS is distributed naming system that translates human - redable domain name into IP address
  - ex. www.google.com  into 142.x.x.x so computer communicate using IP address.
  - Defincation
    - DNS is system that resolve domain name into IP address so clients can locate on a network

Q. Why do you need DNS ?

  - without DNS : user need to remember 142.250.x.x insted of www.google.com
  - so DNS provide Domain name into IP address.

# Note
  - DNS is not just domane it can store different type of records
  - imp recoreds
    1. A Record : Map a domain name to an IPV4 : ex.  example.com => 93.184.216.34
    2. AAAA Record : Map a domain name to an IPV6 : ex. example.com => IPV6 address.
    3. CNAME Record : create an alias from one domain name to another : ex. www.example.com => to example.com
    4. MX Recored : Specifies mail servers responsible for receiving email for a domain : ex. example.com => email.example.com
    5. TXT Record : Stores text information associated with a domain like commnely used for domain verification, SPF, DKIM related configuration, other domain policies
    6. NS Record : SPecifies the authoritative name servers for a domain
    7. PRT Record : used for reverse DNS , like ip address to hostname, (this is opposite direction of normal)
    8. SOA

Q. DNS Resollution (How does DNS resolution work ?)

  step 1 :
    - user enter : https://www.example.com so browser need ip address of https://www.example.com

  step 2 :
    - Browser check its DNS related cache, like operating system may have cache information if not available the system send the query to a "Recursive resolver"
    - so example of DNS resolver

      1. ISP resolver
      2. Google public DNS
      3. CloudFlare DNS

    - recursive resolver look for the answer.

Q. What is recursive resolver ?

  - In DNS, a recursive resolver is the DNS server that finds the final IP address for you when you ask for a domain name.
  - ex. suppose you enter : www.google.com
  - so your computer asks a recursive DNS resolver : "Give me the IP address of www.google.com"
    - The recursive resolver does the work of finding the answer

          Your Computer
              |
              | www.google.com ?
              ↓
        Recursive Resolver
              |
              ↓
        Root DNS Server
              |
              ↓
        .com DNS Server
              |
              ↓
        Authoritative DNS Server
              |
              ↓
        IP Address
              |
              ↓
        Recursive Resolver
              |
              ↓
        Your Computer

Q. Why is it called "recursive"?

  - Because your computer asks the resolver to completely resolve the domain name
  - i.e "I don't want to contact all the DNS servers myself. You find the final answer for me."
  - ! Recursive resolver = DNS server that takes your DNS request and does the necessary DNS lookups until it gets the final answer


  step 3 :
    - Recursive DNS resolver it may Query the "Root DNS server"

  step 4 :
    - Root DNS directs the resolver towards the appropriate "TLD server"
    - example : .com, .net, .org , .in etx

  step 5 :
    - TLD server directs the resolver to the "Authoritative name server" for the domain

  step 6 :
    - Authoritative DNS server return the DNS record
    - example : www.google.com =>  to 93.184.216.34

  step 7 :
    - Recursive DNS resolver cache the result according to the record TTL (Time To Live)

  step 8 :
    - The client receive the IP address.


                  Root DNS
                       |
                       ↓
                  TLD DNS
                 (.com/.org)
                       |
                       ↓
             Authoritative DNS
                       |
                       ↓
                 DNS Record
                       |
                       ↓
                  IP Address

# The recursive resolver may contact:

  1. Root server → Where is .com?
  2. TLD server → Where is google.com?
  3. Authoritative server → What is the IP of www.google.com?
  4. Returns the final IP to you.


Q. Root DNS server ?

  - Root DNS server are at the top of the DNS hierarchy.
  - They do not normally provide the final ip address for every domain.
  - The direct queries towards the appropriate TLD servers ex. .com, .org, .net, .in
  - There are 13 Logical root server identities A through M
    A-Root
    B-Root
    C-Root
    ...
    M-Root
  - Each root server identity is operated using many physical server instances distributed around the world. This is achieved using Anycast.

                Root Server System
                       |
        ┌──────────────┼──────────────┐
        ↓              ↓              ↓
      A-Root         B-Root         C-Root
        |              |              |
   Many locations  Many locations  Many locations
        |              |              |
      🌍 🌍 🌍        🌍 🌍 🌍        🌍 🌍 🌍


Q. TLD dns server ?

  - example .com, .in, .org, .io
  - TLD server know which authoritative name servers are responsible for domain under that TLD
  - example. example.com => .com TLD
  - so the authoritative name server for example.com


Q. Authoritative DNS server ?

  - The authoritative DNS server contains the DNS records for the domain
  - example www.example.com => a record 93.184.216.34
  - This is Authoritative source for the DNS information for that zone.

Q. DNS cache ?

  - DNS results are cached to avoid repeatedly performing the complete lookup
  - possible caching location includes

    Browser
      ↓
    Operating System
      ↓
    DNS Resolver

    # If a valid cached result exists:

    Domain
      ↓
    Cached IP
      ↓
    No complete DNS lookup required


Q DNS TTL

  - TTL : Time To Live
  - DNS records have TTL that determine how long a resolver may cache the record.
  - example TTL = 300 second.(The resolver can generally cache the answer for that period)
    - After the cache value expire Another DNS lookup may be required.


Q. Type of DNS ?

  1. Forward DNS
    - Domain Name (http://www.google.com) => TO IP address (93.184.216.34)
  2. Reverse DNS
    - IP address (93.184.216.34) ==> TO Domain Name (http://www.google.com)
      - Reverse DNS commanly used PTR recoreds.

Q. DNS port ?

  1. UDP Port : 53
  2. TCP Port : 53

# Note

  - UDP is commonly used for normal DNS requires because it has lower overhead
  - TCP can be used when required such as for larger response or DNS operation that require TCP

  ! modern DNS related Technologies can also use DNS over HTTPS (DoH) or DNS over TLS (DoT)

  1. DoH : DNS over HTTPs

    - DNS queries are transported using HTTPS
    - ex Application => HTTPS => DNS resolver

  2. DoT : DNS over TLS

    - DNS queries are transported over a TLS-protected connection.
    - ex. TCP => TLS => DNS resolver
*/
